import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipiePage from './Recipes/RecipiePage';
import RecipieDetailPage from './Recipes/RecipieDetail';
import AddRecipie from './Recipes/AddRecipie';
import EditRecipie from './Recipes/EditRecipie';

function App() {
  const [loadingRecipies, setLoadingRecipies] = useState(true);
  const [refreshRecipies, setRefreshRecipies] = useState(false);
  const [recipieData, setRecipieData] = useState([]);
  const [specialsData, setSpecialsData] = useState([]);

  const addRecipie = newRecipie => {
    const addData = async (newRecipie) => {
      await axios.post('/recipies', newRecipie);
      setRefreshRecipies(!refreshRecipies);
    };
    addData(newRecipie);
  };

  const editRecipie = updatedRecipie => {
    const addData = async (updatedRecipie) => {
      await axios.patch('/recipies', updatedRecipie);
      setRefreshRecipies(!refreshRecipies);
    };
    addData(updatedRecipie);
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
    getData();
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
