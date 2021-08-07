import { LinusInputChildrenProps } from './../../../types';
import { Dropdown } from './Dropdown';
import { Text } from './Text';

export const Input = <T,>(props: LinusInputChildrenProps<T>): JSX.Element => {
	switch (props.type) {
		case 'select':
			return <Dropdown {...props} />;
		default:
			return <Text {...props} />;
	}
};
