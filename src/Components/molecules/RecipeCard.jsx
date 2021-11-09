import PropTypes from 'prop-types';
import React from 'react';

const RecipeCard = ({ index, recipe, category }) => (
  <div data-testid={ `${index}-recipe-card` }>
    <img
      data-testid={ `${index}-card-img` }
      src={ recipe[`str${category}Thumb`] }
      alt={ recipe[`str${category}`] }
    />
    <h3 data-testid={ `${index}-card-name` }>{ recipe[`str${category}`] }</h3>
  </div>
);

RecipeCard.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}.isRequired;

export default RecipeCard;
