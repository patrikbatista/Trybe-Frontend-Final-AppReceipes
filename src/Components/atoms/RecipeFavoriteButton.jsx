import React, { useState } from 'react';
import { Redirect } from 'react-router';

const RecipeFavoriteButton = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/receitas-favoritas" />;

  return (
    <button
      style={ {
        with: '100%',
        // position: 'fixed', comentei poista bugando o teste
        bottom: '100',
      } }
      type="button"
      data-testid="profile-favorite-btn"
      onClick={ () => {
        setRedirect(true);
      } }
    >
      Receitas Favoritas
    </button>
  );
};

export default RecipeFavoriteButton;
