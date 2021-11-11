import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveDoneRecipe } from '../../utils/localStorage';

const RecipeButtonFinished = ({ disabled, recipe, foodOrDrink }) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/receitas-feitas" />;

  return (
    <button
      style={ {
        with: '100%',
        position: 'fixed',
        bottom: '0',
      } }
      disabled={ disabled }
      type="button"
      data-testid="finish-recipe-btn"
      onClick={ () => {
        saveDoneRecipe(recipe, foodOrDrink);
        setRedirect(true);
      } }
    >
      Finalizar Receita
    </button>
  );
};

RecipeButtonFinished.propTypes = {
  disabled: PropTypes.bool.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
  recipe: PropTypes.object.isRequired,
}.isRequired;

const mapStateToProps = (state) => ({
  disabled: state.button.disabled,
});

export default connect(mapStateToProps)(RecipeButtonFinished);
