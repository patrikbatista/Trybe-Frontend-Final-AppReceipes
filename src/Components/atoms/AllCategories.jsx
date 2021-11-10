import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';

const AllCategories = ({
  foodOrDrink, fillListOfRecipes,
}) => (
  <button
    type="button"
    data-testid="All-category-filter"
    onClick={ () => {
      fillListOfRecipes(foodOrDrink);
    } }
  >
    All
  </button>
);

AllCategories.propTypes = {
  fillListOfRecipes: PropTypes.func.isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
});

export default connect(null, mapDispatchToProps)(AllCategories);
