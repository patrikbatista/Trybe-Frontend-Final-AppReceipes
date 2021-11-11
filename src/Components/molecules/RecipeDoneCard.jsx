import PropTypes from 'prop-types';
import React from 'react';
import shareIcon from '../../images/shareIcon.svg';

const RecipeDoneCard = ({ recipe, index }) => (
  <div>
    <img src={ recipe.image } alt="" data-testid={ `${index}-horizontal-image` } />
    <p
      data-testid={ `${index}-horizontal-top-text` }
    >
      {recipe.type === 'bebida' ? 'Alcoholic' : `${recipe.area} - ${recipe.category}`}
    </p>
    <h1 data-testid={ `${index}-horizontal-name` }>{ recipe.name }</h1>
    <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
    <input
      type="image"
      src={ shareIcon }
      alt="Share"
      onClick={ () => {
        const url = window.location.href.toString().split('/receitas-feitas')[0];
        const newUrl = `${url}/${recipe.type}s/${recipe.id}`;
        navigator.clipboard.writeText(newUrl);
        const alerta = document.createElement('p');
        alerta.innerHTML = 'Link copiado!';
        alerta.classList.add('alerta');
        alerta.style.display = 'none';
        document.body.appendChild(alerta);
      } }
      data-testid={ `${index}-horizontal-share-btn` }
    />
    {Array.from(recipe.tags).map((tag, i) => (
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
