import React from 'react';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';
import { Footer } from '../../molecules';

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
    </header>
    <Footer />
  </div>
);

export default ExploreDrinks;