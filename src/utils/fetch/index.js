const fetchFilterRecipes = async (option, word, category) => {
  let response = '';
  let data = '';
  switch (option) {
  case 'ingredients':
    response = await fetch(`https://www.the${category}db.com/api/json/v1/1/filter.php?i=${word}`);
    data = await response.json();
    return data;
  case 'name':
    response = await fetch(`https://www.the${category}db.com/api/json/v1/1/search.php?s=${word}`);
    data = await response.json();
    return data;
  case 'first-letter':
    if (word.length > 1) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      break;
    } else {
      response = await fetch(`https://www.the${category}db.com/api/json/v1/1/search.php?f=${word}`);
      data = await response.json();
      return data;
    }
  default:
    return null;
  }
};

export default fetchFilterRecipes;
