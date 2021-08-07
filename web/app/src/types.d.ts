export type LinusInputChildrenProps<T> = FormElementProps & {
	value: T;
	error?: string;
};

export interface FormElementProps {
	name: string;
	type?: string;
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	dropdownOptions?: DropdownOption[];
}

export interface DropdownOption {
	// actual dropdown values
	value: string | number;
	// dropdown display names for corresponding values
	name: string | number;
}
