import { BrowserRouter, Switch } from 'react-router-dom';
// import { AuthenticatedRoute } from './AuthenticatedRoute';
// import { useCurrentUserQuery } from '../../../generated/graphql';

export const RouteProvider = (): JSX.Element | null => {
	// const { data, loading } = useCurrentUserQuery();
	// const user = data?.currentUser;
	// if (loading) {
	// 	return null;
	// }
	return (
		<BrowserRouter>
			<Switch>
			</Switch>
		</BrowserRouter>
	);
};
