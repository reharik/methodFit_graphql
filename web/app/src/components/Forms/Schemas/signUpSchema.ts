import * as yup from 'yup';

export type SignUpModel = {
	email: string;
	password: string;
};

//TODO: hook this function up to retrieve email from API
// so we can autopopulate this field
export const getModel = (): SignUpModel => {
	return {
		email: 'alreadypopulated@email.com',
		password: '',
	};
};

export const signUpSchema = yup.object().shape({
	email: yup.string().email('Invalid email address').required('Required'),
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Required'),
});
