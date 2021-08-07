import React from "react";
import styled from "styled-components";
import { UserProfileHeader } from "./UserProfileHeader";
import title from "./../../images/header-title.gif";

type HeaderProps = {userName?:string; logoutUser?:()=>void}
const Header = ({ userName = "Raif Harik", logoutUser }:HeaderProps):JSX.Element => (
	<StyledHeader>
		<UserProfileHeader userName={userName} logoutUser={logoutUser} />
	</StyledHeader>
);

export { Header };

const StyledHeader = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	background: url(${title}) no-repeat #407397;
	margin-bottom: 8px;
`;

