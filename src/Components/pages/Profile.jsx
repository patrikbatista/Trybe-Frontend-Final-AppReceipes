import React from 'react';
import { PageTitle, LinkButton } from '../atoms';
import profileIcon from '../../images/profileIcon.svg';
import { Footer } from '../molecules';

const Profile = () => (
  <div>
    <header>
      <LinkButton
        src={ profileIcon }
        alt="perfil"
        href="/perfil"
        testid="profile-top-btn"
      />
      <PageTitle>Perfil</PageTitle>
    </header>
    <Footer />
  </div>
);

export default Profile;
