import { Box, FormField, Select } from "grommet";
import React, { useEffect, useState } from "react";
import citiesAndStates from '../data/citiesAndStates.json';


const QuoteStepOne = ({ setValidation }) => {

    let CITIES_TO_DISPLAY = [];
    Object.keys(citiesAndStates).forEach((key) => citiesAndStates[key].forEach(city => CITIES_TO_DISPLAY.push(`${city} [${key}]`)));
    CITIES_TO_DISPLAY.sort();

    // FROM
    const [citiesToDisplayFrom, setCitiesToDisplayFrom] = useState<string[]>(CITIES_TO_DISPLAY);
    // TO
    const [citiesToDisplayTo, setCitiesToDisplayTo] = useState<string[]>(CITIES_TO_DISPLAY);

    const [fromSelected, setFromSelected] = useState(null);
    const [toSelected, setToSelected] = useState(null);

    const states: string[] = Object.keys(citiesAndStates).sort();
    states.push("");

    const handleStateChange = ({ option }) => {
        if (option) {
            // setCitiesToDisplay(citiesAndStates[option].sort());
        }
    }
    const handleSearch = (searchText, setter) => {
        const regexp = new RegExp(searchText, 'i');
        setter(searchText ? CITIES_TO_DISPLAY.filter(o => o.match(regexp)) : CITIES_TO_DISPLAY);
    }
    const handleChange = ({ option }, setter) => {
        setter(option);
    }

    useEffect(() => setValidation(fromSelected && toSelected), [fromSelected, toSelected]);

    return <Box>
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
}

export default QuoteStepOne;