import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';
import { randomFood } from '../../../utils/fetch';

const Explore = () => {
  const [redirect, setRedirect] = useState(false);
  const [redirectId, setRedirectId] = useState('');

  if (redirect) {
    return <Redirect to={ `/comidas/${redirectId}` } />;
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
        <PageTitle>Explorar Comidas</PageTitle>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button type="button" data-testid="explore-by-area">Por Local de Origem</button>
        </Link>
        <button
          type="button"
          data-testid="explore-surprise"
          onClick={ async () => {
            setRedirectId(await randomFood());
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

export default Explore;
