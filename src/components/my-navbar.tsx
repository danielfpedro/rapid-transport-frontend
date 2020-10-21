import React from 'react';
import { Box, Image, ResponsiveContext } from 'grommet';
import { Facebook, Instagram } from 'grommet-icons';
import MainContent from './main-content';
import NavbarItems from './navbar-items';

const MyNavbar = () => {
	const size = React.useContext(ResponsiveContext);

	const socialMedia = (
		<Box direction="row" gap="small">
			<Facebook color="facebook" />
			<Instagram color="instagram" />
		</Box>
	);
	const items = (
		<Box gap="large" direction="row">
			<NavbarItems dir="row" />
			{socialMedia}
		</Box>
	);

	return (
		<Box background="white">
			<MainContent width="xxlarge" pad={{ horizontal: 'large', vertical: '2em' }}>
				<Box direction="row" fill align="center">
					<Box flex={{ grow: 1 }} align={size !== 'small' ? null : 'center'}>
						<Image src="images/logo.png" width={size !== 'small' ? '340px' : '280px'} />
					</Box>
					{size !== 'small' && items}
				</Box>
			</MainContent>
		</Box>
	);
};

export default MyNavbar;
