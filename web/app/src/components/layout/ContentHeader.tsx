/*
 * File: /app/src/components/layout/ContentHeader.js
 * Project: methodfitness
 * Created Date: 2021-07-05
 * Author: rharik
 *
 */

import React from "react";
import styled from "styled-components";
import silverHeader from "./../../images/content-header-silver.png";

type ContentHeaderProps= {title:string};
export const ContentHeader = ({ title }:ContentHeaderProps):JSX.Element => {
	return (
		<StyledContentHeader>
			<StyledTitle>{title}</StyledTitle>
		</StyledContentHeader>
	);
};

const StyledContentHeader = styled.div`
	width: 100%;
	height: 41px;
	background: url(${silverHeader}) repeat-x scroll 0 0 transparent;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

const StyledTitle = styled.div`
	padding-top: 6px;
	color: #666666;
	font-size: 14px;
`;
