import React, { useEffect, useState } from 'react';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import CardsIngredientsContainer from '../../molecules/CardsIngredientsContainer';

const ExploreDrinkIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const getIngredients = async () => {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    const data = await response.json();
    console.log(data);
    setIngredients(data.drinks);
  };

  useEffect(() => {
    getIngredients();
  }, []);

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

export default ExploreDrinkIngredients;
