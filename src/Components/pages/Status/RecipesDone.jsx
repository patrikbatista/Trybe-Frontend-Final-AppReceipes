import React, { useEffect, useState } from 'react';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import RecipeDoneContainer from '../../organisms/RecipeDoneContainer';
import { getDoneRecipes } from '../../../utils/localStorage';

const RecipesDone = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const doneRecipes = getDoneRecipes();
    setRecipes(doneRecipes);
  }, []);

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
        onClick={ () => setRecipes(getDoneRecipes()) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => {
          setRecipes(getDoneRecipes().filter((recipe) => recipe.type === 'comida'));
        } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => {
          setRecipes(getDoneRecipes().filter((recipe) => recipe.type === 'bebida'));
        } }
      >
        Drink
      </button>
      { recipes && <RecipeDoneContainer recipes={ recipes } /> }
    </header>
  );
};

export default RecipesDone;
