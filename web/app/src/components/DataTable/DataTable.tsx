import React, { useState } from 'react';
import { Header } from './Header';
import { Row } from './Row';
import { bulkSelectionColumn } from './CheckBox';

export enum SortDir {
	asc = 'asc',
	desc = 'desc',
}

export type HeaderColumnComponentProps<T> = {
	column: TableColumn<T>;
	toggleSelectAll?: () => void;
	allSelected?: boolean;
};

export interface RowColumnProps<T> {
	column: TableColumn<T>;
	value: T[keyof T];
	row?: T;
	setCheckBoxSelection?: (row: T) => void;
}

export type TableColumn<T> = {
	propertyName: string;
	// TODO: Fix the issue with this and DataTables.stories.tsx
	formatProperty?: (format: RowColumnProps<T>) => T[keyof T];
	rowColumnComponent?: (format: RowColumnProps<T>) => JSX.Element;
	width?: string;
	headerDisplay?: string;
	headerColumnComponent?: (
		format: HeaderColumnComponentProps<T>
	) => JSX.Element;
	sortable?: boolean;
	sortDir?: SortDir;
	sortProperty?: string;
	isBulkColumn?: boolean;
};

type DataTableProps<T> = {
	columns: TableColumn<T>[];
	tableData: T[];
	bulkSelection?: boolean;
	identityColumn: string;
};

const sortPredicate = <T,>(sortDir: SortDir, sortProperty: string) => {
	return (a: T, b: T): number => {
		if (a[sortProperty as keyof T] < b[sortProperty as keyof T])
			return sortDir === SortDir.desc ? -1 : 1;
		if (a[sortProperty as keyof T] > b[sortProperty as keyof T])
			return sortDir === SortDir.desc ? 1 : -1;
		return 0;
	};
};

const DataTable = <T extends { metadata?: { selected?: boolean } }>({
	columns,
	tableData = [],
	bulkSelection = false,
	identityColumn = 'id',
}: DataTableProps<T>): JSX.Element => {
	const [workingData, setWorkingData] = useState(tableData);
	const [allSelected, setAllSelected] = useState(false);

	const allColumns = bulkSelection
		? [bulkSelectionColumn() as TableColumn<T>, ...columns]
		: columns;

	const sortData = (sortDir: SortDir, sortProperty: string) => {
		const pred = sortPredicate(sortDir, sortProperty);
		setWorkingData([...workingData].sort(pred));
	};

	const toggleSelectAll = () => {
		setWorkingData(
			workingData.map((row) => {
				row.metadata = { selected: !allSelected };
				return row;
			})
		);
		setAllSelected(!allSelected);
	};

	const setCheckBoxSelection = (row: T): void => {
		setWorkingData(
			workingData.map((r) => {
				if (
					r[identityColumn as keyof T] ===
					row[identityColumn as keyof T]
				) {
					r.metadata = { selected: !r.metadata?.selected };
				}
				return r;
			})
		);
		if (allSelected) {
			setAllSelected(false);
		}
	};

	return (
		<>
			<Header
				columns={allColumns}
				onSortData={sortData}
				toggleSelectAll={toggleSelectAll}
				allSelected={allSelected}
			/>
			{workingData.map((data, idx) => (
				<Row
					columns={allColumns}
					dataRow={data}
					setCheckBoxSelection={setCheckBoxSelection}
					key={idx}
				/>
			))}
		</>
	);
};

export { DataTable };
