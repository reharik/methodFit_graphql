import React from "react";

import { NavBreadCrumb } from "./NavBreadCrumb.";
import { MenuItem } from "./MenuItem";
import styled from "styled-components";

type MenuItemDef = {text:string, path:string; role?: string; children?: MenuItemDef[]}

type MenuItemListProps = {
	items?: MenuItemDef[];
	breadCrumbItems?:string[];
	path?: string;
	currentItem?:string;
	menuItemClicked?: (index:number, text:string, hasChildren: boolean) => void;
	navBreadCrumbClicked?: () => void;
}
const MenuItemList = ({
	items = [
		{ text: "Daily payments", path:"" },
		{ text: "Trainer Metric" , path:""},
		{ text: "Activity" , path:""},
	],
	breadCrumbItems = ["Home", "Admin Tools", "Reports"],
	path = "Home/Admin Tools/Reports",
	currentItem,
	menuItemClicked,
	navBreadCrumbClicked,
}:MenuItemListProps):JSX.Element|null => {
	if (!items) {
		return null;
	}
	return (
		<StyledMenu>
			{path.length > 0 ? (
				<NavBreadCrumb
					breadCrumbItems={breadCrumbItems}
					navBreadCrumbClicked={navBreadCrumbClicked}
				/>
			) : null}
			<StyledMenuList>
				{items.map((item, index) => (
					<MenuItem
						key={index}
						{...item}
						currentItem={currentItem}
						onClick={() => menuItemClicked && menuItemClicked(index, item.text, !!item.children)}
					/>
				))}
			</StyledMenuList>
		</StyledMenu>
	);
};

export { MenuItemList };

const StyledMenu = styled.div`
	border: none;
	background: transparent;
	margin-left: 7px;
`;

const StyledMenuList = styled.ul`
	padding: 0;
	list-style: none;
`;
