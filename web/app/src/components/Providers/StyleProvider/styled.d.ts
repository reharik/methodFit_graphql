/* eslint-disable max-lines */
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		breakpoints: {
			/** 500 px and down */
			mobile: string;
			/** 501 px and up */
			tabletUp: string;
			/** 801 px and up */
			desktopUp: string;
		};

		borderRadius: {
			/** 4px, 0.25rem */
			md: string;
			/** 4px, 0.25rem */
			btn: string;
		};

		spacing: {
			/** 4px, 0.25rem */
			xs: string;
			/** 8px, 0.5rem */
			sm: string;
			/** 16px, 1rem */
			md: string;
			/** 24px, 1.5rem */
			lg: string;
			/** 32px, 2rem */
			xl: string;
			/** 40px, 2.5rem */
			xxl: string;
			/** 48px, 3rem */
			xxxl: string;
			/** 56px, 3.5rem */
			xxxxl: string;
		};

		baseFont: string;
		fontSize: {
			/** 12px, 0.75rem */
			__25__: string;
			/** 14px, 0.875rem */
			__50__: string;
			/** 16px, 1rem */
			__100__: string;
			/** 18px, 1.125rem */
			__200__: string;
			/** 19px, 1.1875rem */
			__250__: string;
			/** 20px, 1.25rem */
			__300__: string;
			/** 22px, 1.375rem */
			__350__: string;
			/** 24px, 1.5rem */
			__400__: string;
			/** 28px, 1.75rem */
			__500__: string;
			/** 32px, 2rem */
			__600__: string;
			/** 40px, 2.5rem */
			__700__: string;
			/** 48px, 3rem */
			__800__: string;
			/** 56px, 3.5rem */
			__900__: string;
			/** 64px, 4rem */
			__1000__: string;
		};
		weight: {
			/** 300 */
			light: number;
			/** 400, normal */
			regular: number;
			/** 600 */
			semiBold: number;
			/** 700, bold */
			bold: number;
		};

		color: {
			/* ---- GENERAL ---- */
			white: string;
			black: string;
			body: string;
			bodyText: string;

			/* ---- LINKS ---- */
			link: string;
			linkVisited: string;
			linkHover: string;
			linkActive: string;
			linkSelected: string;
			linkDisabled: string;

			/* ---- MENU ---- */
			menuText: string;
			menuActiveText: string;
			menuActiveBg: string;
			menuHoverBg: string;

			/* ---- BUTTONS ---- */
			primaryButtonBg: string;
			primaryButtonHover: string;
			buttonDisabledHover: string;
			buttonDisabled: string;

			/* ---- ALERTS ---- */
			alertError: string;
			alertErrorText: string;
			alertInfoText: string;
			alertInfo: string;
			alertWarning: string;
			alertWarningText: string;
			alertSuccess: string;
			alertSuccessText: string;

			/* ---- FORMS ---- */
			formError: string;
			formDefault: string;
			formText: string;
			label: string;
			inputHover: string;

			/* ---- LOADING ---- */
			loadingSpinner: string;
			loadingDot: string;
		};
	}
}
