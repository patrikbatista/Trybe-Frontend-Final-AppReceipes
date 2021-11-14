import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { receiveRecipes } from '../../../redux/actions';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import CardsIngredientsContainer from '../../molecules/CardsIngredientsContainer';

const ExploreFoodIngredients = ({ fillRecipes }) => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    setIngredients(data.meals);
  };

  useEffect(() => {
    getIngredients();
    fillRecipes();
  }, [fillRecipes]);

  return (
    <div>
      <header>
        <LinkButton
          src={ profileIcon }
          alt="perfil"
          href="/perfil"
          testid="profile-top-btn"
        />
        <PageTitle>Explorar Ingredientes</PageTitle>
      </header>
      <CardsIngredientsContainer ingredients={ ingredients } />
      <Footer />
    </div>
  );
};

ExploreFoodIngredients.propTypes = {
  fillRecipes: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillRecipes: () => dispatch(receiveRecipes([1])),
});

export default connect(null, mapDispatchToProps)(ExploreFoodIngredients);
