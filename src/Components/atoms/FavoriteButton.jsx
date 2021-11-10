import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
  getFavoriteRecipeExistence,
  removeFavoriteRecipe,
  saveFavoriteRecipes,
} from '../../utils/localStorage';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoriteButton = ({ id, recipe, foodOrDrink }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(getFavoriteRecipeExistence(id));
  }, [id]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRecipe(id);
      setIsFavorite(false);
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
      data-testid="favorite-btn"
      onClick={ handleFavorite }
    />
  );
};

FavoriteButton.propTypes = {
  id: PropTypes.string.isRequired,
  recipe: PropTypes.shape(PropTypes.string).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default FavoriteButton;
