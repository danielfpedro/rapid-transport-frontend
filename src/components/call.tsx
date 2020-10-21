import { Box, Heading } from 'grommet';
import MainContent from './main-content';

const Call = () => {
  return (
    <Box pad="xlarge">
      <MainContent>
        <Box height="4px" background="brand"></Box>
        <Box align="center">
          <Heading level="2" textAlign="center" margin={{ vertical: 'large' }}>
            You don't have to code to create your own site. Select one of
            available themes in the Mobirise sitebuilder.
          </Heading>
        </Box>
        <Box height="4px" background="brand"></Box>
      </MainContent>
    </Box>
  );
};

export default Call;
