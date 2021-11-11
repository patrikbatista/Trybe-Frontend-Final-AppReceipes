const handleOneResult = (result, category) => {
  if (result.length === 1) {
    if (category === 'meal') {
      window.location.href = `/comidas/${result[0].idMeal}`;
    } else if (category === 'cocktail') {
      window.location.href = `/bebidas/${result[0].idDrink}`;
    }
  }
};

export const fetchFilterRecipes = async (option, word, category) => {
  let response = '';
  let data = '';
  let result = '';
  switch (option) {
  case 'ingredients':
    response = await fetch(`https://www.the${category}db.com/api/json/v1/1/filter.php?i=${word}`);
    data = await response.json();
    result = category === 'meal' ? data.meals : data.drinks;
    handleOneResult(result, category);
    return result;
  case 'name':
    response = await fetch(`https://www.the${category}db.com/api/json/v1/1/search.php?s=${word}`);
    data = await response.json();
    result = category === 'meal' ? data.meals : data.drinks;
    handleOneResult(result, category);
    return result;
  case 'first-letter':
    if (word.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      break;
    } else {
      response = await fetch(`https://www.the${category}db.com/api/json/v1/1/search.php?f=${word}`);
      data = await response.json();
      result = category === 'meal' ? data.meals : data.drinks;
      handleOneResult(result, category);
      return result;
    }
  default:
    return null;
  }
};

export const fetchRecipes = async (category) => {
  let response = '';
  let data = '';
  switch (category) {
  case 'meal':
    response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    data = await response.json();
    return data.meals;
  case 'drink':
    response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    data = await response.json();
    return data.drinks;
  default:
    break;
  }
};

export const fetchCategories = async (category) => {
  let response = '';
  let data = '';
  switch (category) {
  case 'meal':
    response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    data = await response.json();
    return data.meals;
  case 'drink':
    response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    data = await response.json();
    return data.drinks;
  default:
    break;
  }
};

export const fetchByCategory = async (category, foodOrMeal) => {
  let response = '';
  let data = '';
  switch (foodOrMeal) {
  case 'meal':
    response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    data = await response.json();
    console.log(data);
    return data.meals;
  case 'drink':
    response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    data = await response.json();
    return data.drinks;
  default:
    break;
  }
};

export async function randomFood() {
  const ENDPOINT = 'https://www.themealdb.com/api/json/v1/1/random.php';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}

export async function randomDrink() {
  const ENDPOINT = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const response = await fetch(ENDPOINT);
  const data = await response.json();
  return data;
}
