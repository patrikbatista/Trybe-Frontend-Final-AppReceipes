import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { PageTitle, LinkButton } from '../atoms';
import { Search, RecipeCardsContainer } from '../organisms';
import { Footer } from '../molecules';
import profileIcon from '../../images/profileIcon.svg';

const Foods = ({ loaded, recipes }) => (
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

Foods.propTypes = {
  loaded: PropTypes.bool.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.recipes.loaded,
  recipes: state.recipes.recipes,
});

export default connect(mapStateToProps)(Foods);
