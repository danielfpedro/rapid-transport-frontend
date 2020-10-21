import { Anchor, Box, Button, Image, Nav, Text } from 'grommet';
import React from 'react';
import MainContent from './main-content';

const items = [
  {
    label: 'O que fazemos?',
  },
  {
    label: 'About Us',
  },
  {
    label: 'Contact Us',
  },
];

const MyNavbar = () => {
  return (
    <Box background="white">
      {/* <Box height="4px" background="brand" flex="grow"></Box>       */}

      <Box background="light-2" fill align="center">
        <Box pad={{ vertical: 'small' }} width="xxlarge" align="end">
          <Text size="medium">Phoenix, Arizona USA . (888) 666-8929</Text>
        </Box>
      </Box>
      <MainContent>
        <Box
          direction="row"
          fill
          background=""
          align="center"
          pad={{ horizontal: 'large', vertical: '30px' }}
        >
          <Box flex={{ grow: 1 }}>
            <Image src="images/logo.png" width="340px" />
          </Box>

          <Box direction="row" gap="large" align="center">
            {items.map((item) => (
              <Anchor label={item.label} color="dark-1" />
            ))}
            {/* <Button label="Get a quote!" primary /> */}
          </Box>
        </Box>
      </MainContent>

      {/* <Box height="4px" background="brand" flex="grow"></Box>       */}
    </Box>
  );
};

export default MyNavbar;
