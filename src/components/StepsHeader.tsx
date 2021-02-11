import React from 'react';
import { Text, Box, Heading, Stack } from 'grommet';
import { Radial, StatusGood, StatusGoodSmall } from 'grommet-icons';
import QuoteStepTitle from './QuoteStepTitle';

const getIcon = (number, isValid) => {
  if (isValid == true) {
    return <StatusGood color="status-ok" size="medium" />;
  }
  return (
    <Stack anchor="center">
      <Radial color="status-error" size="medium" />
      <Box pad={{ bottom: '5px' }}>
        <Text size=".8em" weight="bold" color="status-error">
          {number}
        </Text>
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
