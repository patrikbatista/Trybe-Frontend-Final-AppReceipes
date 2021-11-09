import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRecipesByCategory, getRecipes } from '../../redux/actions';

const Category = ({
  categoryName, foodOrDrink, fillRecipesByCategory, fillListOfRecipes,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => {
        if (isActive) {
          setIsActive(false);
          fillListOfRecipes(foodOrDrink);
        } else {
          setIsActive(true);
          fillRecipesByCategory(categoryName, foodOrDrink);
        }
      } }
    >
      {categoryName}
    </button>
  );
};

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  fillListOfRecipes: PropTypes.func.isRequired,
  fillRecipesByCategory: PropTypes.func.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillRecipesByCategory: (c, f) => dispatch(getRecipesByCategory(c, f)),
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
});

export default connect(null, mapDispatchToProps)(Category);
