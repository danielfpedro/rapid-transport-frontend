import React from 'react'
import { Box, Heading } from "grommet";
import { Radial, StatusGood } from 'grommet-icons';


const StepsHeader = () => {
    return <Box direction="row" justify="between">
        <Box>
            <Box>
                <StatusGood />
            </Box>
            <Box>
                <Heading level={5}>Location</Heading>
            </Box>
        </Box>
        <Box color="green" background="green" fill>
            .
        </Box>
        <Box>
            <Box>
                <StatusGood />
            </Box>
            <Box>
                <Heading level={5}>Vehicle Info</Heading>
            </Box>
        </Box>
        <Box background="green" fill align="center">
            <Box background="pink" height="20px">
                .
            </Box>
        </Box>
        <Box>
            <Box>
                <StatusGood />
            </Box>
            <Box>
                <Heading level={5}>Contact Info</Heading>
            </Box>
        </Box>
    </Box >
}

export default StepsHeader;