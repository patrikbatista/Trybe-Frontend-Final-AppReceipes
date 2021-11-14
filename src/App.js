import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import {
  DrinkDetails,
  Drinks,
  Explore,
  ExploreDrinks,
  ExploreFoods,
  ExploreFoodIngredients,
  ExploreDrinkIngredients,
  ExploreOrigin,
  FoodDetails,
  Foods,
  Login,
  Profile,
  RecipesDone,
  RecipesFavorites,
  NotFound,
} from './Components/pages';
import FoodInProgress from './Components/pages/InProgress/FoodInProgress';
import DrinkInProgress from './Components/pages/InProgress/DrinkInProgress';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Foods } />
      <Route exact path="/bebidas" component={ Drinks } />
      <Route
        exact
        path="/comidas/:id"
        render={ (props) => <FoodDetails { ...props } /> }
      />
      <Route
        exact
        path="/bebidas/:id"
        render={ (props) => <DrinkDetails { ...props } /> }
      />
      <Route
        exact
        path="/comidas/:id/in-progress"
        render={ (props) => <FoodInProgress { ...props } /> }
      />
      <Route
        exact
        path="/bebidas/:id/in-progress"
        render={ (props) => <DrinkInProgress { ...props } /> }
      />
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreFoods } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route
        exact
        path="/explorar/comidas/ingredientes"
        component={ ExploreFoodIngredients }
      />
      <Route
        exact
        path="/explorar/bebidas/ingredientes"
        component={ ExploreDrinkIngredients }
      />
      <Route exact path="/explorar/comidas/area" component={ ExploreOrigin } />
      <Route exact path="/explorar/bebidas/area" component={ NotFound } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/receitas-feitas" component={ RecipesDone } />
      <Route exact path="/receitas-favoritas" component={ RecipesFavorites } />
    </Switch>
  );
}

export default App;
