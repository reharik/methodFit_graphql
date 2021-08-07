import * as yup from 'yup';

export type LoginModel = {
	username: string;
	password: string;
};

export const getModel = (): LoginModel => {
	return { username: '', password: '' };
};

export const validationSchema = yup.object().shape({
	username: yup.string().email('Invalid email address').required('Required'),
	password: yup.string().required('Required'),
});
