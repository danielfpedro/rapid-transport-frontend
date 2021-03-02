import { Box, Heading, ResponsiveContext, Text } from 'grommet';
import React from 'react';
import GalleryTile from './gallery-tile';
import MainContent from './main-content';

const MyGallery = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box background="#000" id="about-us">
      <MainContent>
        <Box>
          <Box>
            <Heading
              color="light-1"
              level="1"
              margin={{ bottom: 'medium', top: 'none' }}
            >
              We know how to do it
            </Heading>
            <Box direction="row" margin={{ bottom: 'large' }}>
              <Box background="" basis={size !== 'small' ? '2/3' : '1'}>
                <Text
                  size={size !== 'small' ? '1.3em' : '1em'}
                  weight={size !== 'small' ? 'bold' : 'normal'}
                >
                  Our company has many years of expertise in transporting
                  vehicles all over the country. We can insure you great
                  savings, agility and trust.
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            direction={size !== 'small' ? 'row' : 'column'}
            height={size !== 'small' ? '500px' : '300px'}
            gap="large"
            margin={{ bottom: 'medium' }}
          >
            <Box flex={{ grow: 2 }}>
              <GalleryTile filename="gal-5" />
            </Box>
            {size !== 'small' && (
              <Box
                flex={{ grow: 1 }}
                gap="large"
                direction={size !== 'small' ? 'column' : 'row'}
              >
                <GalleryTile filename="gal-8" />
                <GalleryTile filename="gal-1" />
              </Box>
            )}
          </Box>
        </Box>
      </MainContent>
    </Box>
  );
};

export default MyGallery;
