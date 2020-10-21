import { Box } from 'grommet';
import React from 'react';

type DefaultProps = {
	children: any;
	width?: string;
	backgroundColor?: string;
	pad?: any;
};

const MainContent = ({
	children,
	width = 'xlarge',
	backgroundColor = null,
	pad = { horizontal: 'large', vertical: 'xlarge' }
}: DefaultProps) => {
	return (
		<Box align="center" background={backgroundColor} pad={pad}>
			<Box width={width}>{children}</Box>
		</Box>
	);
};

export default MainContent;
