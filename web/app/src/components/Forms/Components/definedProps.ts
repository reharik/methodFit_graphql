import { LinusInputChildrenProps, DropdownOption } from './../../../types';

type AvailableProps = {
	[key: string]: string | DropdownOption[];
};

export const definedProps = <T>(
	props: LinusInputChildrenProps<T>
): AvailableProps => {
	return Object.keys(props).reduce((acc, key) => {
		if (props[key as keyof LinusInputChildrenProps<T>]) {
			acc[key] = props[key as keyof LinusInputChildrenProps<T>] as
				| string
				| DropdownOption[];
		}
		return acc;
	}, {} as AvailableProps);
};
