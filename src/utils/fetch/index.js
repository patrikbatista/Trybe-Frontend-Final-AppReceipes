const handleOneResult = (result, category) => {
  if (result.length === 1) {
    if (category === 'meal') {
      window.location.href = `/comidas/${result[0].idMeal}`;
    } else if (category === 'cocktail') {
      window.location.href = `/bebidas/${result[0].idDrink}`;
    }
  }
};

const fetchFilterRecipes = async (option, word, category) => {
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

export default fetchFilterRecipes;
