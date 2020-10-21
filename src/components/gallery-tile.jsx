import { Box, Card } from 'grommet';
import React from 'react';

const GalleryTile = ({ filename }) => {
  return (
    <Card fill elevation="0">
      <Box
        style={{
          backgroundImage: `url(images/${filename}.jpg)`,
          backgroundPosition: 'center, center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundColor: '#000',
        }}
        fill
      ></Box>
      {/* <Image src={`images/${filename}.jpg`} fit="cover" height="300px" /> */}
    </Card>
  );
};

export default GalleryTile;
