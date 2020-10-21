import { Box, ResponsiveContext, Text } from 'grommet';
import { Facebook, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';
import NavbarItems from './navbar-items';

const MyFooter = () => {
	const size = React.useContext(ResponsiveContext);

	return (
		<Box background="light-1">
			<MainContent pad={{ top: 'xlarge', bottom: 'large', left: 'xlarge', right: 'xlarge' }}>
				<Box align="center">
					<Box direction="row" gap="small" align="center">
						<Facebook color="dark-4" size="22em" />
						<Instagram color="dark-4" size="22em" />
					</Box>
					<Box
						margin={
							size !== 'small' ? (
								{ top: 'medium', bottom: 'large' }
							) : (
								{ vertical: 'xlarge', horizontal: 'none' }
							)
						}
						align="center"
					>
						<NavbarItems dir={size !== 'small' ? 'row' : 'column'} />
					</Box>
					<Box>
						<Text margin="none" size="medium" textAlign="center">
							Rapid Transport 2020 - Phoenix, Arizona USA . (88) 87445544
						</Text>
					</Box>
				</Box>
			</MainContent>
		</Box>
	);
};

export default MyFooter;
