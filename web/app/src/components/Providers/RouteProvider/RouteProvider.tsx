import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { AuthenticatedRoute } from './AuthenticatedRoute';
// import { useCurrentUserQuery } from '../../../generated/graphql';
import { SessionsList } from './../../SessionsList';
export const RouteProvider = (): JSX.Element | null => {
	// const { data, loading } = useCurrentUserQuery();
	// const user = data?.currentUser;
	// if (loading) {
	// 	return null;
	// }
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/clientId/:clientId/date/:date'>
					<SessionsList />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};
