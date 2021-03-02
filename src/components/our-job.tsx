import { Box, Button, ResponsiveContext } from 'grommet';
import { Deliver, DocumentText, StatusGood } from 'grommet-icons';
import React from 'react';
import MainContent from './main-content';
import ServiceCard from './service-card';

const OurJob = () => {
  const size = React.useContext(ResponsiveContext);

  return (
    <MainContent id="how-it-works">
      <Box
        direction={size !== 'small' ? 'row' : 'column'}
        gap={size !== 'small' ? 'large' : 'xlarge'}
        align="start"
      >
        <ServiceCard
          title="Quotation"
          text="Request a quote on our website or call us. We guarantee the best rates."
          // icon={<Contact color={iconColor} size="large" />}
          icon={<DocumentText size="large" />}
        />
        <ServiceCard
          title="We do it all"
          text="On the arranged date, your vehicle will be collected and transported with full insurance coverage."
          icon={<Deliver size="large" />}
        />
        <ServiceCard
          title="Delivery"
          text="After a careful transportation fulfilling all the safety procedures, you will be getting your vehicle on the delivery point."
          icon={<StatusGood size="large" />}
        />
      </Box>

      <Box pad={{ top: '60px', bottom: 'none' }} align="center">
        <Box width="medium">
          <Button
            size="large"
            reverse={true}
            primary
            alignSelf="center"
            label="Request a QUOTE now!"
            href="#quote"
          />
        </Box>
      </Box>
    </MainContent>
  );
};

export default OurJob;
