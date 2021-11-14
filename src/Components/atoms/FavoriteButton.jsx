import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  getFavoriteRecipeExistence,
  removeFavoriteRecipe,
  saveFavoriteRecipes,
} from '../../utils/localStorage';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoriteButton = ({ id, recipe, foodOrDrink, favorite, index }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(getFavoriteRecipeExistence(id));
    }
  }, [id, favorite]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRecipe(id);
      setIsFavorite(false);
      if (favorite) {
        const card = document.getElementById(`${index}-card-recipe`);
        card.remove();
      }
    } else {
      saveFavoriteRecipes(recipe, foodOrDrink);
      setIsFavorite(true);
    }
  };

  return (
    <input
      type="image"
      src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
      alt="share"
      data-testid={ favorite ? `${index}-horizontal-favorite-btn` : 'favorite-btn' }
      onClick={ handleFavorite }
    />
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.shape(PropTypes.string).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoriteButton;
