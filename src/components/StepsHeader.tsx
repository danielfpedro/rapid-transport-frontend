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

const StepsHeader = ({
  currentStep,
  setCurrentStep,
  stepOneIsValid,
  stepTwoIsValid,
  stepThreeIsValid,
}) => {
  return (
    <Box direction="row">
      <QuoteStepTitle
        icon={getIcon(1, stepOneIsValid)}
        title="Shipment Info"
        onClick={
          stepOneIsValid === true || currentStep == 1
            ? () => setCurrentStep(1)
            : null
        }
      />
      <Box fill></Box>
      <QuoteStepTitle
        icon={getIcon(2, stepTwoIsValid)}
        title="Vehicle Info"
        onClick={
          stepOneIsValid === true || currentStep == 2
            ? () => setCurrentStep(2)
            : null
        }
      />
      <Box fill></Box>
      <QuoteStepTitle
        icon={getIcon(3, stepThreeIsValid)}
        title="Contact Info"
        onClick={
          stepTwoIsValid === true || currentStep == 3
            ? () => setCurrentStep(3)
            : null
        }
      />
    </Box>
  );
};

export default StepsHeader;
