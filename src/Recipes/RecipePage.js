import React from 'react';

import Recipie from './Recipe';
import RecipieLoading from './RecipeLoading';

import {
  SimpleGrid,
  Center,
  ButtonGroup,
  Link,
  Button,
  Heading,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function RecipePage(props) {
  return (
    <Center flexDirection="column">
      <Heading m={5}>My Recipe List</Heading>
      <ButtonGroup justifyContent="center" alignItems="center">
        <Link to="/recipies/new" as={RouterLink} m={2}>
          <Button size="sm">Add new Recipe</Button>
        </Link>
        <ColorModeSwitcher>Switch Colors!</ColorModeSwitcher>
      </ButtonGroup>
      <SimpleGrid mt={5} columns={4} gap={8} maxW="85vw">
        {props.loadingRecipies ? (
          <>
            <RecipieLoading />
            <RecipieLoading />
            <RecipieLoading />
          </>
        ) : (
          <>
            {props.recipieData.map(recipie => (
              <Recipie {...recipie} key={recipie.uuid} />
            ))}
          </>
        )}
      </SimpleGrid>
    </Center>
  );
}
