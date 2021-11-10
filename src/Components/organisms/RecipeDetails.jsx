import PropTypes from 'prop-types';
import React from 'react';
import shareIcon from '../../images/shareIcon.svg';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import YoutubeVideo from '../atoms/YoutubeVideo';
import { IngredientsContainer, RecommendationContainer } from '../molecules';

const RecipeDetails = ({ recipe, foodOrDrink }) => {
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
      <input
        type="image"
        src={ shareIcon }
        alt="share"
        data-testid="share-btn"
      />
      <input
        type="image"
        src={ whiteHeartIcon }
        alt="share"
        data-testid="favorite-btn"
      />
      <p data-testid="recipe-category">
        {foodOrDrink === 'Drink'
          ? recipe.strAlcoholic : recipe.strCategory }
      </p>
      <IngredientsContainer
        ingredients={ getRecipeIngredients() }
        measurements={ getRecipeMeasurements() }
      />
      <p data-testid="instructions">{ recipe.strInstructions }</p>
      <div data-testid="video">
        {recipe.strVideo && <YoutubeVideo url={ recipe.strVideo } />}
      </div>
      <RecommendationContainer
        foodOrDrink={ foodOrDrink }
      />
      <button type="button" data-testid="start-recipe-btn">Iniciar</button>
    </section>
  );
};

RecipeDetails.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  recipe: PropTypes.shape({
    strCategory: PropTypes.string,
    strInstructions: PropTypes.string,
    strVideo: PropTypes.string,
    strAlcoholic: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;
