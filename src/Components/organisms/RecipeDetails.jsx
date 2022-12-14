import PropTypes from 'prop-types';
import React from 'react';
import { RecipeButtonStatus } from '../atoms';
import FavoriteButton from '../atoms/FavoriteButton';
import RecipeButtonFinished from '../atoms/RecipeButtonFinished';
import ShareButton from '../atoms/ShareButton';
import YoutubeVideo from '../atoms/YoutubeVideo';
import { IngredientsContainer, RecommendationContainer } from '../molecules';

const generateStatusButton = (statusOfRecipe, foodOrDrink, recipe, ingredients) => {
  switch (statusOfRecipe) {
  case 'done':
    return null;
  case 'inProgress':
    return (<RecipeButtonStatus
      foodOrDrink={ foodOrDrink }
      recipeId={ recipe[`id${foodOrDrink}`] }
      ingredients={ ingredients }
    />);
  case 'toDo':
    return (<RecipeButtonFinished
      foodOrDrink={ foodOrDrink }
      recipe={ recipe }
    />);
  default:
    return null;
  }
};

const RecipeDetails = ({ recipe, foodOrDrink, status }) => {
  const getRecipeIngredients = () => {
    const MAX_INGREDIENTS = 20;
    const ingredients = [];
    for (let i = 1; i <= MAX_INGREDIENTS; i += 1) {
      if (recipe[`strIngredient${i}`] !== ''
      && recipe[`strIngredient${i}`]) {
        ingredients.push(recipe[`strIngredient${i}`]);
      }
    }
    return ingredients;
  };

  const getRecipeMeasurements = () => {
    const MAX_MEASUREMENTS = 20;
    const measurements = [];
    for (let i = 1; i <= MAX_MEASUREMENTS; i += 1) {
      if (recipe[`strMeasure${i}`] !== ''
      && recipe[`strMeasure${i}`] !== ' '
      && recipe[`strMeasure${i}`]) {
        measurements.push(recipe[`strMeasure${i}`]);
      }
    }
    return measurements;
  };

  return (
    <section>
      <img src={ recipe[`str${foodOrDrink}Thumb`] } alt="" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">{recipe[`str${foodOrDrink}`]}</h1>
      <ShareButton />
      <FavoriteButton
        id={ recipe[`id${foodOrDrink}`] }
        recipe={ recipe }
        foodOrDrink={ foodOrDrink }
        index={ 0 }
      />
      <p data-testid="recipe-category">
        {foodOrDrink === 'Drink'
          ? recipe.strAlcoholic : recipe.strCategory }
      </p>
      <IngredientsContainer
        ingredients={ getRecipeIngredients() }
        measurements={ getRecipeMeasurements() }
        foodOrDrink={ foodOrDrink }
        id={ recipe[`id${foodOrDrink}`] }
        status={ status }
      />
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <div data-testid="video">
        {recipe.strYoutube && <YoutubeVideo url={ recipe.strYoutube } />}
      </div>
      <RecommendationContainer
        foodOrDrink={ foodOrDrink }
      />
      {generateStatusButton(status, foodOrDrink, recipe, getRecipeIngredients())}
    </section>
  );
};

RecipeDetails.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    strAlcoholic: PropTypes.string,
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strYoutube: PropTypes.string,
  }).isRequired,
  status: PropTypes.string.isRequired,
};

export default RecipeDetails;
