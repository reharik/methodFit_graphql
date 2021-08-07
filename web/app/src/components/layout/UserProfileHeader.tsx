import React from "react";
import styled from "styled-components";
import { StyledLinkButton } from "../StyledLinkButton";
// import { Link } from "react-router-dom";

type UserProfileHeaderProps = {userName?: string; logoutUser?: () => void}
const UserProfileHeader = ({ userName, logoutUser }:UserProfileHeaderProps):JSX.Element => {
	const logout = () => {
		logoutUser && logoutUser();
	};
	return (
		<StyledLinks>
			<StyledNavLink id="userName" data-id={"userName"} > {/*to="profile"> */}
				{userName}
			</StyledNavLink>
			<StyledLink data-id={"signOut"} onClick={logout}>
				Sign out
			</StyledLink>
		</StyledLinks>
	);
};

export { UserProfileHeader };
const StyledLinks = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 10px 10px 0 0;
	width: 200px;
`;

const StyledNavLink = styled.div`
	border-left: 1px solid #f6f6f6;
	padding-right: 4px;
	padding-left: 4px;
	color: white;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	text-decoration: none;

	&:active {
		background: white;
		color: #333333 !important;
		border-radius: 3px;
	}

	&:first-child {
		padding-left: 0;
		border-left: none;
	}
`;
const StyledLink = styled(StyledLinkButton)`
	border-left: 1px solid #f6f6f6;
	padding-right: 4px;
	padding-left: 4px;
	color: white;
	font-family: verdana;
	font-size: 10px;
	font-weight: bold;
	text-decoration: none;

	&.active {
		background: white;
		color: #333333 !important;
		border-radius: 3px;
	}

	&.first-child {
		padding-left: 0;
		border-left: none;
	}
`;
