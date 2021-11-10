export function createTokens() {
  localStorage.setItem('mealsToken', 1);
  localStorage.setItem('cocktailsToken', 1);
}

export function saveUser(email) {
  const user = {
    email,
  };
  localStorage.setItem('user', JSON.stringify(user));
}

export function getRecipesInProgress() {
  const recipesInProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  return recipesInProgress;
}

export function saveRecipeInProgress(foodOrDrink, recipeId, ingredient) {
  if (foodOrDrink === 'Meal') {
    if (!getRecipesInProgress()) {
      const meals = {
        [recipeId]: [ingredient],
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify({ meals }));
    } else {
      const inProgressRecipes = getRecipesInProgress();
      const newProgressRecipes = {
        ...inProgressRecipes,
        meals: {
          ...inProgressRecipes.meals,
          [recipeId]: [...inProgressRecipes.meals[recipeId], ingredient],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));
    }
  } else if (foodOrDrink === 'Drink') {
    if (!getRecipesInProgress()) {
      const cocktails = {
        [recipeId]: [ingredient],
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify({ cocktails }));
    } else {
      const inProgressRecipes = getRecipesInProgress();
      const newProgressRecipes = {
        ...inProgressRecipes,
        cocktails: {
          ...inProgressRecipes.cocktails,
          [recipeId]: [...inProgressRecipes.cocktails[recipeId], ingredient],
        },
      };
      localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));
    }
  }
}

export const removeIngredientRecipeInProgress = (foodOrDrink, recipeId, ingredient) => {
  if (foodOrDrink === 'Meal') {
    const inProgressRecipes = getRecipesInProgress();
    const newProgressRecipes = {
      ...inProgressRecipes,
      meals: {
        ...inProgressRecipes.meals,
        [recipeId]: inProgressRecipes.meals[recipeId].filter(
          (ingredientInProgress) => ingredientInProgress !== ingredient,
        ),
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));
  }
  if (foodOrDrink === 'Drink') {
    const inProgressRecipes = getRecipesInProgress();
    const newProgressRecipes = {
      ...inProgressRecipes,
      cocktails: {
        ...inProgressRecipes.cocktails,
        [recipeId]: inProgressRecipes.cocktails[recipeId].filter(
          (ingredientInProgress) => ingredientInProgress !== ingredient,
        ),
      },
    };
    localStorage.setItem('inProgressRecipes', JSON.stringify(newProgressRecipes));
  }
};

export function getIngredientsInProgress(foodOrDrink, recipeId) {
  if (foodOrDrink === 'Meal') {
    const inProgressRecipes = getRecipesInProgress();
    if (inProgressRecipes) {
      return inProgressRecipes.meals[recipeId];
    }
  }
  if (foodOrDrink === 'Drink') {
    const inProgressRecipes = getRecipesInProgress();
    if (inProgressRecipes) {
      return inProgressRecipes.cocktails[recipeId];
    }
  }
  return [];
}

export function getStatusOfRecipe(recipeId) {
  const inProgressRecipes = getRecipesInProgress();
  if (inProgressRecipes) {
    if (inProgressRecipes.meals) {
      return !!inProgressRecipes.meals[recipeId];
    }
    if (inProgressRecipes.cocktails) {
      return !!inProgressRecipes.cocktails[recipeId];
    }
    return false;
  }
  return false;
}

export function getFavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favoriteRecipes;
}

export function saveFavoriteRecipes(recipe, foodOrDrink) {
  const newRecipe = {
    id: recipe[`id${foodOrDrink}`],
    type: foodOrDrink === 'Meal' ? 'comida' : 'bebida',
    area: recipe.strArea ? recipe.strArea : '',
    category: recipe.strCategory,
    alcoholicOrNot: recipe.strAlcoholic ? recipe.strAlcoholic : '',
    name: recipe[`str${foodOrDrink}`],
    image: recipe[`str${foodOrDrink}Thumb`],
  };
  if (!getFavoriteRecipes()) {
    localStorage.setItem('favoriteRecipes', JSON.stringify([newRecipe]));
  } else {
    const favoriteRecipes = getFavoriteRecipes();
    const newFavoriteRecipes = [...favoriteRecipes, newRecipe];
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
  }
}

export function removeFavoriteRecipe(recipeId) {
  const favoriteRecipes = getFavoriteRecipes();
  const newFavoriteRecipes = favoriteRecipes.filter((recipe) => recipe.id !== recipeId);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
}

export function getFavoriteRecipeExistence(id) {
  const favoriteRecipes = getFavoriteRecipes();
  if (favoriteRecipes) {
    return favoriteRecipes.some((recipe) => recipe.id === id);
  }
  return false;
}
