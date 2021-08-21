import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { ContentHeader } from './ContentHeader';

type ContentLayoutProps = {
	children: ReactNode;
	title: string;
	LeftComponent?: React.ComponentType;
	RightComponent?: React.ComponentType;
};
const ContentLayout = ({
	title,
	children,
	LeftComponent,
	RightComponent,
}: ContentLayoutProps): JSX.Element => {
	return (
		<>
			<ContentHeader
				title={title}
				LeftComponent={LeftComponent}
				RightComponent={RightComponent}
			/>
			<StyledContent>{children}</StyledContent>
		</>
	);
};

export { ContentLayout };

const StyledContent = styled.div`
	background-color: white;
	width: 100%;
	border: 1px solid #d9d9d9;
`;
