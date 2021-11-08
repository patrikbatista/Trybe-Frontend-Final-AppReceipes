import React from 'react';
import { PageTitle, ProfileButton } from '../atoms';
import Search from '../molecules/Search';

const Drinks = () => (
  <div>
    <header>
      <ProfileButton />
      <PageTitle>Bebidas</PageTitle>
      <Search category="cocktail" />
    </header>
  </div>
);

export default Drinks;
