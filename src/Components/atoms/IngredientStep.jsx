import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setDisabled } from '../../redux/actions';
import {
  saveRecipeInProgress, removeIngredientRecipeInProgress, getIngredientsInProgress,
} from '../../utils/localStorage';

const getDisabled = () => {
  const checkboxes = document.querySelectorAll('.ingredient-step');
  const arrayCheckboxes = Array.from(checkboxes);
  const disabled = arrayCheckboxes.some((checkbox) => checkbox.checked === false);
  return disabled;
};

const IngredientStep = ({
  index, ingredient, measurement, foodOrDrink, id, setButtonFinished,
}) => (
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
      className="ingredient-step"
      value={ ingredient }
      defaultChecked={ getIngredientsInProgress(foodOrDrink, id)
        .some((i) => ingredient === i) }
      onChange={ ({ target: { checked } }) => {
        if (checked) {
          saveRecipeInProgress(foodOrDrink, id, ingredient);
        } else {
          removeIngredientRecipeInProgress(foodOrDrink, id, ingredient);
        }
        setButtonFinished(getDisabled());
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
  setButtonFinished: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setButtonFinished: (disabled) => dispatch(setDisabled(disabled)),
});

export default connect(null, mapDispatchToProps)(IngredientStep);
