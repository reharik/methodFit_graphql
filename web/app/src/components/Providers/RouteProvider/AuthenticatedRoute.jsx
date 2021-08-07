import { Route, Redirect } from 'react-router-dom';

export const AuthenticatedRoute = ({ children, user, path, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				return user?.id ? (
					children
				) : (
					<Redirect to='auth/login?redirect=path' />
				);
			}}
		/>
	);
};
