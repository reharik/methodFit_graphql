import React, { useState } from 'react';
import { Header } from './Header';
import { Row } from './Row';

export enum SortDir {
	asc = 'asc',
	desc = 'desc',
}

type HeaderColumnComponentProps<T> = {
	column: TableColumn<T>;
};

export type RowColumnProps<T> = {
	column: TableColumn<T>;
	value: T[keyof T] | string;
	row?: T;
};

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
};

type DataTableProps<T> = {
	columns: TableColumn<T>[];
	tableData: T[];
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

const DataTable = <T,>({
	columns,
	tableData = [],
}: DataTableProps<T>): JSX.Element => {
	const [workingData, setWorkingData] = useState(tableData);

	const sortData = (sortDir: SortDir, sortProperty: string) => {
		const pred = sortPredicate(sortDir, sortProperty);
		setWorkingData([...workingData.sort(pred)]);
	};

	return (
		<>
			<Header columns={columns} onSortData={sortData} />
			{workingData.map((data, idx) => (
				<Row columns={columns} dataRow={data} key={idx} />
			))}
		</>
	);
};

export { DataTable };
