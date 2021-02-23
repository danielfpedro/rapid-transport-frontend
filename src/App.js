import { Box } from 'grommet';
import React from 'react';
import Contacts from './components/contacts';
import Header from './components/header';
import MyFooter from './components/my-footer';
import MyGallery from './components/my-gallery';
import MyNavbar from './components/my-navbar';
import OurJob from './components/our-job';

function App() {
  return (
    <Box>
      <MyNavbar />
      <Header />
      <OurJob />
      <MyGallery />
      <Contacts />
      <MyFooter />
    </Box>
  );
}

export default App;
