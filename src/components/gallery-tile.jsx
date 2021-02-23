import { Box, Card } from 'grommet';
import React from 'react';

const GalleryTile = ({ filename }) => {
  return (
    <Card fill elevation="0">
      <Box
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${filename}.jpg)`,
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#000',
        }}
        fill
      ></Box>
    </Card>
  );
};

export default GalleryTile;
