import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormField,
  Heading,
  TextInput
} from 'grommet';
import { FormNextLink } from 'grommet-icons';
import React from 'react';

const QuoteForm = () => {
  return (
    <Card background="white">

      <CardHeader pad="medium">
        <Heading level="3" margin="none" color="dark-1" textAlign="center">
          Get an instant quote or call now (888) 666-8929
        </Heading>
      </CardHeader>

      <CardBody pad="medium">
        <FormField label="Transport car FROM">
          <TextInput placeholder="Select" />
        </FormField>
        <FormField label="Transport car TO">
          <TextInput placeholder="Select" />
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
    </Card>
  );
};

export default QuoteForm;
