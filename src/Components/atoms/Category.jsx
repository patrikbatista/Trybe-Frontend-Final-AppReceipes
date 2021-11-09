import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getRecipesByCategory } from '../../redux/actions';

const Category = ({ categoryName, foodOrDrink, fillRecipesByCategory }) => (
  <button
    type="button"
    data-testid={ `${categoryName}-category-filter` }
    onClick={ () => fillRecipesByCategory(categoryName, foodOrDrink) }
  >
    {categoryName}
  </button>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  fillRecipesByCategory: PropTypes.func.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillRecipesByCategory: (c, f) => dispatch(getRecipesByCategory(c, f)),
});

export default connect(null, mapDispatchToProps)(Category);
