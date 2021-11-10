import React from 'react';

const RecipeButtonFinished = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <button
      style={ {
        with: '100%',
        position: 'fixed',
        bottom: '0',
      } }
      type="button"
      data-testid="finish-recipe-btn"
      onClick={ handleClick }
    >
      Finalizar Receita
    </button>
  );
};

export default RecipeButtonFinished;
