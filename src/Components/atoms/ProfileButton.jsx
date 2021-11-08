import React from 'react';
import profileIcon from '../../images/profileIcon.svg';

const ProfileButton = () => (
  <input
    type="image"
    src={ profileIcon }
    alt="perfil"
    data-testid="profile-top-btn"
    onClick={ () => {
      window.location.href = '/perfil';
    } }
  />
);

export default ProfileButton;