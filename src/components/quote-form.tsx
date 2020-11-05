import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,

  Heading
} from 'grommet';
import { FormNextLink, FormPreviousLink } from 'grommet-icons';
import React, { useState } from 'react';
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
  }

  const [currentStep, setCurrentStep] = useState(1);
  const [stateSelected, setStateSelected] = useState();
  // Cities
  const [citySelected, setCitySelected] = useState();

  const handleNextSlide = () => {
    const nextSlide = currentStep >= TOTAL_SLIDES ? 1 : currentStep + 1;
    setCurrentStep(nextSlide);
  }
  const handlePrevSlide = () => {
    const prevSlide = currentStep <= 1 ? TOTAL_SLIDES : currentStep - 1;
    setCurrentStep(prevSlide);
  }
  const handleNextButtonLabel = () => {
    switch (currentStep) {
      case 1:
        return "Vehicle info";
      case 2:
        return "Contact info";
      case 3:
        return "Get Quote!";
    }
  }
  return (
    <Card background="white">

      <CardHeader pad="medium">
        <Heading level="3" margin="none" color="dark-1" textAlign="center">
          Get an instant quote or call now (888) 666-8929
        </Heading>
      </CardHeader>

      <CardBody pad="medium">
        <StepsHeader />
        {currentStep == 1 && <QuoteStepOne setValidation={setStepOneIsValid} />}
        {currentStep == 2 && <QuoteStepTwo setValidation={setStepTwoIsValid} />}
        {currentStep == 3 && <QuoteStepThree setValidation={setStepThreeIsValid} />}

        <Box direction="row" gap="medium" justify="stretch">
          {currentStep !== 1 && (<Box width="200px">
            <Button
              type="button"
              label="Back"
              primary
              icon={<FormPreviousLink />}
              size="medium"
              plain
              margin={{ top: 'medium' }}
              onClick={handlePrevSlide}
            />
          </Box>)}
          <Box fill>
            <Button
              type="button"
              label={handleNextButtonLabel()}
              primary
              icon={<FormNextLink />}
              size="medium"
              reverse={true}
              margin={{ top: 'medium' }}
              onClick={handleNextSlide}
              disabled={!handleCanGoNext()}
            />
          </Box>
        </Box>
      </CardBody>
    </Card >
  );
};

export default QuoteForm;
