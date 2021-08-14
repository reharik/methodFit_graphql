/*
 * File: /app/src/components/DataTable/CheckBox.js
 * Project: admin-portal
 * Created Date: 2021-08-08
 * Author: Raif Harik
 *
 */
import React from 'react';

import {
	TableColumn,
	HeaderColumnComponentProps,
	RowColumnProps,
} from './DataTable';

const CheckBox = <T extends { metadata?: { selected?: boolean } }>({
	row,
	setCheckBoxSelection,
}: RowColumnProps<T>) => {
	const selected = row?.metadata?.selected || false;
	if (!row) {
		return null;
	}
	return (
		<div>
			<input
				type='checkbox'
				checked={selected}
				onChange={() =>
					setCheckBoxSelection && setCheckBoxSelection(row)
				}
			/>
		</div>
	);
};

const HeaderCheckBox = <T,>({
	toggleSelectAll,
	allSelected,
}: HeaderColumnComponentProps<T>) => {
	return (
		<div>
			<input
				type='checkbox'
				checked={allSelected}
				onChange={toggleSelectAll}
			/>
		</div>
	);
};

export const bulkSelectionColumn = <T,>(): TableColumn<T> => {
	return {
		propertyName: 'checkbox',
		width: '30px',
		rowColumnComponent: ({ column, value, row, setCheckBoxSelection }) => (
			<CheckBox
				column={column}
				value={value}
				setCheckBoxSelection={setCheckBoxSelection}
				row={row}
			/>
		),
		headerColumnComponent: ({ column, toggleSelectAll, allSelected }) => (
			<HeaderCheckBox
				column={column}
				allSelected={allSelected}
				toggleSelectAll={toggleSelectAll}
			/>
		),
	};
};
