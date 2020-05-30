import { I } from 'ts/lib';

export enum ViewType {
	Grid	 = 0,
	List	 = 1,
	Gallery	 = 2,
	Board	 = 3,
};

export enum RelationType { 
	Title	 = 'title', 
	Text	 = 'description', 
	Number	 = 'number', 
	Date	 = 'date', 
	Select	 = 'select', 
	Multiple = 'multiselect',
	Link	 = 'link',
	File	 = 'file',
	Image	 = 'image',
	Bool	 = 'checkbox', 
	Icon	 = 'emoji',
	Url		 = 'url',
	Email	 = 'email',
	Phone	 = 'phone',
};

export enum SortType { 
	Asc		 = 0, 
	Desc	 = 1,
};

export enum FilterOperator { 
	And		 = 0, 
	Or		 = 1,
};

export enum FilterCondition { 
	Equal		 = 0,
	NotEqual	 = 1,
	Greater		 = 2,
	Less		 = 3,
	Like		 = 4,
	NotLike		 = 5,
	In			 = 6,
	NotIn		 = 7,
};

export interface Relation {
	id: string;
	name: string;
	type: RelationType;
	values?: any[];
};

export interface Sort {
	relationId: string;
	type: SortType;
};

export interface Filter {
	relationId: string;
	operator: FilterOperator;
	condition: FilterCondition;
	value: any;
};

export interface ViewRelation extends Relation {
	visible: boolean;
};

export interface View {
	id: string;
	name: string;
	type: ViewType;
	sorts: Sort[];
	filters: Filter[];
	relations: any[];
};

export interface Cell {
	id: string;
	relation: Relation;
	data: any;
	view: any;
};

export interface ContentDataview {
	databaseId: string;
	schemaURL: string;
	view: View;
	relations: Relation[];
	views: View[];
	data: any[];
};

export interface BlockDataview extends I.Block {
	content: ContentDataview;
};