import { Box, FormField, Select, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import manufactures from '../data/manufactures.json';

const CURRENT_YEAR = 2020;
const YEARS_BACK = 70;

const getYears = () => {
  let output = [];
  let lastValue = CURRENT_YEAR + 1;

  for (let i = 0; i < YEARS_BACK; i++) {
    output.push(lastValue);
    lastValue--;
  }
  return output;
};

const hasValue = (value) => {
  return value !== '' && value !== null;
};

const QuoteStepTwo = ({ setValidation }) => {
  const [yearSelected, setYearSelected] = useState('');
  const [makeSelected, setMakeSelected] = useState('');
  const [modelSelected, setModelSelected] = useState('');
  useEffect(
    () =>
      setValidation(
        hasValue(yearSelected) &&
          hasValue(makeSelected) &&
          hasValue(modelSelected)
      ),
    [yearSelected, makeSelected, modelSelected]
  );

  const handleChange = (value, setter) => {
    setter(value);
  };

  return (
    <Box>
      <FormField label="Year">
        <Select
          options={getYears()}
          value={yearSelected}
          onChange={(e) => handleChange(e.option, setYearSelected)}
          placeholder="Select a year:"
        ></Select>
      </FormField>
      <FormField label="Make">
        <Select
          options={manufactures}
          value={makeSelected}
          onChange={(e) => handleChange(e.option, setMakeSelected)}
          placeholder="Select vehicle make:"
        ></Select>
      </FormField>
      <FormField label="Model">
        <TextInput
          placeholder="Type vehicle model..."
          value={modelSelected}
          onChange={(e) => handleChange(e.target.value, setModelSelected)}
        />
      </FormField>
    </Box>
  );
};

export default QuoteStepTwo;
