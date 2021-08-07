/* eslint-disable max-lines */
import { DefaultTheme } from 'styled-components';

const colors = {
	black: '#000000',
	white: '#ffffff',

	purple: '#5A71C6',
	blue: '#087dae',
	light_blue: '#1daae5',
	green_blue: '#009EA1',
	green: '#009EA1',
	light_green: '#CBE4B9',
	yellow: '#5A71C6',
	light_yellow: '#FFEABB',
	orange: '#5A71C6',
	red: '#EF463B',
	light_red: '#FDD6CE',
	deep_red: '#A04937',
	brown: '#6D5D39',
	moonlight: '#171820',
	light_gray: '#e5e4e8',
	dark_blue_gray: '#676671',
	seal_gray: '#92919B',
	outline_gray: '#BEBEBE',
	elephant_gray: '#D9D1D1',
	lightest_gray: '#F2F1F3',
	eggshell: '#F9F9F9',

	sl_gray_90: '#242a30',
	sl_gray_100: '#f2f2f2',

	sl_green_60: '#438e29',
	sl_green_70: '#346f20',

	sl_blue_60: '#31a7a8',
	sl_gray_30: '#dce0e6',
	sl_gray_50: '#86919d',
};

export enum MaxWidthBreakpoint {
	Mobile = 500,
}

export enum MinWidthBreakpoint {
	Tablet = 501,
	Desktop = 801,
}

export const theme: DefaultTheme = {
	breakpoints: {
		/**
		 * DEPRECATED: It's recommended that you not use the `mobile` breakpoint
		 * when writing CSS. The recommended approach is to write mobile CSS first,
		 * and then use the `tabletUp`, `desktopUp`, `lgDesktopUp`, and
		 * `xlDesktopUp` breakpoints to override that CSS for larger screen sizes.
		 *
		 * 500 px and below.
		 */
		mobile: `@media screen and (max-width: ${MaxWidthBreakpoint.Mobile}px)`,
		/** 501 px and up. */
		tabletUp: `@media screen and (min-width: ${MinWidthBreakpoint.Tablet}px)`,
		/** 801 px and up. */
		desktopUp: `@media screen and (min-width: ${MinWidthBreakpoint.Desktop}px)`,
	},
	borderRadius: {
		/** 4px, 0.25rem */
		md: '0.25rem',
		/** 4px, 0.25rem */
		btn: '0.25rem',
	},
	spacing: {
		/** 4px, 0.25rem */
		xs: '0.25rem',
		/** 8px, 0.5rem */
		sm: '0.5rem',
		/** 16px, 1rem */
		md: '1rem',
		/** 24px, 1.5rem */
		lg: '1.5rem',
		/** 32px, 2rem */
		xl: '2rem',
		/** 40px, 2.5rem */
		xxl: '2.5rem',
		/** 48px, 3rem */
		xxxl: '3rem',
		/** 56px, 3.5rem */
		xxxxl: '3.5rem',
	},
	baseFont: '"IBM Plex Sans", sans-serif',
	fontSize: {
		/** 12px, 0.75rem */
		__25__: '0.75rem',
		/** 14px, 0.875rem */
		__50__: '0.875rem',
		/** 16px, 1rem */
		__100__: '1rem',
		/** 18px, 1.125rem */
		__200__: '1.125rem',
		/** 19px, 1.1875rem */
		__250__: '1.1875rem',
		/** 20px, 1.25rem */
		__300__: '1.25rem',
		/** 22px, 1.375rem */
		__350__: '1.375rem',
		/** 24px, 1.5rem */
		__400__: '1.5rem',
		/** 28px, 1.75rem */
		__500__: '1.75rem',
		/** 32px, 2rem */
		__600__: '2rem',
		/** 40px, 2.5rem */
		__700__: '2.5rem',
		/** 48px, 3rem */
		__800__: '3rem',
		/** 56px, 3.5rem */
		__900__: '3.5rem',
		/** 64px, 4rem */
		__1000__: '4rem',
	},
	weight: {
		/** 300 */
		light: 300,
		/** 400, normal */
		regular: 400,
		/** 600 */
		semiBold: 600,
		/** 700, bold */
		bold: 700,
	},
	color: {
		/* ---- GENERAL ---- */
		white: colors.white,
		black: colors.black,

		/* ---- BODY ---- */
		body: colors.eggshell,
		bodyText: colors.moonlight,

		/* ---- LINKS ---- */
		link: colors.blue,
		linkVisited: colors.purple,
		linkHover: colors.light_blue,
		linkActive: colors.purple,
		linkSelected: colors.blue,
		linkDisabled: colors.dark_blue_gray,

		/* ---- MENU ---- */
		menuText: colors.dark_blue_gray,
		menuActiveText: colors.moonlight,
		menuActiveBg: colors.light_gray,
		menuHoverBg: colors.eggshell,

		/* ---- BUTTONS ---- */
		primaryButtonBg: colors.blue,
		primaryButtonHover: colors.light_blue,
		buttonDisabledHover: colors.light_gray,
		buttonDisabled: colors.blue,

		/* ---- ALERTS ---- */
		alertError: colors.light_red,
		alertErrorText: colors.deep_red,
		alertInfoText: colors.blue,
		alertInfo: colors.light_blue,
		alertWarning: colors.light_yellow,
		alertWarningText: colors.brown,
		alertSuccess: colors.light_green,
		alertSuccessText: colors.green,

		/* ---- FORMS ---- */
		formError: colors.red,
		formDefault: colors.outline_gray,
		formText: colors.dark_blue_gray,
		label: colors.blue,
		inputHover: colors.blue,

		/* ---- LOADING ---- */
		loadingSpinner: colors.white,
		loadingDot: colors.white,
	},
};
