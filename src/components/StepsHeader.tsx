import React from 'react';
import { Box, Heading, Stack } from 'grommet';
import { Radial, StatusGood, StatusGoodSmall } from 'grommet-icons';
import QuoteStepTitle from './QuoteStepTitle';

const getIcon = (isValid) => {
  if (isValid == true) {
    return <StatusGood color="status-ok" />;
  }
  return <StatusGoodSmall color="status-warning" />;
};

const StepsHeader = ({ stepOneIsValid, stepTwoIsValid, stepThreeIsValid }) => {
  return (
    <Box direction="row">
      <QuoteStepTitle
        icon={getIcon(stepOneIsValid)}
        title="Location"
      />

      <Box fill></Box>
      <QuoteStepTitle
        icon={getIcon(stepTwoIsValid)}
        title="Car Info"
      />
      <Box fill></Box>
      <QuoteStepTitle
        icon={getIcon(stepThreeIsValid)}
        title="Location"
      />
    </Box>
  );
};

export default StepsHeader;
