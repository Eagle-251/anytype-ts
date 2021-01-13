import * as React from 'react';
import { I, C, DataUtil } from 'ts/lib';
import { Icon, Input, Switch, MenuItemVertical } from 'ts/component';
import { commonStore, dbStore } from 'ts/store';
import { observer } from 'mobx-react';

interface Props extends I.Menu {};

const Constant = require('json/constant.json');

@observer
class MenuBlockRelationEdit extends React.Component<Props, {}> {

	timeout: number = 0;
	format: I.RelationType = I.RelationType.Description;
	objectTypes: string[] = [];
	ref: any = null;
	
	constructor(props: any) {
		super(props);
		
		this.onRelationType = this.onRelationType.bind(this);
		this.onDateSettings = this.onDateSettings.bind(this);
		this.onObjectType = this.onObjectType.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onCopy = this.onCopy.bind(this);
		this.onRemove = this.onRemove.bind(this);
	};

	render () {
		const relation = this.getRelation();
		const { objectTypes } = dbStore;

		let opts = null;
		let ccn = [ 'item' ];
		if (commonStore.menuIsOpen('dataviewRelationType')) {
			ccn.push('active');
		};
		if (relation) {
			ccn.push('disabled');
		};

		if (relation) {
			const isDate = relation.format == I.RelationType.Date;
			const isObject = relation.format == I.RelationType.Object;
			const url = relation && relation.objectTypes.length ? relation.objectTypes[0] : '';
			const objectType = objectTypes.find((it: I.ObjectType) => { return it.url == url; });

			opts = (
				<React.Fragment>
					{isDate ? (
						<React.Fragment>
							<div className="line" />
							<div className="item">
								<Icon className="clock" />
								<div className="name">Include time</div>
								<Switch value={relation.includeTime} className="green" onChange={(e: any, v: boolean) => { this.onChangeTime(v); }} />
							</div>

							<MenuItemVertical id="date-settings" icon="settings" name="Preferences" arrow={true} onClick={this.onDateSettings} />
						</React.Fragment>
					) : ''}

					{isObject ? (
						<React.Fragment>
							<div className="line" />
							<div className="sectionName">Object type</div>
							<MenuItemVertical 
								id="object-type" 
								object={objectType} 
								name={objectType ? objectType.name : 'Select object type'} 
								onClick={this.onObjectType} 
								arrow={true}
							/>
						</React.Fragment>
					) : ''}
				</React.Fragment>
			);
		};

		return (
			<form onSubmit={this.onSubmit}>
				<div className="sectionName">Relation name</div>
				<div className="inputWrap">
					<Input ref={(ref: any) => { this.ref = ref; }} value={relation ? relation.name : ''}  />
				</div>
				<div className="sectionName">Relation type</div>
				<MenuItemVertical 
					id="relation-type" 
					icon={'relation ' + DataUtil.relationClass(this.format)} 
					name={Constant.relationName[this.format]} 
					onClick={this.onRelationType} 
					arrow={!relation}
				/>
				
				{opts}
				
				{relation ? (
					<React.Fragment>
						<div className="line" />
						<MenuItemVertical icon="copy" name="Duplicate" onClick={this.onCopy} />
						<MenuItemVertical icon="remove" name="Delete relation" onClick={this.onRemove} />
					</React.Fragment>
				) : ''}
			</form>
		);
	};

	componentDidMount() {
		const relation = this.getRelation();

		if (relation) {
			this.format = relation.format;
			this.forceUpdate();
		};

		this.focus();
	};

	componentDidUpdate () {
		this.focus();
	};

	componentWillUnmount () {
		window.clearTimeout(this.timeout);
	};

	focus () {
		window.setTimeout(() => {
			if (this.ref) {
				this.ref.focus();
			};
		}, 15);
	};
	
	onRelationType (e: any) {
		const { param } = this.props;
		const { data } = param;
		const relation = this.getRelation();
		
		if (relation) {
			return;
		};

		this.menuOpen('dataviewRelationType', { 
			element: '#item-relation-type',
			offsetX: 224,
			offsetY: 4,
			type: I.MenuType.Vertical,
			vertical: I.MenuDirection.Center,
			horizontal: I.MenuDirection.Left,
			data: {
				value: this.format,
				onSelect: (item: any) => {
					this.format = item.format;
					this.forceUpdate();
				},
				...data
			}
		});
	};

	onObjectType (e: any) {
		const { objectTypes } = dbStore;
		const relation = this.getRelation();
		const value = relation && relation.objectTypes.length ? relation.objectTypes[0] : '';
		const options = objectTypes.map((it: I.ObjectType) => {
			return { ...it, object: it, id: DataUtil.schemaField(it.url) };
		});

		options.sort((c1: any, c2: any) => {
			if (c1.name > c2.name) return 1;
			if (c1.name < c2.name) return -1;
			return 0;
		});

		this.menuOpen('select', { 
			element: '#item-object-type',
			offsetX: 224,
			offsetY: 4,
			width: 280,
			type: I.MenuType.Vertical,
			vertical: I.MenuDirection.Center,
			horizontal: I.MenuDirection.Left,
			data: {
				value: value,
				options: options,
				onSelect: (e: any, item: any) => {
					this.objectTypes = [ item.url ];

					if (relation) {
						this.save();
					};
				},
			}
		});
	};

	onChangeTime (v: boolean) {
		const relation = this.getRelation();
		relation.includeTime = v;
	};

	onDateSettings (e: any) {
		const { param } = this.props;
		const { data } = param;

		this.menuOpen('dataviewDate', { 
			element: '#item-date-settings',
			offsetX: 224,
			offsetY: -38,
			type: I.MenuType.Vertical,
			vertical: I.MenuDirection.Bottom,
			horizontal: I.MenuDirection.Left,
			onClose: () => {
				commonStore.menuClose('select');
			},
			data: data
		});
	};

	menuOpen (id: string, param: I.MenuParam) {
		commonStore.menuCloseAll([ 'select', 'dataviewRelationType', 'dataviewDate' ]);

		window.clearTimeout(this.timeout);
		this.timeout = window.setTimeout(() => { commonStore.menuOpen(id, param); }, Constant.delay.menu);
	};

	onCopy (e: any) {
		const relation = this.getRelation();
		const newRelation: any = { name: relation.name, format: relation.format };

		this.add(newRelation);
		close();
	};

	onRemove (e: any) {
		close();
	};

	onSubmit (e: any) {
		e.preventDefault();

		this.save();
		this.props.close();
	};

	save () {
		const name = this.ref.getValue();
		if (!name) {
			return;
		};

		const relation = this.getRelation();
		const newRelation: any = { name: name, format: this.format };

		if (this.format == I.RelationType.Object) {
			newRelation.objectTypes = this.objectTypes;
		};

		relation ? this.update(newRelation) : this.add(newRelation);
	};

	add (newRelation: any) {
		const { param } = this.props;
		const { data } = param;
		const { rootId, blockId } = data;

		C.BlockRelationAdd(rootId, blockId, newRelation);
	};

	update (newRelation: any) {
		const relation = this.getRelation();
	};

	getRelation () {
		const { param } = this.props;
		const { data } = param;
		const { rootId, relationKey } = data;
		const relations = dbStore.getRelations(rootId, rootId);
		return relations.find((it: I.Relation) => { return it.relationKey == relationKey; });
	};

};

export default MenuBlockRelationEdit;