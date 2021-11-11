import PropTypes from 'prop-types';
import React from 'react';
import RecipeDoneCard from '../molecules/RecipeDoneCard';

const RecipeDoneContainer = ({ recipes }) => (
  <div>
    {recipes && recipes.map((recipe, index) => (<RecipeDoneCard
      key={ index }
      index={ index }
      recipe={ recipe }
    />))}
  </div>
);

RecipeDoneContainer.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default RecipeDoneContainer;
