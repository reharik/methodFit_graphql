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
	row: T;
}

export interface CheckboxRowColumnProps<T> extends RowColumnProps<T> {
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

export type RowMetadata = {
	selected?: boolean;
	disabled?: boolean;
};

export type DataTableProps<T> = {
	columns: TableColumn<T>[];
	tableData: T[];
	bulkSelection?: boolean;
	identityColumn?: string;
	metadataDecorator?: (row: T) => RowMetadata;
	rowDecorator?: (row: T) => JSX.ReactNode | undefined;
	setSelectedRows?: (
		rows: (T & { metadata: RowMetadata })[keyof T][]
	) => void;
};

export type BulkPropsType<T> = {
	workingData: (T & { metadata: RowMetadata })[];
	updateWorkingData: (data: (T & { metadata: RowMetadata })[]) => void;
	allSelected: boolean;
	setAllSelected: React.Dispatch<React.SetStateAction<boolean>>;
	identityColumn?: string;
};

export type HeaderProps<T> = {
	columns: TableColumn<T>[];
	onSortData: (sortDir: SortDir, sortProperty: string) => void;
	toggleSelectAll?: () => void;
	allSelected?: boolean;
};

export type HeaderCellProps<T> = {
	column: TableColumn<T>;
	value: string | JSX.Element;
	onSortData: (sortDir: SortDir, sortProperty: string) => void;
};

export type TableRowProps<T> = {
	columns: TableColumn<T>[];
	dataRow: T;
	rowDecorator?: (row: T) => ReactNode | undefined;
};

export type TableRowCellProps<T> = {
	width: string;
	text: T[keyof T] | JSX.Element;
};
