import { Box, Heading } from 'grommet';
import React from 'react';
import MainContent from './main-content';

const AboutUs = () => {
  return (
    <Box
      style={{
        backgroundImage: 'url(images/footer.png)',
        backgroundPosition: 'top, center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '2560px auto',
        backgroundColor: '#000',
        height: '1000px',
      }}
      pad={{ vertical: 'xlarge' }}
    >
      <MainContent>
        <Box align="center">
          <Heading color="light-1" margin="none">
            You Call, We Haul, That's all!
          </Heading>
          {/* <Heading size="2" textAlign="center" color="light-1">
            Rapid Transport is the number one rated car transporter in
            the U.S.
          </Heading> */}
        </Box>
      </MainContent>
    </Box>
  );
};

export default AboutUs;
