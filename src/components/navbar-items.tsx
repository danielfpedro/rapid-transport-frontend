import { Anchor, Box } from 'grommet';
import React from 'react';

const items = [
	{
		label: 'How It Works'
	},
	{
		label: 'About Us'
	},
	{
		label: 'Contact'
	},
	{
		label: 'Contacts'
	}
];

const NavbarItems = ({ dir }) => {
	return (
		<Box align="center" gap="large" direction={dir}>
			{items.map((item) => <Anchor label={item.label} key={item.label} color="dark-1" />)}
		</Box>
	);
};

export default NavbarItems;
