import React from "react";
import styled from "styled-components";
import { StyledLinkButton } from "../../StyledLinkButton";

import { NavBreadCrumbItem } from "./NavBreadCrumbItem";
import title from "./../../../images/left-nav-title.png";

type NavBreadCrumbProps = {
	breadCrumbItems?: string[];
	navBreadCrumbClicked?: (index:number) => void;
}

const NavBreadCrumb = ({ breadCrumbItems=[], navBreadCrumbClicked }:NavBreadCrumbProps):JSX.Element => {
	return (
		<StyledBreadCrumb>
			<StyledBreadCrumbs>
				{breadCrumbItems.map((item, index) => (
					<NavBreadCrumbItem
						key={index}
						text={item}
						onClick={() => navBreadCrumbClicked && navBreadCrumbClicked(index)}
						position={index === breadCrumbItems.length - 1 ? "last" : ""}
					/>
				))}
			</StyledBreadCrumbs>
			<StyledLastItem>
				<StyledLink>{breadCrumbItems[breadCrumbItems.length - 1]}</StyledLink>
			</StyledLastItem>
		</StyledBreadCrumb>
	);
};

export { NavBreadCrumb };

const StyledBreadCrumb = styled.div`
	background: url(${title}) repeat-x scroll 0 0 #71a8c2;
	border-radius: 4px;
	margin-bottom: 15px;
	padding: 2px 0 7px 7px;
`;

const StyledLink = styled(StyledLinkButton)`
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
	color: #ffffff;
`;

const StyledBreadCrumbs = styled.div`
	display: flex;
	/* margin-bottom: 3px; */
`;

const StyledLastItem = styled.div`
	/* margin: 2px 0px 5px 7px; */
`;
