import { Anchor, Box, Button, Image, Nav, Text } from 'grommet';
import { Facebook, FacebookOption, Instagram } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';

const NavbarSecondary = () => {
  return (
    <Box background="light-2" fill>
      <MainContent>
        <Box pad={{ vertical: 'small' }}>
          <Box align="end">
            <Box direction="row" gap="medium">
              <Text size="medium">Phoenix, Arizona USA . (888) 666-8929</Text>
              <Box direction="row" gap="small">
                <Facebook color="facebook" />
                <Instagram color="instagram" />
              </Box>
            </Box>
          </Box>
        </Box>
      </MainContent>
    </Box>
  );
};

export default NavbarSecondary;
