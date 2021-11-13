import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { PageTitle, LinkButton } from '../../atoms';
import { Search, RecipeCardsContainer } from '../../organisms';
import { Footer } from '../../molecules';
import profileIcon from '../../../images/profileIcon.svg';
import CategoryContainer from '../../molecules/CategoryContainer';

const Foods = ({ loaded, recipes, buttonLoaded, categories }) => (
  <main>
    <header>
      <LinkButton
        src={ profileIcon }
        alt="perfil"
        href="/perfil"
        testid="profile-top-btn"
      />
      <PageTitle>Comidas</PageTitle>
      <Search category="meal" />
      {buttonLoaded
        && <CategoryContainer categories={ categories } foodOrDrink="meal" />}
      {loaded && <RecipeCardsContainer recipes={ recipes } category="Meal" />}
    </header>
    <Footer />
  </main>
);

Foods.propTypes = {
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

export default connect(mapStateToProps)(Foods);
