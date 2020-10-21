import React from 'react';
import { Box } from 'grommet';
import MyNavbar from './components/my-navbar';
import Header from './components/header';
import OurJob from './components/our-job';
import MyGallery from './components/my-gallery';
import Contacts from './components/contacts';
import MyFooter from './components/my-footer';

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
