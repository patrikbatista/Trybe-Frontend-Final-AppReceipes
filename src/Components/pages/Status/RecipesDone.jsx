import React from 'react';
import { PageTitle, LinkButton } from '../../atoms';
import profileIcon from '../../../images/profileIcon.svg';

const RecipesDone = () => (
  <header>
    <LinkButton
      src={ profileIcon }
      alt="perfil"
      href="/perfil"
      testid="profile-top-btn"
    />
    <PageTitle>Receitas Feitas</PageTitle>
  </header>
);

export default RecipesDone;
