import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes, getCategories } from '../../../redux/actions';
import { PageTitle, LinkButton } from '../../atoms';
import { Search, RecipeCardsContainer } from '../../organisms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import CategoryContainer from '../../molecules/CategoryContainer';

const Drinks = ({
  recipes, categories, loaded, buttonLoaded, fillListOfRecipes, fillListOfCategories,
}) => {
  useEffect(() => {
    fillListOfRecipes('drink');
    fillListOfCategories('drink');
  }, [fillListOfRecipes, fillListOfCategories]);

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
  fillListOfCategories: PropTypes.func.isRequired,
  fillListOfRecipes: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  buttonLoaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  buttonLoaded: state.recipes.buttonLoaded,
  recipes: state.recipes.recipes,
  categories: state.recipes.categories,
});

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
  fillListOfCategories: (category) => dispatch(getCategories(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
