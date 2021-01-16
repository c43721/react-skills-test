import React from 'react';

import { Box, Center, SkeletonCircle, SkeletonText } from '@chakra-ui/react';

export default function RecipeLoading() {
  return (
    <Center>
      <Box padding="6" w="25vw" boxShadow="lg" bg="dark">
        <SkeletonCircle size="10" />
        <SkeletonText mt="5" noOfLines={4} spacing="4" />
      </Box>
    </Center>
  );
}
