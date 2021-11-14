import React, { useState } from 'react';
import { Redirect } from 'react-router';

const LogoutButton = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/" />;

  return (
    <button
      style={ {
        with: '100%',
        // position: 'fixed', comenti pois ta bugando o teste
        bottom: '50',
      } }
      type="button"
      data-testid="profile-logout-btn"
      onClick={ () => {
        localStorage.clear();
        setRedirect(true);
      } }
    >
      Sair
    </button>
  );
};

export default LogoutButton;
