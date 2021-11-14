import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { PageTitle, LinkButton } from '../../atoms';
import { Search, RecipeCardsContainer } from '../../organisms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import CategoryContainer from '../../molecules/CategoryContainer';

const Drinks = ({ recipes, categories, loaded, buttonLoaded }) => (
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

Drinks.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
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

export default connect(mapStateToProps)(Drinks);
