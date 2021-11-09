import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageTitle, ProfileButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';

const Drinks = ({ recipes, loaded }) => (
  <div>
    <header>
      <ProfileButton />
      <PageTitle>Bebidas</PageTitle>
      <Search category="cocktail" />
      {loaded && <RecipeCardsContainer recipes={ recipes } category="Drink" />}
    </header>
  </div>
);

Drinks.propTypes = {
  loaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps)(Drinks);
