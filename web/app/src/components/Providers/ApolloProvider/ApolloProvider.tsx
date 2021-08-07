import React, { ReactNode } from 'react';
import {
	ApolloClient,
	ApolloProvider as _ApolloProvider,
	NormalizedCacheObject,
	createHttpLink,
} from '@apollo/client';
import { cache } from './cache';
import { config } from './../../../config';
import { setContext } from '@apollo/client/link/context';

const createUri = (): string => {
	return `${config.apiProtocol}://${config.apiHost}:${config.apiPort}/${config.apiDomain}`;
};

const httpLink = createHttpLink({
	uri: createUri(),
});

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('sl-token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : '',
		},
	};
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
});

interface ApolloProviderProps {
	children: ReactNode;
}

export const ApolloProvider = ({
	children,
}: ApolloProviderProps): JSX.Element => {
	// eslint-disable-next-line react/jsx-pascal-case
	return <_ApolloProvider client={client}>{children}</_ApolloProvider>;
};
