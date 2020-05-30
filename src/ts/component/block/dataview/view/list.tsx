import * as React from 'react';
import { Icon } from 'ts/component';
import { I } from 'ts/lib';

import Cell from '../cell';

interface Props extends I.BlockDataview {
	content: any;
};

class ViewList extends React.Component<Props, {}> {

	render () {
		const { content } = this.props;
		const { data, view } = content;
		
		const Card = (item: any) => (
			<div className="item">
				{view.relations.map((relation: any, i: number) => (
					<Cell key={relation.id} id={item.index} view={view} relation={...relation} data={data[item.index]} />
				))}
			</div>
		);
		
		return (
			<div className="view viewList">
				{data.map((item: any, i: number) => (
					<Card key={i} index={i} {...item} />
				))}
			</div>
		);
	};
	
};

export default ViewList;