import React from 'react';
import { Anchor, Box, Header, Image, Nav, ResponsiveContext } from 'grommet';
import { Facebook, Instagram } from 'grommet-icons';
import MainContent from './main-content';
import NavbarItems from './navbar-items';

const MyNavbar = () => {
  const size = React.useContext(ResponsiveContext);

  const socialMedia = (
    <Box direction="row" gap="small">
      <Anchor
        target="_blank"
        href="https://www.facebook.com/Rapid-Transport-USA-LLC-110257773829896/"
      >
        <Facebook
          color="facebook"
          href="https://www.facebook.com/Rapid-Transport-USA-LLC-110257773829896/"
        />
      </Anchor>
      {/* <Anchor
        target="_blank"
        href="https://www.facebook.com/Rapid-Transport-USA-LLC-110257773829896/"
      >
        <Instagram color="instagram" />
      </Anchor> */}
    </Box>
  );
  const items = (
    <Box gap="large" direction="row">
      <NavbarItems dir="row" />
      {socialMedia}
    </Box>
  );

  return (
    <div>
      <Box background="white">
        <MainContent
          width="xxlarge"
          pad={{ horizontal: 'large', vertical: '2em' }}
        >
          <Box direction="row" fill align="center">
            <Box flex={{ grow: 1 }} align={size !== 'small' ? null : 'center'}>
              <Image
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                width={size !== 'small' ? '340px' : '280px'}
              />
            </Box>
            {size !== 'small' && items}
          </Box>
        </MainContent>
      </Box>
    </div>
  );
};

export default MyNavbar;
