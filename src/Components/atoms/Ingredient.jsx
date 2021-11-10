import PropTypes from 'prop-types';
import React from 'react';

const Ingredient = ({ index, ingredient, measurement }) => (
  <p
    data-testid={ `${index}-ingredient-name-and-measure` }
  >
    {measurement ? `${ingredient} - ${measurement}` : ingredient}
  </p>
);

Ingredient.propTypes = {
  index: PropTypes.number.isRequired,
  ingredient: PropTypes.string.isRequired,
  measurement: PropTypes.string.isRequired,
};

export default Ingredient;
