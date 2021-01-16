import React from 'react';

import { format } from 'date-fns';
import { Formik, Form, Field, FieldArray } from 'formik';
import {
  Button,
  Center,
  Heading,
  FormControl,
  FormLabel,
  Input,
  ButtonGroup,
  Checkbox,
} from '@chakra-ui/react';

export default function RecipieForm(props) {
  return (
    <Formik
      initialValues={{
        title: props.title ?? '',
        description: props.description ?? '',
        servings: props.servings ?? 0,
        prepTime: props.prepTime ?? 0,
        cookTime: props.cookTime ?? 0,
        postDate: props.postDate || format(new Date(), 'MM/dd/yyyy hh:MM:SS a'),
        ingredients: props.ingredients?.length > 0 ? props.ingredients : [],
        directions: props.directions?.length > 0 ? props.directions : [],
      }}
      onSubmit={values => console.log(values)}
      render={({ values }) => (
        <Form>
          <Heading m={2}>Basic Information</Heading>

          <Field name="title">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="recipie-title">Title</FormLabel>
                <Input {...field} id="title" placeholder="My new recipie" />
              </FormControl>
            )}
          </Field>

          <Field name="description">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="recipie-description">Description</FormLabel>
                <Input
                  {...field}
                  id="description"
                  placeholder="A wonderful dish"
                />
              </FormControl>
            )}
          </Field>

          <Heading m={2}>Timings and Servings</Heading>

          <Field name="servings">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="recipie-servings">
                  Number of Servings
                </FormLabel>
                <Input {...field} type="number" id="recipie-servings" />
              </FormControl>
            )}
          </Field>

          <Field name="prepTime">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="recipie-prep-time">Prep Time</FormLabel>
                <Input {...field} type="number" id="recipie-prep-time" />
              </FormControl>
            )}
          </Field>

          <Field name="cookTime">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="recipie-cook-time">Cook Time</FormLabel>
                <Input {...field} type="number" id="recipie-cook-time" />
              </FormControl>
            )}
          </Field>

          <Heading m={2}>Directions</Heading>

          <FieldArray
            name="directions"
            render={arrayHelpers => (
              <>
                {values.directions && values.directions.length > 0 ? (
                  values.directions.map((direction, index) => (
                    <div key={index}>
                      <Field name={`directions.${index}.instructions`}>
                        {({ field }) => (
                          <FormControl>
                            <FormLabel htmlFor="recipie-instructions">
                              Direction
                            </FormLabel>
                            <Input {...field} id="direction" />
                          </FormControl>
                        )}
                      </Field>

                      <Field name={`directions.${index}.optional`}>
                        {({ field }) => (
                          <FormControl m={2}>
                            <Checkbox {...field}>Optional</Checkbox>
                          </FormControl>
                        )}
                      </Field>

                      <ButtonGroup m={2}>
                        <Button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </Button>
                        <Button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              instructions: '',
                              optional: false,
                            })
                          }
                        >
                          Add
                        </Button>
                      </ButtonGroup>
                    </div>
                  ))
                ) : (
                  <Button
                    type="button"
                    onClick={() => {
                      arrayHelpers.push({
                        instructions: '',
                        optional: false,
                      });
                    }}
                  >
                    Add Direction
                  </Button>
                )}
              </>
            )}
          />

          <Heading m={2}>Ingredients</Heading>

          <FieldArray
            name="ingredients"
            render={arrayHelpers => (
              <>
                {values.ingredients && values.ingredients.length > 0 ? (
                  values.ingredients.map((ingredient, index) => (
                    <div key={index}>
                      <Field name={`ingredients.${index}.amount`}>
                        {({ field }) => (
                          <FormControl>
                            <FormLabel htmlFor="recipie-ingred-amount">
                              Amount
                            </FormLabel>
                            <Input {...field} id="recipie-ingred-amount" />
                          </FormControl>
                        )}
                      </Field>

                      <Field name={`ingredients.${index}.measurement`}>
                        {({ field }) => (
                          <FormControl>
                            <FormLabel htmlFor="recipie-ingred-measurement">
                              Measurement Type
                            </FormLabel>
                            <Input {...field} id="recipie-ingred-measurement" />
                          </FormControl>
                        )}
                      </Field>

                      <Field name={`ingredients.${index}.name`}>
                        {({ field }) => (
                          <FormControl>
                            <FormLabel htmlFor="recipie-ingred-name">
                              Name of Item
                            </FormLabel>
                            <Input {...field} id="recipie-ingred-name" />
                          </FormControl>
                        )}
                      </Field>

                      <ButtonGroup m={2}>
                        <Button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </Button>
                        <Button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({
                              amount: 0,
                              measurement: '',
                              name: '',
                            })
                          }
                        >
                          Add
                        </Button>
                      </ButtonGroup>
                    </div>
                  ))
                ) : (
                  <Button
                    type="button"
                    onClick={() =>
                      arrayHelpers.push({
                        amount: 0,
                        measurement: '',
                        name: '',
                      })
                    }
                  >
                    Add Ingredient
                  </Button>
                )}
              </>
            )}
          />

          <Center>
            <Button mt={5} mb={5} type="submit">
              Add new Recipie
            </Button>
          </Center>
        </Form>
      )}
    />
  );
}
