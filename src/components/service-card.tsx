import { Box, Card, Heading, Text } from 'grommet';
import React from 'react';

const ServiceCard = ({ icon, title = 'Title Here', text }) => {
	return (
		<Card elevation="0" fill>
			<Box alignSelf="center" margin={{ bottom: 'large' }}>
				{/* <Image src={`images/vectors/${filename}.svg`} fill /> */}
				{icon}
			</Box>
			<Box>
				<Heading level={3} color="dark-1" textAlign="center" margin={{ bottom: 'small', top: 'none' }}>
					{title}
				</Heading>
				<Text textAlign="center">{text}</Text>
			</Box>
		</Card>
		// <Box align="center" margin="none">
		//   <Box margin={{bottom: 'medium'}}>
		//     {icon}
		//   </Box>
		//   <Box>
		//     <Text color="dark-2" size="large" textAlign="center" margin="none">
		//       You don't have to code to create your own site. Select one of
		//       available themes in the Mobirise sitebuilder.
		//     </Text>
		//   </Box>
		// </Box>
	);
};

export default ServiceCard;
