import PropTypes from 'prop-types';
import React from 'react';
import { Ingredient } from '../atoms';

const IngredientsContainer = ({ ingredients, measurements }) => (
  <div>
    {ingredients && ingredients.map((ingredient, index) => (<Ingredient
      key={ index }
      index={ index }
      ingredient={ ingredient }
      measurement={ measurements[index] }
    />))}
  </div>
);

IngredientsContainer.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  measurements: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IngredientsContainer;
