import React from 'react';

import { Center, Heading, Button, ButtonGroup, Link, Text, Container } from '@chakra-ui/react';
import RecipieForm from '../forms/RecipieForm';
import { Link as RouterLink, useParams } from 'react-router-dom';

export default function EditRecipie(props) {
  const { uuid } = useParams();
  const recipie = props.recipieData.find(recipie => recipie.uuid === uuid);

  if (!recipie) {
    return (
      <Container>
        <Text fontSize="5xl" color="red">
          No recipie found!
        </Text>
      </Container>
    );
  }

  return (
    <Center flexDirection="column">
      <ButtonGroup justifyContent="center" alignItems="center">
        <Link to="/" as={RouterLink} m={2}>
          <Button size="sm">View all Recipies</Button>
        </Link>
      </ButtonGroup>

      <Heading>Edit Recipie</Heading>
      <RecipieForm handleUpdate={props.editRecipie} {...recipie} />
    </Center>
  );
}
