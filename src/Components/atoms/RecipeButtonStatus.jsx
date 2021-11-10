import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { getStatusOfRecipe, saveRecipeInProgress } from '../../utils/localStorage';

const RecipeButtonStatus = ({ recipeId, foodOrDrink, ingredients }) => {
  const [recipeStatus, setRecipeStatus] = useState(false);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRecipeStatus(getStatusOfRecipe(recipeId));
  }, [recipeId]);

  if (redirect) {
    return foodOrDrink === 'Meal'
      ? <Redirect to={ `/comidas/${recipeId}/in-progress` } />
      : <Redirect to={ `/bebidas/${recipeId}/in-progress` } />;
  }

  return (
    <div>
      {recipeStatus ? (
        <button
          style={ {
            with: '100%',
            position: 'fixed',
            bottom: '0',
          } }
          type="button"
          data-testid="start-recipe-btn"
        >
          Continuar Receita
        </button>
      )
        : (
          <button
            style={ {
              with: '100%',
              position: 'fixed',
              bottom: '0',
            } }
            type="button"
            data-testid="start-recipe-btn"
            onClick={ () => {
              saveRecipeInProgress(foodOrDrink, recipeId, ingredients);
              setRedirect(true);
            } }
          >
            Iniciar
          </button>
        )}
    </div>
  );
};

RecipeButtonStatus.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  recipeId: PropTypes.string.isRequired,
};

export default RecipeButtonStatus;
