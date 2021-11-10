import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getRecipesByCategory, getRecipes } from '../../redux/actions';

const Category = ({
  categoryName, foodOrDrink, fillRecipesByCategory, fillListOfRecipes,
}) => {
  const [isActive, setIsActive] = useState(false);

  // Reference https://www.30secondsofcode.org/js/s/on-click-outside.
  // Quando o usuário clicar fora do componente, o estado do componente é alterado para false.
  const onClickOutside = (element, callback) => {
    document.addEventListener('click', (e) => {
      if (!element.contains(e.target)) callback();
    });
  };

  useEffect(() => {
    onClickOutside(document.getElementById(`${categoryName}`), () => setIsActive(false));
  }, [categoryName, isActive]);

  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      id={ categoryName }
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