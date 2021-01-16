import React from 'react';

import { Center, Heading } from '@chakra-ui/react';
import RecipieForm from '../forms/RecipieForm';

export default function AddRecipie() {
  return (
    <Center flexDirection="column">
      <Heading>Add new Recipie</Heading>
      <RecipieForm />
    </Center>
  );
}
