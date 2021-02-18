import { Box } from 'grommet';
import { Car, MapLocation, StatusGood, User } from 'grommet-icons';
import React from 'react';
import QuoteStepTitle from './QuoteStepTitle';

const getIcon = (number, isValid) => {
  let icon;
  switch (number) {
    case 1:
      icon = <MapLocation color="dark-1" size="medium" />;

      break;
    case 2:
      icon = <Car color="dark-1" size="medium" />;
      break;
    case 3:
      icon = <User color="dark-1" size="medium" />;
      break;
  }
  if (isValid === true) {
    return <StatusGood color="status-ok" size="medium" />;
  }
  return <Box>{icon}</Box>;
};

const StepsHeader = ({ stepOneIsValid, stepTwoIsValid, stepThreeIsValid }) => {
  return (
    <Box direction="row">
      <QuoteStepTitle icon={getIcon(1, stepOneIsValid)} title="Ship Info" />
      <Box fill></Box>
      <QuoteStepTitle icon={getIcon(2, stepTwoIsValid)} title="Car Info" />
      <Box fill></Box>
      <QuoteStepTitle icon={getIcon(3, stepThreeIsValid)} title="Person Info" />
    </Box>
  );
};

export default StepsHeader;
