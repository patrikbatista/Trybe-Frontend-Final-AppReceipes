import React from 'react';
import { PageTitle, ProfileButton } from '../atoms';
import Search from '../molecules/Search';

const ExploreOrigin = () => (
  <div>
    <header>
      <ProfileButton />
      <PageTitle>Explorar Origem</PageTitle>
      <Search />
    </header>
  </div>
);

export default ExploreOrigin;
