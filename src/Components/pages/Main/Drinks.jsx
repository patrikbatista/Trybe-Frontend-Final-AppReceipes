import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageTitle, LinkButton } from '../../atoms';
import { Search, RecipeCardsContainer } from '../../organisms';
import { getRecipes, getCategories } from '../../../redux/actions';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import CategoryContainer from '../../molecules/CategoryContainer';

const Drinks = ({
  recipes, categories, loaded, buttonLoaded, fillListOfRecipes, fillListOfCategories,
  isIngredient,
}) => {
  useEffect(() => {
    if (!isIngredient && recipes && recipes.length === 0) {
      fillListOfRecipes('drink');
      fillListOfCategories('drink');
    }
  }, [fillListOfRecipes, fillListOfCategories, isIngredient, recipes]);
  return (
    <div>
      <header>
        <LinkButton
          src={ profileIcon }
          alt="perfil"
          href="/perfil"
          testid="profile-top-btn"
        />
        <PageTitle>Bebidas</PageTitle>
        <Search category="cocktail" />
        {buttonLoaded
        && <CategoryContainer categories={ categories } foodOrDrink="drink" />}
        {loaded && <RecipeCardsContainer recipes={ recipes } category="Drink" />}
      </header>
      <Footer />
    </div>
  );
};

Drinks.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  loaded: PropTypes.bool.isRequired,
  buttonLoaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
  fillListOfRecipes: PropTypes.func.isRequired,
  fillListOfCategories: PropTypes.func.isRequired,
  isIngredient: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  buttonLoaded: state.recipes.buttonLoaded,
  recipes: state.recipes.recipes,
  categories: state.recipes.categories,
  isIngredient: state.recipes.isIngredient,
});

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
  fillListOfCategories: (category) => dispatch(getCategories(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
