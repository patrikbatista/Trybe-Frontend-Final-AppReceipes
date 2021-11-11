import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router';

const RecipeCard = ({ index, recipe, category }) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    if (category === 'Meal') {
      return <Redirect to={ `/comidas/${recipe.idMeal}` } />;
    }
    return <Redirect to={ `/bebidas/${recipe.idDrink}` } />;
  }

  return (
    <div
      onClick={ () => setRedirect(true) }
      data-testid={ `${index}-recipe-card` }
      aria-hidden
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ recipe[`str${category}Thumb`] }
        alt={ recipe[`str${category}`] }
      />
      <h3 data-testid={ `${index}-card-name` }>{ recipe[`str${category}`] }</h3>
    </div>
  );
};

RecipeCard.propTypes = {
  category: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    idMeal: PropTypes.string,
    idDrink: PropTypes.string,
    strMeal: PropTypes.string,
    strDrink: PropTypes.string,
    strMealThumb: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};

export default RecipeCard;
