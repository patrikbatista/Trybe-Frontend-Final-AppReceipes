import React, { useState } from 'react';
import { Redirect } from 'react-router';

const RecipeDoneButton = () => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/receitas-feitas" />;

  return (
    <button
      style={ {
        with: '100%',
        // position: 'fixed', comentei pois ta bugando o teste
        bottom: '200',
      } }
      type="button"
      data-testid="profile-done-btn"
      onClick={ () => {
        setRedirect(true);
      } }
    >
      Receitas Feitas
    </button>
  );
};

export default RecipeDoneButton;
