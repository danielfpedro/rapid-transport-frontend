import { Box, Heading, ResponsiveContext } from 'grommet';
import React from 'react';
import MainContent from './main-content';
import QuoteForm from './quote-form';

const Header = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      id="quote"
      align="center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/header.png)`,
        backgroundPosition: 'center,bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '2560px auto',
        backgroundColor: '#000',
      }}
    >
      <MainContent>
        <Box
          align="center"
          direction={size !== 'small' ? 'row' : 'column'}
          gap="xlarge"
        >
          <Box fill alignSelf="start">
            <Heading
              color="light-1"
              margin={{ bottom: 'medium', top: 'none' }}
              textAlign={size !== 'small' ? 'start' : 'center'}
              style={{ textShadow: '0px 2px 1px rgba(0, 0, 0, 1)' }}
            >
              Great savings, agility and trust!
            </Heading>

            <Heading
              color="light-1"
              level="3"
              margin="none"
              textAlign={size !== 'small' ? 'start' : 'center'}
              style={{ textShadow: '0px 1px 1px rgba(0, 0, 0, 1)' }}
            >
              With Rapid Transport USA you can ship your vehicle to any place in
              the USA.
            </Heading>
          </Box>

          <Box width="xlarge">
            <QuoteForm />
          </Box>
        </Box>
      </MainContent>
    </Box>
  );
};

export default Header;
