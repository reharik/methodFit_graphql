import React, { useCallback, useEffect, useState } from 'react';
import { Header } from './Header';
import { Row } from './Row';
import { bulkSelectionColumn } from './CheckBox';
import {
	BulkPropsType,
	DataTableProps,
	RowMetadata,
	SortDir,
	TableColumn,
} from './types.d';

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
	bulkSelection = false,
	identityColumn = 'id',
	metadataDecorator,
	rowDecorator,
	setSelectedRows,
}: DataTableProps<T>): JSX.Element => {
	const tableDataWithMetadata = useCallback(
		() =>
			tableData.map((r) => {
				let metadata = {};
				if (metadataDecorator) {
					metadata = { ...metadata, ...metadataDecorator(r) };
				}
				return { ...r, metadata };
			}),
		[metadataDecorator, tableData]
	);

	const [workingData, setWorkingData] = useState(tableDataWithMetadata());
	const [allSelected, setAllSelected] = useState(false);

	useEffect(() => {
		setWorkingData(tableDataWithMetadata);
	}, [tableDataWithMetadata]);

	const updateWorkingData = (data: (T & { metadata: RowMetadata })[]) => {
		if (setSelectedRows) {
			const ids = data
				.filter((d) => d.metadata.selected)
				.map((d) => d[identityColumn as keyof T]);
			setSelectedRows(ids);
		}
		setWorkingData(data);
	};

	const bulkProps: BulkPropsType<T> = {
		workingData,
		updateWorkingData,
		allSelected,
		setAllSelected,
		identityColumn,
	};
	const allColumns = bulkSelection
		? [bulkSelectionColumn(bulkProps) as TableColumn<T>, ...columns]
		: columns;

	const sortData = (sortDir: SortDir, sortProperty: string) => {
		const pred = sortPredicate(sortDir, sortProperty);
		updateWorkingData([...workingData].sort(pred));
	};

	return (
		<>
			<Header
				columns={allColumns}
				onSortData={sortData}
				allSelected={allSelected}
			/>
			{workingData.map((data, idx) => (
				<Row
					columns={allColumns}
					dataRow={data}
					rowDecorator={rowDecorator}
					key={idx}
				/>
			))}
		</>
	);
};

export * from './types.d';
export { DataTable };
