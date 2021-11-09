import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PageTitle, LinkButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';
import profileIcon from '../../images/profileIcon.svg';
import { Footer } from '../molecules';

const Drinks = ({ recipes, loaded }) => (
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

Drinks.propTypes = {
  loaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps)(Drinks);
