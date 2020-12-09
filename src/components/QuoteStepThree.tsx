import { Box, DateInput, FormField, Select, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

const hasValue = (value) => {
  return value != '' && value != null;
};

const QuoteStepThree = ({ setValidation }) => {
  const [dateSelected, setDateSelected] = useState(new Date().toISOString());
  const [nameSelected, setNameSelected] = useState(null);
  const [emailSelected, setEmailSelected] = useState(null);
  const [phoneSelected, setPhoneSelected] = useState(null);

  useEffect(
    () =>
      setValidation(
        hasValue(nameSelected) &&
          hasValue(emailSelected) &&
          hasValue(phoneSelected)
      ),
    [nameSelected, emailSelected, phoneSelected]
  );

  const handleChange = (value, setter) => {
    setter(value);
  };

  const now = new Date();
  const dateRangeStart = now.toISOString();
  now.setMonth(now.getMonth() + 24);
  const dateRangeEnd = now.toISOString();

  console.log('Start', dateRangeStart);
  console.log('End', dateRangeEnd);

  return (
    <Box>
      <DateInput
        format="mm/dd/yyyy"
        value={dateSelected}
        calendarProps={{
          bounds: [dateRangeStart, dateRangeEnd],
        }}
        onChange={(e: any) => handleChange(e.value, setDateSelected)}
      />
      <FormField label="Name">
        <TextInput
          placeholder="Type the name here..."
          value={nameSelected}
          onChange={(e) => handleChange(e.target.value, setNameSelected)}
        />
      </FormField>
      <FormField label="Email">
        <TextInput
          placeholder="Type the name here..."
          value={emailSelected}
          onChange={(e) => handleChange(e.target.value, setEmailSelected)}
        />
      </FormField>
      <InputMask mask="(999) 999-9999" value={phoneSelected}>
        <FormField label="Phone">
          <TextInput
            placeholder="Type the phone here..."
            onChange={(e) => handleChange(e.target.value, setPhoneSelected)}
          />
        </FormField>
      </InputMask>
    </Box>
  );
};

export default QuoteStepThree;
