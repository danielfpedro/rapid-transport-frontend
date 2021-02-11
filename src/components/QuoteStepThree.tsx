import { Box, DateInput, Form, FormField, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';

const hasValue = (value) => {
  return value != '' && value != null;
};

const validateInputName = (value, isTouched) => {
  if (!value && isTouched) {
    return `Name can't be blank.`;
  }
  return '';
};
const validateInputDate = (value, isTouched) => {
  if (!value && isTouched) {
    return `Date can't be blank.`;
  }
  return '';
};
const validateInputPhone = (value, isTouched) => {
  if (!value && isTouched) {
    return `Phone can't be blank.`;
  }
  if (value && isTouched) {
    const re = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (!re.test(value)) {
      return 'Phone is invalid.';
    }
  }

  return '';
};
const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// const validatePhoneNumber = (phoneNumber) => {
//   if (phoneNumber == null) {
//     return false;
//   }

// };

const QuoteStepThree = ({ setValidation }) => {
  const [dateSelected, setDateSelected] = useState('');
  const [dateTouched, setDateTouched] = useState(false);

  const [nameSelected, setNameSelected] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const [emailSelected, setEmailSelected] = useState('');

  const [phoneTouched, setPhoneTouched] = useState(false);
  const [phoneSelected, setPhoneSelected] = useState('');

  useEffect(
    () =>
      setValidation(
        validateInputDate(dateSelected, true) &&
          validateInputName(nameSelected, true) &&
          validateInputPhone(phoneSelected, true)
      ),
    [dateSelected, nameSelected, phoneSelected]
  );

  const handleChange = (value, setter) => {
    // const value = e.target.value;

    setter(value);
  };

  const handleDateChange = (target) => {
    setDateTouched(true);
    setDateSelected(target.value);
  };

  const now = new Date();
  const dateRangeStart = now.toISOString();
  now.setMonth(now.getMonth() + 24);
  const dateRangeEnd = now.toISOString();

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
          onChange={(target) => handleDateChange(target)}
        />
      </FormField>
      <FormField
        label="Name"
        error={validateInputName(nameSelected, nameTouched)}
      >
        <TextInput
          name="name"
          placeholder="Type the name here..."
          value={nameSelected}
          onChange={(e) => handleChange(e.target.value, setNameSelected)}
          onBlur={() => setNameTouched(true)}
        />
      </FormField>

      <InputMask
        mask="(999) 999-9999"
        value={phoneSelected}
        onChange={(e) => handleChange(e.target.value, setPhoneSelected)}
      >
        <FormField
          htmlFor="id-phone-number"
          label="Phone"
          error={validateInputPhone(phoneSelected, phoneTouched)}
        >
          <TextInput
            id="id-phone-number"
            placeholder="Type the name here..."
            name="phoneNumber"
            onBlur={() => setPhoneTouched(true)}
          />
        </FormField>
      </InputMask>
    </Box>
  );
};

export default QuoteStepThree;
