import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { PageTitle, ProfileButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';

const Foods = ({ loaded, recipes }) => (
  <main>
    <header>
      <ProfileButton />
      <PageTitle>Comidas</PageTitle>
      <Search category="meal" />
      {loaded && <RecipeCardsContainer recipes={ recipes } category="Meal" />}
    </header>
  </main>
);

Foods.propTypes = {
  loaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps)(Foods);
