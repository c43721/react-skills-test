import React from 'react';

import { Center, Heading, Button, ButtonGroup, Link } from '@chakra-ui/react';
import RecipieForm from '../forms/RecipieForm';
import { Link as RouterLink } from 'react-router-dom';

export default function AddRecipie(props) {
  return (
    <Center flexDirection="column">
      <ButtonGroup justifyContent="center" alignItems="center">
        <Link to="/" as={RouterLink} m={2}>
          <Button size="sm">View all Recipies</Button>
        </Link>
      </ButtonGroup>

      <Heading>Add new Recipie</Heading>
      <RecipieForm handleUpdate={props.addRecipie}/>
    </Center>
  );
}
