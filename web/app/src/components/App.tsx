import { ApolloProvider } from './Providers/ApolloProvider/ApolloProvider';
import { StyleProvider } from './Providers/StyleProvider/StyleProvider';
import { Layout } from "./layout/Layout";

export const App = (): JSX.Element => {
	return (
		<ApolloProvider>
			<StyleProvider>
				<Layout />
			</StyleProvider>
		</ApolloProvider>
	);
};
