import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import RecipiePage from './Recipes/RecipiePage';
import RecipieDetailPage from './Recipes/RecipieDetail';
import AddRecipie from './Recipes/AddRecipie';

function App() {
  const [loadingRecipies, setLoadingRecipies] = useState(true);
  const [recipieData, setRecipieData] = useState([]);
  const [specialsData, setSpecialsData] = useState([]);

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
  }, []);

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
            <AddRecipie />
          </Route>
          <Route path="/specials/new">
            <AddRecipie />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
