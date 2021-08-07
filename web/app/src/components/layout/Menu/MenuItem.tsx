import React, { SyntheticEvent } from "react";
// import { browserHistory } from "react-router-dom";
import styled from "styled-components";
import { StyledLinkButton } from "../../StyledLinkButton";
import buttonRight from "./../../../images/button-v-right.png";

type MenuItemDef = {text:string, path:string; role?: string; children?: MenuItemDef[]}
type MenuItemProps = { children?:MenuItemDef[]; text:string; onClick?:(e:SyntheticEvent) => void, path:string, currentItem?: string }

const MenuItem = ({ children, text, onClick, path, currentItem }:MenuItemProps):JSX.Element => {
	const itemClick = (e:SyntheticEvent) => {
		// browserHistory.push(path);
		onClick && onClick(e);
	};


	if (children && children.length > 0) {
		return (
			<StyledMenuItem onClick={onClick}>
				<React.Fragment key={text} >
				<StyledMenuItemLink >
					<div>{text}</div>
					<StyledMenuItemIcon />
				</StyledMenuItemLink>
				</React.Fragment>
			</StyledMenuItem>
		);
	}
	const selected = currentItem === text ? "menu__item__leaf__active" : "";
	return (
		<StyledMenuItemLeaf selected={!!selected} onClick={itemClick}>
			<StyledItemLeafLink>{text}</StyledItemLeafLink>
		</StyledMenuItemLeaf>
	);
};

export { MenuItem };

const StyledMenuItem = styled.li`
	padding: 0.34em 3%;
	line-height: 21px;
`;

const StyledMenuItemLink = styled(StyledLinkButton)`
	color: #457596;
	font-size: 12px;
	font-family: Verdana, Arial, sans-serif;
`;

const StyledMenuItemIcon = styled.div`
	width: 17px;
	background: url(${buttonRight}) no-repeat scroll 0 0 transparent;
`;

type StyledMenuItemLeafProps = { selected: boolean}
const StyledMenuItemLeaf = styled.li<StyledMenuItemLeafProps>`
	width: 92%;
	padding: 0.3em 3%;
	line-height: 21px;
	cursor: pointer;
	${(p) =>
		p.selected
			? `background: none repeat scroll 0 0 #d7e6ed; color: #457596`
			: ""}
`;

const StyledItemLeafLink = styled.span`
	color: #457596;
	font-size: 12px;
	font-family: Verdana, Arial, sans-serif;
	text-decoration: none;
`;
