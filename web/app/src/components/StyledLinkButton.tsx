/*
 * File: /apps/web/src/components/sharedStyledComponents/StyledLinkButton.js
 * Project: tr-web
 * Created Date: 2020-09-22
 * Author: Raif
 */
import styled from "styled-components";

type StyledLinkButtonProps = {width?:string};
export const StyledLinkButton = styled.button<StyledLinkButtonProps>`

	border: none;
	background-color: transparent;
	padding: 0;
	width: ${(p) => p.width || "unset"};
	color: inherit;
	cursor: pointer;
`;
