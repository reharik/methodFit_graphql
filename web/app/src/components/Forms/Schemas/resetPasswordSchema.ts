import * as yup from 'yup';

export type ResetPasswordModel = {
	password: string;
	repeatPassword: string;
};
export const getModel = (): ResetPasswordModel => {
	return {
		password: '',
		repeatPassword: '',
	};
};

export const resetPasswordSchema = yup.object().shape({
	password: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Required'),
	repeatPassword: yup
		.string()
		.min(8, 'Password must be at least 8 characters')
		.required('Required')
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});
