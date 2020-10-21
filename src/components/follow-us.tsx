import { Anchor, Box, Button, Heading, Stack } from 'grommet';
import { Facebook, FacebookOption, Home, Instagram } from 'grommet-icons';
import React from 'react';
import SocialNetworks from './social-networks';

const FollowUs = () => {
  return (
    <Box align="center">
      <Heading level="2" margin={{ top: 'none', bottom: 'medium' }}>
        Follow Us!
      </Heading>

      
        <SocialNetworks />
      
    </Box>
  );
};

export default FollowUs;
