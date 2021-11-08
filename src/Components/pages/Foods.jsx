import React from 'react';
import { PageTitle, ProfileButton } from '../atoms';
import Search from '../molecules/Search';

const Foods = () => (
  <main>
    <header>
      <ProfileButton />
      <PageTitle>Comidas</PageTitle>
      <Search />
    </header>
  </main>
);

export default Foods;