import React from "react";
import styled from "styled-components";
import { StyledLinkButton } from "../../StyledLinkButton";
import separator from "./../../../images/left-nav-separator-icon.png";

type NavBreadCrumbItemProps = { text: string; position?:string; onClick:()=>void }
const NavBreadCrumbItem = ({ text, position, onClick }:NavBreadCrumbItemProps):JSX.Element | null=> {
	if (position !== "last") {
		return (
			<StyledLI>
				<StyledLink onClick={onClick}>{text}</StyledLink>
				<StyledLinkIcon />
			</StyledLI>
		);
	}
	return null;
};

export { NavBreadCrumbItem };

const StyledLI = styled.div`
	display: flex;
	margin: 5px 7px 2px 0;
`;

const StyledLink = styled(StyledLinkButton)`
	color: #457495;
	font-size: 11px;
	text-decoration: underline;
`;

const StyledLinkIcon = styled.div`
	background: url(${separator}) no-repeat scroll 6px 3px transparent;
	width: 12px;
	height: 13px;
`;
