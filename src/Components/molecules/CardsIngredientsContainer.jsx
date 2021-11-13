import PropTypes from 'prop-types';
import React from 'react';

const MAX = 12;

const CardsIngredientsContainer = ({ ingredients }) => (
  <section>
    {ingredients.slice(0, MAX).map((ingredient, index) => (
      <div
        key={ index }
        data-testid={ `${index}-ingredient-card` }
        onClick={ () => { } }
        aria-hidden
      >
        <img
          src={ `https://www.the${ingredient.strIngredient
            ? 'meal'
            : 'cocktail'}db.com/images/ingredients/${ingredient.strIngredient
            ? ingredient.strIngredient
            : ingredient.strIngredient1}-Small.png` }
          alt="massa"
          data-testid={ `${index}-card-img` }
        />
        <p data-testid={ `${index}-card-name` }>
          {ingredient.strIngredient
            ? ingredient.strIngredient
            : ingredient.strIngredient1}
        </p>
      </div>
    ))}
  </section>
);

CardsIngredientsContainer.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsIngredientsContainer;
