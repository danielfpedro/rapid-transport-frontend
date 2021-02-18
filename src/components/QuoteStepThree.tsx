import { Box, FormField, MaskedInput, TextInput } from 'grommet';
import React, { useEffect, useState } from 'react';

const validateInputName = (value, isTouched) => {
  if (!value && isTouched) {
    return `Name can't be blank.`;
  }
  return '';
};

const validateInputPhone = (value, isTouched) => {
  if (!value && isTouched) {
    return `Phone can't be blank.`;
  }
  if (value && isTouched) {
    const re = /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/g;
    if (!re.test(value)) {
      return 'Phone is invalid.';
    }
  }

  return '';
};
const validateInputEmail = (value, isTouched) => {
  if (!value && isTouched) {
    return `Email can't be blank.`;
  }
  if (value && isTouched) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(value).toLowerCase())) {
      return `Email is invalid.`;
    }
  }

  return '';
};

const QuoteStepThree = ({ setValidation }) => {
  const [emailSelected, setEmailSelected] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const [nameSelected, setNameSelected] = useState('');
  const [nameTouched, setNameTouched] = useState(false);

  const [phoneSelected, setPhoneSelected] = useState('');
  const [phoneTouched, setPhoneTouched] = useState(false);

  useEffect(() => {
    setValidation(
      validateInputEmail(emailSelected, true) === '' &&
        validateInputName(nameSelected, true) === '' &&
        validateInputPhone(phoneSelected, true) === ''
    );
  }, [emailSelected, nameSelected, phoneSelected]);

  const handleChange = (value, setter) => {
    setter(value);
  };

  return (
    <Box>
      <FormField
        label="Email"
        error={validateInputEmail(emailSelected, emailTouched)}
      >
        <TextInput
          name="email"
          placeholder="Type the name here..."
          value={emailSelected}
          onChange={(e) => handleChange(e.target.value, setEmailSelected)}
          onBlur={() => setEmailTouched(true)}
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

      <FormField
        label="Phone"
        error={validateInputPhone(phoneSelected, phoneTouched)}
      >
        <MaskedInput
          value={phoneSelected}
          onChange={(e) => handleChange(e.target.value, setPhoneSelected)}
          onBlur={() => setPhoneTouched(true)}
          mask={[
            { fixed: '(' },
            {
              placeholder: '___',
              length: 3,
            },
            { fixed: ')' },
            { fixed: ' ' },
            {
              placeholder: '___',
              length: 3,
              regexp: /[0-9]/,
            },
            { fixed: '-' },
            {
              placeholder: '____',
              length: 4,
              regexp: /[0-9]/,
            },
          ]}
        />
      </FormField>
    </Box>
  );
};

export default QuoteStepThree;
