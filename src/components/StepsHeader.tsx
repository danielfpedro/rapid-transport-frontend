import React from 'react';
import { Text, Box, Heading, Stack } from 'grommet';
import { Radial, StatusGood, StatusGoodSmall } from 'grommet-icons';
import QuoteStepTitle from './QuoteStepTitle';

const getIcon = (number, isValid) => {
  if (isValid == true) {
    return <StatusGood color="status-ok" size="large" />;
  }
  return (
    <Stack anchor="center">
      <Radial color="dark-1" size="large" />
      <Box pad={{ bottom: '5px' }}>
        <Heading level="4">{number}</Heading>
      </Box>
    </Stack>
  );
};

const StepsHeader = ({ stepOneIsValid, stepTwoIsValid, stepThreeIsValid }) => {
  return (
    <Box direction="row">
      <QuoteStepTitle icon={getIcon(1, stepOneIsValid)} title="Location" />
      <Box fill></Box>
      <QuoteStepTitle icon={getIcon(2, stepTwoIsValid)} title="Car Info" />
      <Box fill></Box>
      <QuoteStepTitle icon={getIcon(3, stepThreeIsValid)} title="Location" />
    </Box>
  );
};

export default StepsHeader;
