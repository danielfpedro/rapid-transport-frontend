import { Anchor, Box } from 'grommet';
import React from 'react';

const items = [
  {
    label: 'Quote',
    href: '#quote',
  },
  {
    label: 'How It Works',
    href: '#how-it-works',
  },
  {
    label: 'About Us',
    href: '#about-us',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

const NavbarItems = ({ dir }) => {
  return (
    <Box align="center" gap="large" direction={dir}>
      {items.map((item) => (
        <Anchor
          href={item.href}
          label={item.label}
          key={item.label}
          color="dark-1"
        />
      ))}
    </Box>
  );
};

export default NavbarItems;
