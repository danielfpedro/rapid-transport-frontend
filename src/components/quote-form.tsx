import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Carousel,
  Heading,
} from 'grommet';
import { FormNextLink, FormPreviousLink } from 'grommet-icons';
import React, { useEffect, useState } from 'react';
import QuoteStepOne from './QuoteStepOne';
import QuoteStepThree from './QuoteStepThree';
import QuoteStepTwo from './QuoteStepTwo';
import StepsHeader from './StepsHeader';

const TOTAL_SLIDES = 3;

const QuoteForm = () => {
  // const [canGoNext, setCanGoNext] = useState(false);
  const [stepOneIsValid, setStepOneIsValid] = useState(false);
  const [stepTwoIsValid, setStepTwoIsValid] = useState(false);
  const [stepThreeIsValid, setStepThreeIsValid] = useState(false);

  const handleCanGoNext = () => {
    switch (currentStep) {
      case 1:
        return stepOneIsValid;
      case 2:
        return stepTwoIsValid;
      case 3:
        return stepThreeIsValid;
    }
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [stateSelected, setStateSelected] = useState();
  // Cities
  const [citySelected, setCitySelected] = useState();

  const handleNextSlide = () => {
    const nextSlide = currentStep >= TOTAL_SLIDES ? 1 : currentStep + 1;
    setCurrentStep(nextSlide);
  };
  const handlePrevSlide = () => {
    const prevSlide = currentStep <= 1 ? TOTAL_SLIDES : currentStep - 1;
    setCurrentStep(prevSlide);
  };
  const handleNextButtonLabel = () => {
    switch (currentStep) {
      case 1:
        return 'Vehicle info';
      case 2:
        return 'Contact info';
      case 3:
        return 'Get Quote!';
    }
  };

  useEffect(() => console.log('step one nego', stepOneIsValid), [
    stepOneIsValid,
  ]);
  return (
    <Card background="white">
      <CardHeader pad="medium">
        <Heading level="3" margin="none" color="dark-1" textAlign="center">
          Get an instant quote or call now (888) 666-8929
        </Heading>
      </CardHeader>

      <CardBody pad="medium">
        <Box margin={{ bottom: '50px' }}>
          <StepsHeader
            stepOneIsValid={stepOneIsValid}
            stepTwoIsValid={stepTwoIsValid}
            stepThreeIsValid={stepThreeIsValid}
          />
        </Box>

        {/* <Box style={{ display: currentStep == 1 ? '' : 'none' }}>
          <QuoteStepOne setValidation={setStepOneIsValid} />
        </Box>
        <Box style={{ display: currentStep == 2 ? '' : 'none' }}>
          <QuoteStepTwo setValidation={setStepTwoIsValid} />
        </Box> */}
        <Box style={{ display: currentStep == 1 ? '' : 'none' }}>
          <QuoteStepThree setValidation={setStepThreeIsValid} />
        </Box>

        <Box
          direction="row"
          gap="medium"
          justify="stretch"
          align="center"
          alignContent="center"
        >
          {currentStep !== 1 && (
            <Box width="200px">
              <Button
                type="button"
                label="Back"
                icon={<FormPreviousLink />}
                size="medium"
                margin={{ top: 'medium' }}
                onClick={handlePrevSlide}
              />
            </Box>
          )}
          <Box fill>
            <Button
              type="button"
              label={handleNextButtonLabel()}
              primary
              icon={<FormNextLink />}
              size="large"
              reverse={true}
              margin={{ top: 'medium' }}
              onClick={handleNextSlide}
              disabled={!handleCanGoNext()}
            />
          </Box>
        </Box>
      </CardBody>
    </Card>
  );
};

export default QuoteForm;
