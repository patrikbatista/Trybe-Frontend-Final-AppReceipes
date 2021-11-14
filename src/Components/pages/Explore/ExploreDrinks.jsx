import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import { randomDrink } from '../../../utils/fetch';

const ExploreDrinks = () => {
  const [redirect, setRedirect] = useState(false);
  const [redirectId, setRedirectId] = useState('');

  if (redirect) {
    return <Redirect to={ `/bebidas/${redirectId}` } />;
  }

  return (
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
          <button type="button" data-testid="explore-by-ingredient">
            Por Ingredientes
          </button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ async () => {
            setRedirectId(await randomDrink());
            setRedirect(true);
          } }
        >
          Me Surpreenda!
        </button>
      </header>
      <Footer />
    </div>
  );
};

export default ExploreDrinks;
