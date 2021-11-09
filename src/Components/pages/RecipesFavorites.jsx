import React from 'react';
import { PageTitle, LinkButton } from '../atoms';
import profileIcon from '../../images/profileIcon.svg';

const RecipesFavorites = () => (
  <header>
    <LinkButton
      src={ profileIcon }
      alt="perfil"
      href="/perfil"
      testid="profile-top-btn"
    />
    <PageTitle>Receitas Favoritas</PageTitle>
  </header>
);

export default RecipesFavorites;
