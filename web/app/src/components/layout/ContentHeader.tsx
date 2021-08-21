/*
 * File: /app/src/components/layout/ContentHeader.js
 * Project: methodfitness
 * Created Date: 2021-07-05
 * Author: rharik
 *
 */

import styled from 'styled-components';
import silverHeader from './../../images/content-header-silver.png';

type ContentHeaderProps = {
	title: string;
	LeftComponent?: React.ComponentType;
	RightComponent?: React.ComponentType;
};
export const ContentHeader = ({
	LeftComponent,
	title,
	RightComponent,
}: ContentHeaderProps): JSX.Element => {
	return (
		<StyledContentHeader>
			{LeftComponent ? <LeftComponent /> : <div></div>}
			<StyledTitle>{title}</StyledTitle>
			{RightComponent ? <RightComponent /> : <div></div>}
		</StyledContentHeader>
	);
};

const StyledContentHeader = styled.div`
	width: 100%;
	height: 41px;
	background: url(${silverHeader}) repeat-x scroll 0 0 transparent;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
`;

const StyledTitle = styled.div`
	padding-top: 6px;
	color: #666666;
	font-size: 14px;
`;
