import PropTypes from 'prop-types';
import React from 'react';
import {
  saveRecipeInProgress, removeIngredientRecipeInProgress, getIngredientsInProgress,
} from '../../utils/localStorage';

const IngredientStep = ({ index, ingredient, measurement, foodOrDrink, id }) => (
  <label
    data-testid={ `${index}-ingredient-step` }
    htmlFor={ index }
  >
    <p
      data-testid={ `${index}-ingredient-name-and-measure` }
    >
      {measurement ? `${ingredient} - ${measurement}` : ingredient}
    </p>
    <input
      type="checkbox"
      id={ index }
      value={ ingredient }
      defaultChecked={ getIngredientsInProgress(foodOrDrink, id)
        .some((i) => ingredient === i) }
      onChange={ ({ target: { checked } }) => {
        if (checked) {
          saveRecipeInProgress(foodOrDrink, id, ingredient);
        } else {
          removeIngredientRecipeInProgress(foodOrDrink, id, ingredient);
        }
      } }
    />
  </label>
);

IngredientStep.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.string.isRequired,
  measurement: PropTypes.string.isRequired,
};

export default IngredientStep;
