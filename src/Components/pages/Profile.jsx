import React from 'react';
import { PageTitle, LinkButton } from '../atoms';
import profileIcon from '../../images/profileIcon.svg';
import { Footer } from '../molecules';
import ProfileContainer from '../molecules/ProfileContainer';

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
    <ProfileContainer />
    <Footer />
  </div>
);

export default Profile;
