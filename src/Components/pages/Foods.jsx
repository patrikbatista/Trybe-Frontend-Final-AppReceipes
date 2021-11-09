import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import { PageTitle, LinkButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';
import { Footer } from '../molecules';
import profileIcon from '../../images/profileIcon.svg';

const Foods = ({ loaded, recipes, fillListOfRecipes }) => {
  useEffect(() => {
    fillListOfRecipes('meal');
  }, [fillListOfRecipes]);

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
        {loaded && <RecipeCardsContainer recipes={ recipes } category="Meal" />}
      </header>
      <Footer />
    </main>
  );
};

Foods.propTypes = {
  fillListOfRecipes: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  recipes: state.recipes.recipes,
});
const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Foods);
