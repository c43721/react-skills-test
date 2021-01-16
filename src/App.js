import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipiePage from './Recipes/RecipePage';
import RecipieDetailPage from './Recipes/RecipeDetail';
import AddRecipie from './Recipes/AddRecipie';
import EditRecipie from './Recipes/EditRecipie';

function App() {
  const [loadingRecipies, setLoadingRecipies] = useState(true);
  const [refreshRecipies, setRefreshRecipies] = useState(false);
  const [recipieData, setRecipieData] = useState([]);
  const [specialsData, setSpecialsData] = useState([]);

  const addRecipie = (newRecipie, uuid) => {
    const addData = async newRecipie => {
      await axios.post('/recipes', newRecipie);
      setRefreshRecipies(!refreshRecipies);
    };
    addData(newRecipie);
  };

  const editRecipie = (updatedRecipie, id) => {
    const addData = async (updatedRecipie, id) => {
      await axios.patch(`/recipes/${id}`, updatedRecipie);
      setRefreshRecipies(!refreshRecipies);
    };
    addData(updatedRecipie, id);
  };

  useEffect(() => {
    const getData = async () => {
      const [{ data: recipies }, { data: specials }] = await Promise.all([
        axios.get('/recipes'),
        axios.get('/specials'),
      ]);
      setRecipieData(recipies);
      setSpecialsData(specials);
      setLoadingRecipies(false);
    };
    setTimeout(() => {
      getData();
    }, 1000);
  }, [refreshRecipies]);

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <RecipiePage
              loadingRecipies={loadingRecipies}
              recipieData={recipieData}
            />
          </Route>
          <Route path="/details/:uuid">
            <RecipieDetailPage
              recipieData={recipieData}
              specialsData={specialsData}
            />
          </Route>
          <Route path="/recipies/new">
            <AddRecipie addRecipie={addRecipie} />
          </Route>
          <Route path="/recipies/edit/:uuid">
            <EditRecipie recipieData={recipieData} editRecipie={editRecipie} />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
