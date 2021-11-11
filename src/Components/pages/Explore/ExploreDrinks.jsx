import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import { randomDrink } from '../../../utils/fetch';

const ExploreDrinks = () => (
  <div>
    <header>
      <LinkButton
        src={ profileIcon }
        alt="perfil"
        href="/perfil"
        testid="profile-top-btn"
      />
      <PageTitle>Explorar Bebidas</PageTitle>
      <Link to="/explorar/bebidas/ingredientes">
        <button
          type="button"
          data-testid="explore-by-ingredient"
        >
          Por Ingredientes
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => randomDrink() }
        >
          Me Surpreenda!
        </button>
      </Link>
    </header>
    <Footer />
  </div>
);

export default ExploreDrinks;
