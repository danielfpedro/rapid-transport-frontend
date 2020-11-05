import { Box, FormField, Select, TextInput } from "grommet";
import React, { useEffect, useState } from "react";

const QuoteStepThree = ({ setValidation }) => {
    const [nameSelected, setNameSelected] = useState(null);
    const [emailSelected, setEmailSelected] = useState(null);
    const [phoneSelected, setPhoneSelected] = useState(null);
    useEffect(() => setValidation(nameSelected && emailSelected && phoneSelected), [nameSelected, emailSelected, phoneSelected]);

    const handleChange = (value, setter) => {
        setter(value);
    }


    return <Box>
        <FormField label="Name">
            <TextInput placeholder="Type the name here..." value={nameSelected} onChange={(e) => handleChange(e.target.value, setNameSelected)} />
        </FormField>
        <FormField label="Email">
            <TextInput placeholder="Type the name here..." value={emailSelected} onChange={(e) => handleChange(e.target.value, setEmailSelected)} />
        </FormField>
        <FormField label="Phone">
            <TextInput placeholder="Type the phone here..." value={phoneSelected} onChange={(e) => handleChange(e.target.value, setPhoneSelected)} />
        </FormField>

    </Box>
}

export default QuoteStepThree;