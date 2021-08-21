import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DataTable } from './DataTable';
import { DataTableProps, RowColumnProps, RowMetadata } from './types.d';
import styled from 'styled-components';

export default {
	title: 'src/components/DataTable',
	component: DataTable,
} as ComponentMeta<typeof DataTable>;

type DataType = {
	firstName: string;
	age: number;
	lastName: string;
	email: string;
	id: number;
	dob: string;
	metadata: RowMetadata;
};

// const Template: ComponentStory<typeof DataTable> = (
// 	args: DataTableProps<DataType>
// ) => <DataTable {...args} />;

const Template: ComponentStory<typeof DataTable> = (
	args: DataTableProps<any>
) => <DataTable<DataType> {...args} />;

const tableData = [
	{
		firstName: 'Raif',
		age: 33,
		lastName: 'Harik',
		email: 'f@u.com',
		id: 1,
		dob: '1/5/1972',
	},
	{
		firstName: 'Kahlil',
		age: 10,
		lastName: 'Harik',
		email: 'Kahlil@gmail.com',
		id: 2,
		dob: '6/13/2012',
	},
];
const EmailLink = <T,>({ column, value, row }: RowColumnProps<T>) => (
	<div>
		<a href={'mailto:' + value}>{value}</a>
	</div>
);
export const AllFeatures = Template.bind({});
AllFeatures.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'age',
			sortable: true,
		},
		{
			propertyName: 'dob',
			headerDisplay: 'Birthday',
			width: '200px',
			// formatProperty: ({ value }) => {
			// 	const date = new Date(value || '');
			// 	return date.toDateString();
			// },
			rowColumnComponent: ({ value }) => {
				return <button onClick={() => alert(value)}>{value}</button>;
			},
		},
		{
			headerColumnComponent: () => {
				return (
					<div style={{ color: 'Red', fontSize: '16px' }}>
						{'Email'}
					</div>
				);
			},
			rowColumnComponent: EmailLink,
			propertyName: 'email',
			width: '200px',
		},
	],
	tableData,
	bulkSelection: true,
	rowDecorator: (row) => {
		const x = row as DataType;
		if (x.age < 13) {
			return StyledDisabledRow;
		}
	},
	metadataDecorator: (row) => {
		const x = row as DataType;
		return {
			...x.metadata,
			disabled: x.age > 13,
		};
	},
};

export const Simple = Template.bind({});
Simple.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{ propertyName: 'firstName' },
	],
	tableData,
};

export const TableWithCustomHeaderComponent = Template.bind({});
TableWithCustomHeaderComponent.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			headerColumnComponent: () => {
				return (
					<div style={{ color: 'Red', fontSize: '16px' }}>
						{'Email'}
					</div>
				);
			},
			propertyName: 'email',
			width: '200px',
		},
	],

	tableData,
};

export const TableWithCustomCellComponent = Template.bind({});

TableWithCustomCellComponent.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			rowColumnComponent: EmailLink,
			propertyName: 'email',
			width: '200px',
		},
	],

	tableData,
};

export const TableWithFormattedCellData = Template.bind({});
TableWithFormattedCellData.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'dob',
			headerDisplay: 'Birthday',
			width: '200px',
			// formatProperty: ({ value }) => {
			// 	const date = new Date(value || '');
			// 	return date.toDateString();
			// },
		},
	],

	tableData,
};

export const TableWithFormattedCellDataAndCustomCellComponent = Template.bind(
	{}
);
TableWithFormattedCellDataAndCustomCellComponent.args = {
	columns: [
		{ propertyName: 'id', headerDisplay: 'ID' },
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'dob',
			headerDisplay: 'Birthday',
			width: '200px',
			// formatProperty: ({ value }) => {
			// 	const date = new Date(value || '');
			// 	return date.toDateString();
			// },
			rowColumnComponent: ({ value }) => {
				return <button>{value}</button>;
			},
		},
	],
	tableData,
};

export const SortableTable = Template.bind({});
SortableTable.args = {
	columns: [
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'age',
			sortable: true,
		},
	],
	tableData,
};

export const CheckboxTable = Template.bind({});
CheckboxTable.args = {
	columns: [
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'age',
			sortable: true,
		},
	],
	tableData,
	bulkSelection: true,
};

export const CheckboxTableWithMetaFunction = Template.bind({});
CheckboxTableWithMetaFunction.args = {
	columns: [
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'age',
			sortable: true,
		},
	],
	tableData,
	bulkSelection: true,
	metadataDecorator: (row) => {
		const x = row as DataType;
		return {
			...x.metadata,
			disabled: x.age < 13,
		};
	},
};

export const CheckboxTableWithRowDecorator = Template.bind({});
CheckboxTableWithRowDecorator.args = {
	columns: [
		{
			propertyName: 'firstName',
		},
		{
			propertyName: 'lastName',
			sortable: true,
		},
		{
			propertyName: 'email',
			width: '200px',
		},
		{
			propertyName: 'age',
			sortable: true,
		},
	],
	tableData,
	bulkSelection: true,
	rowDecorator: (row) => {
		const x = row as DataType;
		if (x.age < 13) {
			return StyledDisabledRow;
		}
	},
};

const StyledDisabledRow = styled.div`
	background-color: gray;
	border: 5px solid black;
`;
