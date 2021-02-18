import { Box, DateInput, FormField, Select } from 'grommet';
import React, { useEffect, useState } from 'react';
import citiesAndStates from '../data/citiesAndStates.json';

const QuoteStepOne = ({ setValidation }) => {
  let CITIES_TO_DISPLAY = [];
  Object.keys(citiesAndStates).forEach((key) =>
    citiesAndStates[key].forEach((city) =>
      CITIES_TO_DISPLAY.push(`${city} [${key}]`)
    )
  );
  CITIES_TO_DISPLAY.sort();

  const validateInputDate = (value, isTouched) => {
    if (!value && isTouched) {
      return `Date can't be blank.`;
    }
    return '';
  };

  // FROM
  const [citiesToDisplayFrom, setCitiesToDisplayFrom] = useState<string[]>(
    CITIES_TO_DISPLAY
  );
  // TO
  const [citiesToDisplayTo, setCitiesToDisplayTo] = useState<string[]>(
    CITIES_TO_DISPLAY
  );

  const [dateSelected, setDateSelected] = useState('');
  const [dateTouched, setDateTouched] = useState(false);

  const [fromSelected, setFromSelected] = useState('');
  const [toSelected, setToSelected] = useState(null);

  const states: string[] = Object.keys(citiesAndStates).sort();
  states.push('');

  const handleSearch = (searchText, setter) => {
    const regexp = new RegExp(searchText, 'i');
    setter(
      searchText
        ? CITIES_TO_DISPLAY.filter((o) => o.match(regexp))
        : CITIES_TO_DISPLAY
    );
  };

  const handleChange = ({ option }, setter) => {
    setter(option);
  };

  const now = new Date();
  const dateRangeStart = now.toISOString();
  now.setMonth(now.getMonth() + 24);
  const dateRangeEnd = now.toISOString();

  useEffect(() => {
    setValidation(
      fromSelected !== '' &&
        fromSelected !== null &&
        toSelected !== '' &&
        toSelected !== null &&
        validateInputDate(dateSelected, true) === ''
    );
  }, [fromSelected, toSelected]);

  const handleDateChange = (e) => {
    setDateSelected(e.value);
  };

  return (
    <Box>

      <FormField
        label="Date"
        error={validateInputDate(dateSelected, dateTouched)}
        onBlur={() => setDateTouched(true)}
      >
        <DateInput
          name="date"
          format="mm/dd/yyyy"
          calendarProps={{
            bounds: [dateRangeStart, dateRangeEnd],
          }}
          onChange={(e) => handleDateChange(e)}
        />
      </FormField>
      <FormField label="Ship car FROM">
        <Select
          options={citiesToDisplayFrom}
          value={fromSelected}
          placeholder="Select the city:"
          searchPlaceholder="Search a city..."
          onSearch={(e) => handleSearch(e, setCitiesToDisplayFrom)}
          onChange={(e) => handleChange(e, setFromSelected)}
        ></Select>
      </FormField>
      <FormField label="Ship car TO">
        <Select
          options={citiesToDisplayTo}
          onSearch={(e) => handleSearch(e, setCitiesToDisplayTo)}
          onChange={(e) => handleChange(e, setToSelected)}
          value={toSelected}
          placeholder="Select the city:"
        ></Select>
      </FormField>
    </Box>
  );
};

export default QuoteStepOne;
