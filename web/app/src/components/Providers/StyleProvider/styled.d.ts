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
		boxShadow: {
			/* Standard Shadow - Light */
			standard: string;
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
			_36: string;
			_32: string;
			_24: string;
			_21: string;
			_18: string;
			_16: string;
			_14: string;
			_12: string;
			_10: string;
		};
		weight: {
			light: number;
			regular: number;
			medium: number;
			semi: number;
			bold: number;
		};
		color: {
			/* ---- GENERAL ---- */
			white: string;
			black: string;

			/* ---- BODY ---- */
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
			primaryButtonFocusBorder: string;
			secondaryButtonBg: string;
			secondaryButtonColor: string;
			secondaryButtonBorder: string;
			secondaryButtonFocusBorder: string;
			buttonDisabled: string;

			/* ---- ALERTS ---- */
			alertError: string;
			alertErrorText: string;
			alertInfoText: string;
			alertWarning: string;
			alertWarningText: string;
			alertSuccess: string;
			alertSuccessText: string;

			/* ---- FORMS ---- */
			formError: string;
			inputBorder: string;
			formText: string;
			label: string;
			inputHover: string;
			inputFocus: string;

			/* ---- DATA TABLE ---- */
			headerBorder: string;
			cellHoverBg: string;
			activeText: string;
			invitedText: string;
			deactivatedText: string;
			titleText: string;

			/* ---- LOADING ---- */
			loadingSpinner: string;
			loadingDot: string;

			/* ---- TEXT ---- */
			textDisabled: string;
			textInfo: string;
		};
	}
}
