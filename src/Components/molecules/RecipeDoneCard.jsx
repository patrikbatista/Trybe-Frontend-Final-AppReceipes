import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';
import FavoriteButton from '../atoms/FavoriteButton';

const RecipeDoneCard = ({ recipe, index, isFavorite }) => (
  <div id={ `${index}-card-recipe` }>
    <Link to={ `/${recipe.type}s/${recipe.id}` }>
      <img
        src={ recipe.image }
        alt={ recipe.name }
        width="120px"
        data-testid={ `${index}-horizontal-image` }
      />
      <h1
        data-testid={ `${index}-horizontal-name` }
        aria-hidden
      >
        { recipe.name }
      </h1>
    </Link>
    <p
      data-testid={ `${index}-horizontal-top-text` }
    >
      {recipe.type === 'bebida' ? 'Alcoholic' : `${recipe.area} - ${recipe.category}`}
    </p>
    {!isFavorite
    && <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>}
    <input
      type="image"
      src={ shareIcon }
      alt="Share"
      onClick={ () => {
        const url = isFavorite
          ? window.location.href.toString().split('/receitas-favoritas')[0]
          : window.location.href.toString().split('/receitas-feitas')[0];
        const newUrl = `${url}/${recipe.type}s/${recipe.id}`;
        window.navigator.clipboard.writeText(newUrl);
        const alerta = document.createElement('p');
        alerta.innerHTML = 'Link copiado!';
        alerta.classList.add('alerta');
        alerta.style.display = 'none';
        document.body.appendChild(alerta);
      } }
      data-testid={ `${index}-horizontal-share-btn` }
    />
    {isFavorite && <FavoriteButton
      id={ recipe.id }
      foodOrDrink={ recipe.type === 'comida' ? 'Meal' : 'Drink' }
      favorite={ isFavorite }
      index={ index }
    />}
    {!isFavorite && Array.from(recipe.tags).map((tag, i) => (
      <p
        key={ i }
        data-testid={ `${index}-${tag}-horizontal-tag` }
      >
        {tag}
      </p>))}
  </div>
);

RecipeDoneCard.propTypes = {
  recipe: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
}.isRequired;

export default RecipeDoneCard;
