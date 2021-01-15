import React from 'react';

import { Alert, AlertIcon } from '@chakra-ui/react';

export default function Ingredient(props) {
  const special = props.specials.find(
    special => special.ingredientId === props.ingredient.uuid
  );

  return (
    <>
      {props.ingredient.amount ?? ''} {props.ingredient.measurement ?? ''}{' '}
      {props.ingredient.name}
      {special && (
        <Alert status="info" m={2}>
          <AlertIcon />
          {special.type !== 'local'
            ? special.type.toUpperCase()
            : `${special.type.toUpperCase()} DEAL`}{' '}
          | {special.title}
          <br />
          {special.text}
        </Alert>
      )}
    </>
  );
}
