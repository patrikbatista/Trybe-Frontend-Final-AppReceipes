import React from 'react';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import RecipeDoneContainer from '../../organisms/RecipeDoneContainer';
import { getDoneRecipes } from '../../../utils/localStorage';

const RecipesDone = () => {
  const recipes = getDoneRecipes();
  return (
    <header>
      <LinkButton
        src={ profileIcon }
        alt="perfil"
        href="/perfil"
        testid="profile-top-btn"
      />
      <PageTitle>Receitas Feitas</PageTitle>
      <button
        type="button"
        data-testid="filter-by-all-btn"
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
      >
        Drink
      </button>
      <RecipeDoneContainer recipes={ recipes } />
    </header>
  );
};

export default RecipesDone;
