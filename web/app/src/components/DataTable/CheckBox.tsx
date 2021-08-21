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
	CheckboxRowColumnProps,
	BulkPropsType,
	RowMetadata,
} from './types.d';

const CheckBox = <T,>({
	row,
	setCheckBoxSelection,
}: CheckboxRowColumnProps<T>) => {
	// lame hack but that's what the compiler told me to do.
	const unknownMetadata = row['metadata' as keyof T] as unknown;
	const { selected, disabled } = unknownMetadata as RowMetadata;
	if (!row) {
		return null;
	}
	return (
		<div>
			<input
				type='checkbox'
				checked={!!(selected && !disabled)}
				disabled={disabled}
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

export const bulkSelectionColumn = <T,>({
	workingData,
	updateWorkingData,
	allSelected,
	setAllSelected,
	identityColumn,
}: BulkPropsType<T>): TableColumn<T> => {
	const setCheckBoxSelection = (row: T): void => {
		const id = identityColumn as keyof T;
		updateWorkingData(
			workingData.map((r) => {
				if (r[id] === row[id]) {
					r.metadata.selected = !r.metadata.selected;
				}
				return r;
			})
		);
		if (allSelected) {
			setAllSelected(false);
		}
	};

	const toggleSelectAll = () => {
		updateWorkingData(
			workingData.map((row) => {
				return {
					...row,
					metadata: { ...row.metadata, selected: !allSelected },
				};
			})
		);
		setAllSelected(!allSelected);
	};

	return {
		propertyName: 'checkbox',
		width: '30px',
		rowColumnComponent: ({ column, value, row }) => (
			<CheckBox
				column={column}
				value={value}
				setCheckBoxSelection={setCheckBoxSelection}
				row={row}
			/>
		),
		headerColumnComponent: ({ column }) => (
			<HeaderCheckBox
				column={column}
				allSelected={allSelected}
				toggleSelectAll={toggleSelectAll}
			/>
		),
	};
};
