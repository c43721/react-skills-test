import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Text,
  Container,
  Stack,
  Center,
  Heading,
  ListIcon,
  ListItem,
  UnorderedList,
  SimpleGrid,
  GridItem,
  OrderedList,
  ButtonGroup,
  Link,
  Button,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import Ingredient from '../Ingredient/Ingredient';
import { Link as RouterLink } from 'react-router-dom';

export default function RecipeDetail(props) {
  const { specialsData: specials } = props;
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
    <Center>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <ButtonGroup>
          <Link to="/" as={RouterLink}>
            <Button size="sm" m={4}>
              Find Another Recipe
            </Button>
          </Link>
        </ButtonGroup>
        <Heading>{recipie.title}</Heading>
        <Text fontSize="lg">{recipie.description}</Text>
        <Stack direction="row">
          <Text fontSize="md" color="gray.500">
            Added on {recipie.postDate}
          </Text>
          {recipie.editDate && (
            <Text fontSize="md" color="gray.500">
              &bull; Edited on {recipie.editDate}
            </Text>
          )}
        </Stack>

        <SimpleGrid columns={2} gap={10} maxW="85vw">
          <GridItem>
            <Text fontSize="3xl" m={3}>
              Ingredients
            </Text>
            <UnorderedList spacing={3}>
              {/* Render out each direction with some icons to tell apart their 'requiredness' */}
              {/* Each list in React needs a key, here we use 'i', the index, for the key */}
              {recipie.ingredients.map((ingredient, i) => (
                <ListItem key={i}>
                  <Ingredient ingredient={ingredient} specials={specials} />
                </ListItem>
              ))}
            </UnorderedList>
          </GridItem>
          <GridItem>
            <Text fontSize="3xl" m={3}>
              Directions
            </Text>
            <OrderedList spacing={3}>
              {recipie.directions.map((direction, i) => (
                <ListItem key={i}>
                  {direction.optional && <ListIcon as={StarIcon} />}
                  {direction.instructions}
                </ListItem>
              ))}
            </OrderedList>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </Center>
  );
}
