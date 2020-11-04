import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormField,
  Heading,
  Select,
  TextInput
} from 'grommet';
import { FormNextLink } from 'grommet-icons';
import React, { useState } from 'react';

import citiesAndStates from '../data/citiesAndStates.json';

const QuoteForm = () => {
  console.log(citiesAndStates);

  const [stateSelected, setStateSelected] = useState();
  // Cities
  const [citySelected, setCitySelected] = useState();
  

  let CITIES_TO_DISPLAY = [];
  Object.keys(citiesAndStates).forEach((key) => citiesAndStates[key].forEach(city => CITIES_TO_DISPLAY.push(`${city} [${key}]`)));
  CITIES_TO_DISPLAY.sort();

  const [citiesToDisplay, setCitiesToDisplay] = useState<string[]>(CITIES_TO_DISPLAY);

  const states: string[] = Object.keys(citiesAndStates).sort();
  states.push("");

  const handleStateChange = ({ option }) => {
    if (option) {
      // setCitiesToDisplay(citiesAndStates[option].sort());
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
        <FormField label="Transport car FROM">
          <Select
            options={citiesToDisplay}
            value={stateSelected}
            placeholder="Select the State:"
            onChange={handleStateChange}
          ></Select>
        </FormField>
        <FormField label="Transport car TO">
          <Select
            options={citiesToDisplay}
            onSearch={(searchText) => {
              const regexp = new RegExp(searchText, 'i');
              setCitiesToDisplay(CITIES_TO_DISPLAY.filter(o => o.match(regexp)));
            }}
            value={citySelected}
            placeholder="Select the city:"
          ></Select>
        </FormField>

        <Button
          label="Vehicle Details"
          primary
          icon={<FormNextLink />}
          size="large"
          reverse={true}
          margin={{ top: 'medium' }}
        />
      </CardBody>
    </Card >
  );
};

export default QuoteForm;
