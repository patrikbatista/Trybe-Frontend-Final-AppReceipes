import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../redux/actions';
import { PageTitle, LinkButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';
import profileIcon from '../../images/profileIcon.svg';
import { Footer } from '../molecules';

const Drinks = ({ recipes, loaded, fillListOfRecipes }) => {
  useEffect(() => {
    fillListOfRecipes('drink');
  }, [fillListOfRecipes]);

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
        {loaded && <RecipeCardsContainer recipes={ recipes } category="Drink" />}
      </header>
      <Footer />
    </div>
  );
};

Drinks.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);
