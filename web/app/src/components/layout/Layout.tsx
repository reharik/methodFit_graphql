import React from 'react';
import { MenuItemList } from './Menu/MenuItemList';
import { Header } from './Header';
import styled from 'styled-components';
import footer from './../../images/footer-shadow-left.png';
import { RouteProvider } from '../Providers/RouteProvider/RouteProvider';

const Layout = (): JSX.Element => {
	return (
		<div>
			<Header />
			<StyledBody>
				<StyledSide>
					<MenuItemList />
				</StyledSide>
				<StyledContentArea>
					<RouteProvider />
					<StyledFooter />
				</StyledContentArea>
			</StyledBody>
		</div>
	);
};

export { Layout };

const StyledBody = styled.div`
	display: flex;
	height: 100%;
	padding-top: 10px;
	background: #f2f2f2;
	border-top: 1px solid #e5e5e5;
`;

const StyledSide = styled.div`
	overflow: hidden;
	width: 183px;
	height: 100%;
	padding-right: 2px;
`;

const StyledContentArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 83%;
	margin: 0;
	min-height: 100%;
`;

const StyledFooter = styled.div`
	height: 17px;
	width: 100%;
	background: url(${footer}) no-repeat scroll 0 0 transparent;
`;
