import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './GlobalStyle';

interface StyleProviderProps {
	children: ReactNode;
}

export const StyleProvider = ({
	children,
}: StyleProviderProps): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
