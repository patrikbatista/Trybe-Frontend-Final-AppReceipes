import React from 'react';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { getFavoriteRecipes } from '../../../utils/localStorage';
import RecipeDoneContainer from '../../organisms/RecipeDoneContainer';

const RecipesFavorites = () => {
  const [recipes, setRecipes] = React.useState([]);

  return (
    <div>
      <header>
        <LinkButton
          src={ profileIcon }
          alt="perfil"
          href="/perfil"
          testid="profile-top-btn"
        />
        <PageTitle>Receitas Favoritas</PageTitle>
      </header>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => setRecipes(getFavoriteRecipes()) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => {
          setRecipes(getFavoriteRecipes().filter((recipe) => recipe.type === 'comida'));
        } }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => {
          setRecipes(getFavoriteRecipes().filter((recipe) => recipe.type === 'bebida'));
        } }
      >
        Drink
      </button>
      { recipes.length ? <RecipeDoneContainer recipes={ recipes } isFavorite />
        : <RecipeDoneContainer isFavorite recipes={ getFavoriteRecipes() } /> }
    </div>
  );
};

export default RecipesFavorites;
