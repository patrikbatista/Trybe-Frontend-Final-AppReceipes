import React from 'react';
import { PageTitle, LinkButton } from '../atoms';
import Search from '../organisms/Search';
import profileIcon from '../../images/profileIcon.svg';
import { Footer } from '../molecules';

const ExploreOrigin = () => (
  <div>
    <header>
      <LinkButton
        src={ profileIcon }
        alt="perfil"
        href="/perfil"
        testid="profile-top-btn"
      />
      <PageTitle>Explorar Origem</PageTitle>
      <Search />
    </header>
    <Footer />
  </div>
);

export default ExploreOrigin;
