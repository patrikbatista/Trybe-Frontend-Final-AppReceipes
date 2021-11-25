import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRecipesByCategory, getRecipes } from '../../redux/actions';

const Category = ({
  categoryName, foodOrDrink, fillRecipesByCategory, fillRecipes,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    if (isActive) {
      fillRecipes(foodOrDrink);
    } else {
      fillRecipesByCategory(categoryName, foodOrDrink);
    }
  };
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      id={ categoryName }
      onClick={ handleClick }
    >
      {categoryName}
    </button>
  );
};
Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  fillRecipes: PropTypes.func.isRequired,
  fillRecipesByCategory: PropTypes.func.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillRecipesByCategory: (c, f) => dispatch(getRecipesByCategory(c, f)),
  fillRecipes: (foodOrDrink) => dispatch(getRecipes(foodOrDrink)),
});

export default connect(null, mapDispatchToProps)(Category);
