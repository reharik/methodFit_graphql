/* eslint-disable max-lines */
import { createGlobalStyle, css } from 'styled-components';

// baseCSS was partially copied from `apps/web/app/assets/stylesheets/web/_lib/base.scss`
const baseCSS = css`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}
`;

// resetCSS was copied from `apps/web/app/assets/stylesheets/web/_lib/reset.css`
const resetCSS = css`
	html,
	body,
	div,
	span,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	code,
	del,
	dfn,
	em,
	img,
	q,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	dialog,
	figure,
	footer,
	header,
	hgroup,
	nav,
	section,
	input,
	select,
	textarea {
		margin: 0;
		padding: 0;
		border: 0;
		font-weight: inherit;
		font-style: inherit;
		font-size: 100%;
		font-family: inherit;
		vertical-align: baseline;
	}

	ul li {
		list-style-type: none;
	}

	article,
	aside,
	dialog,
	figure,
	footer,
	header,
	hgroup,
	nav,
	section {
		display: block;
	}

	body {
		line-height: 1.5;
	}

	/* Tables still need 'cellspacing="0"' in the markup. */
	table {
		border-collapse: separate;
		border-spacing: 0;
	}
	caption,
	th,
	td {
		text-align: left;
		font-weight: normal;
	}
	table,
	td,
	th {
		vertical-align: middle;
	}

	/* Remove possible quote marks (") from <q>, <blockquote>. */
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
	}
	blockquote,
	q {
		quotes: '' '';
	}

	/* Remove annoying border on linked images. */
	a img {
		border: none;
	}
`;

const typographyCSS = css(
	({
		theme: { color, baseFont, fontSize, weight, spacing, breakpoints },
	}) => `
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
	
	body,
	input,
	textarea,
	select,
	button,
	legend,
	p {
		color: ${color.bodyText};
		font-family: ${baseFont};
		font-weight: ${weight.regular};
		font-size: ${fontSize._16};
		line-height: 22px;
		-webkit-font-smoothing: antialiased;
	}

	body {
		background-color: ${color.body};
	}

	p {
		margin-top: 0;
		margin-bottom: ${spacing.lg};
		margin-left: 0;
		margin-right: 0;
	}

	a {
		color: ${color.link};
		text-decoration: none;
		cursor: pointer;
		font-weight: ${weight.regular};
		/* stylelint-disable-next-line max-nesting-depth */
		&:visited {
			color: ${color.linkVisited};
		}
		/* stylelint-disable-next-line max-nesting-depth */
		&:focus,
		&:hover {
			color: ${color.linkHover};
		}
		/* stylelint-disable-next-line max-nesting-depth */
		&:active {
			color: ${color.linkActive};
		}
	}


	`
);

export const GlobalStyle = createGlobalStyle`
	${baseCSS}
	${resetCSS}
	${typographyCSS}
`;
