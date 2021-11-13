import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';

const Explore = () => (
  <div>
    <header>
      <LinkButton
        src={ profileIcon }
        alt="perfil"
        href="/perfil"
        testid="profile-top-btn"
      />
      <PageTitle>Explorar</PageTitle>
      <Link to="/explorar/comidas">
        <button type="button" data-testid="explore-food">
          Explorar Comidas
        </button>
      </Link>
      <Link to="/explorar/bebidas">
        <button type="button" data-testid="explore-drinks">Explorar Bebidas</button>
      </Link>
    </header>
    <Footer />
  </div>
);

export default Explore;
