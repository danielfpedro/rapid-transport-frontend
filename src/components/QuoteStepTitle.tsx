import { Box } from 'grommet';
import React from 'react';

const QuoteStepTitle = ({ icon, title }) => {
  return (
    <Box direction="column" flex="grow" align="center">
      <Box margin={{ bottom: '10px' }}>{title}</Box>
      <Box>{icon}</Box>
    </Box>
  );
};

export default QuoteStepTitle;
