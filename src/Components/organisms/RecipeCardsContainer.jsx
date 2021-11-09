import PropTypes from 'prop-types';
import React from 'react';
import { RecipeCard } from '../molecules';

const MAX_RECIPES = 12;

const RecipeCardsContainer = ({ recipes, category }) => (
  <div>
    {recipes && recipes.map((recipe, index) => (index !== MAX_RECIPES && <RecipeCard
      key={ index }
      index={ index }
      category={ category }
      recipe={ recipe }
    />))}
  </div>
);

RecipeCardsContainer.propTypes = {
  category: PropTypes.string.isRequired,
  recipes: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

export default RecipeCardsContainer;
