import { Box, DateInput, Form, FormField, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

const hasValue = (value) => {
  return value != '' && value != null;
};

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validatePhoneNumber = (phoneNumber) => {
  if (phoneNumber == null) {
    return false;
  }
  const replaced = phoneNumber.replaceAll('_', '').replaceAll('-', '');
  console.log(replaced);
  const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return re.test(phoneNumber);
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
          validateEmail(emailSelected) &&
          validatePhoneNumber(phoneSelected)
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

  const [value, setValue] = useState({});

  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => setValue({})}
      onSubmit={({ value }) => {}}
      validate="blur"
    >
      <Box>
        {/* <FormField label="Date">
          <DateInput
            format="mm/dd/yyyy"
            value={dateSelected}
            calendarProps={{
              bounds: [dateRangeStart, dateRangeEnd],
            }}
            onChange={(e: any) => handleChange(e.value, setDateSelected)}
          />
        </FormField>
        <FormField label="Name">
          <TextInput
            placeholder="Type the name here..."
            value={nameSelected}
            onChange={(e) => handleChange(e.target.value, setNameSelected)}
          />
        </FormField> */}
        <FormField
          htmlFor="id-phone-number"
          label="Email"
          validate={(value, values) => true}
        >
          <TextInput
            id="id-phone-number"
            placeholder="Type the name here..."
            name="phoneNumber"
          />
        </FormField>
        {/* <InputMask
          mask="(999) 999-9999"
          value={phoneSelected}
          onChange={(e) => handleChange(e.target.value, setPhoneSelected)}
        >
          <FormField label="Phone">
            <TextInput placeholder="Type the phone here..." />
          </FormField> 
        </InputMask>*/}
      </Box>
    </Form>
  );
};

export default QuoteStepThree;
