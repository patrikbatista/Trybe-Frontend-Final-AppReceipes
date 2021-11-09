import React from 'react';
import { PageTitle, LinkButton } from '../atoms';
import profileIcon from '../../images/profileIcon.svg';
import { Footer } from '../molecules';

const ExploreIngredients = () => (
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
    <Footer />
  </div>
);

export default ExploreIngredients;
