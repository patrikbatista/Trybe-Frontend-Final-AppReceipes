import PropTypes from 'prop-types';
import React from 'react';
import { Ingredient } from '../atoms';
import IngredientStep from '../atoms/IngredientStep';

const IngredientsContainer = ({ ingredients, measurements, status, foodOrDrink, id }) => (
  <div>
    {ingredients && (
      status === 'inProgress' ? (ingredients.map((ingredient, index) => (<Ingredient
        key={ index }
        index={ index }
        ingredient={ ingredient }
        measurement={ measurements[index] }
      />))) : (ingredients.map((ingredient, index) => (<IngredientStep
        key={ index }
        index={ index }
        ingredient={ ingredient }
        measurement={ measurements[index] }
        foodOrDrink={ foodOrDrink }
        id={ id }
      />)))
    )}
  </div>
);

IngredientsContainer.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.string.isRequired,
};

export default IngredientsContainer;
