import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveRecipes, setIsIngredient } from '../../redux/actions';

const MAX = 12;

const CardsIngredientsContainer = ({ ingredients, saveRecipes, isIngredient }) => {
  const handleRecipes = async (ingredient) => {
    const urlIngredient = ingredient.strIngredient
      ? ingredient.strIngredient : ingredient.strIngredient1;
    const url = ingredient.strIngredient
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${urlIngredient}`
      : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${urlIngredient}`;
    const response = await fetch(url);
    const data = await response.json();
    const recipes = data.meals ? data.meals : data.drinks;
    isIngredient();
    saveRecipes(recipes);
  };

  return (
    <section>
      {ingredients.slice(0, MAX).map((ingredient, index) => (
        <Link
          key={ index }
          to={ ingredient.strIngredient
            ? '/comidas' : '/bebidas' }
          onClick={ () => handleRecipes(ingredient) }
        >
          <div
            data-testid={ `${index}-ingredient-card` }
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
        </Link>
      ))}
    </section>
  );
};

CardsIngredientsContainer.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
  saveRecipes: PropTypes.func.isRequired,
  isIngredient: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveRecipes: (recipes) => dispatch(receiveRecipes(recipes)),
  isIngredient: () => dispatch(setIsIngredient()),
});

export default connect(null, mapDispatchToProps)(CardsIngredientsContainer);
