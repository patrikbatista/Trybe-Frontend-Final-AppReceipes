import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes, getCategories } from '../../redux/actions';
import { PageTitle, LinkButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';
import { Footer } from '../molecules';
import profileIcon from '../../images/profileIcon.svg';
import CategoryContainer from '../molecules/CategoryContainer';

const Foods = ({
  loaded, recipes, buttonLoaded, categories, fillListOfRecipes, fillListOfCategories,
}) => {
  useEffect(() => {
    fillListOfRecipes('meal');
    fillListOfCategories('meal');
  }, [fillListOfRecipes, fillListOfCategories]);

  return (
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
};

Foods.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
