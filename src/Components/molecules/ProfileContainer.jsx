import React from 'react';
import LogoutButton from '../atoms/LogoutButton';
import RecipeDoneButton from '../atoms/RecipeDoneButton';
import RecipeFavoriteButton from '../atoms/RecipeFavoriteButton';

const ProfileContainer = () => (
  <section>
    <h1 data-testid="profile-email">
      {localStorage.getItem('user')}
    </h1>
    <RecipeDoneButton />
    <RecipeFavoriteButton />
    <LogoutButton />
  </section>
);

export default ProfileContainer;
