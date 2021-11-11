import PropTypes from 'prop-types';
import React from 'react';
import RecipeDoneCard from '../molecules/RecipeDoneCard';

const RecipeDoneContainer = ({ recipes, isFavorite }) => (
  <div>
    {recipes && recipes.map((recipe, index) => (<RecipeDoneCard
      key={ index }
      index={ index }
      recipe={ recipe }
      isFavorite={ isFavorite }
    />))}
  </div>
);

RecipeDoneContainer.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeDoneContainer;
