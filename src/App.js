import { Box } from 'grommet';
import React from 'react';
import Helmet from 'react-helmet';
import Contacts from './components/contacts';
import Header from './components/header';
import MyFooter from './components/my-footer';
import MyGallery from './components/my-gallery';
import MyNavbar from './components/my-navbar';
import OurJob from './components/our-job';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Rapid Transport USA, LLC</title>
      </Helmet>
      <Box>
        <MyNavbar />
        <Header />
        <OurJob />
        <MyGallery />
        <Contacts />
        <MyFooter />
      </Box>
    </React.Fragment>
  );
}

export default App;
