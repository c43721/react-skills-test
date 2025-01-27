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
  // Take out editDate so that it can be automatically updated
  const { editDate, handleUpdate, specials, isEdit = false, ...rest } = props;
  return (
    <Formik
      // enableReinitialize
      initialValues={{
        title: rest.title ?? '',
        description: rest.description ?? '',
        servings: rest.servings ?? 0,
        prepTime: rest.prepTime ?? 0,
        cookTime: rest.cookTime ?? 0,
        // The props for this should always be present
        postDate: rest.postDate || format(new Date(), 'MM/dd/yyyy hh:MM:SS a'),
        // Here to automatically update, don't override
        editDate: format(new Date(), 'MM/dd/yyyy hh:MM:SS a'),
        ingredients: rest.ingredients?.length > 0 ? props.ingredients : [],
        directions: rest.directions?.length > 0 ? props.directions : [],
      }}
      onSubmit={values => handleUpdate(values, rest.uuid)}
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

                      {isEdit && (
                        <Field name={`ingredients.${index}.uuid`}>
                          {({ field }) => (
                            <FormControl>
                              <FormLabel htmlFor="recipie-ingred-name">
                                ID of Item (Replace for Coupon)
                              </FormLabel>
                              <Input {...field} id="recipie-ingred-uuid" />
                            </FormControl>
                          )}
                        </Field>
                      )}

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
