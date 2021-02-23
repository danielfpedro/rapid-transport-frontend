import { Anchor, Box, Button } from 'grommet';
import React from 'react';

const QuoteStepTitle = ({ icon, title, onClick }) => {
  const getTitle = () => {
    return (
      <Box direction="column" flex="grow" align="center">
        <div>{title}</div>
        <div style={{ marginTop: '15px' }}>{icon}</div>
      </Box>
    );
  };
  return (
    <Box direction="column" flex="grow" align="center">
      <Button
        label={getTitle()}
        plain
        fill
        disabled={onClick == null}
        onClick={onClick}
      >
        {icon}
      </Button>
      {/* <Box margin={{ bottom: '10px' }}>
        
      </Box>
      <Box margin={{ top: '-10px' }}>
        <Anchor icon={icon} />
      </Box> */}
    </Box>
  );
};

export default QuoteStepTitle;
