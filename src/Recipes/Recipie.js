import React from 'react';

import { Box, Image, Center, Button, Link, ButtonGroup } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

export default function Recipie(props) {
  return (
    <Center>
      <Box
        minH="lg"
        minW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={props.images.full}
          alt={'https://www.takeoutlist.com/assets/images/food_default.png'}
        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {props.prepTime} min prep &bull; {props.cookTime} min cook &bull;
              serves {props.servings}
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated={props.title > 31 ? true : false}
          >
            {props.title}
          </Box>

          <Box>{props.description}</Box>
          <ButtonGroup>
            <Link to={`/details/${props.uuid}`} as={RouterLink}>
              <Button size="sm" mt={2}>
                View Recipie
              </Button>
            </Link>
            <Link to={`/recipies/edit/${props.uuid}`} as={RouterLink}>
              <Button size="sm" mt={2}>
                Edit Recipie
              </Button>
            </Link>
          </ButtonGroup>
        </Box>
      </Box>
    </Center>
  );
}
