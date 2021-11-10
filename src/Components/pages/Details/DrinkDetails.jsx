import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecipeDetails from '../../organisms/RecipeDetails';

const DrinkDetails = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  console.log(id);

  const fetchRecipe = async (recipeId) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setRecipe(data.drinks[0]);
  };

  useEffect(() => {
    fetchRecipe(id);
  }, [id]);

  return (
    <div>
      {recipe && <RecipeDetails recipe={ recipe } foodOrDrink="Drink" />}
    </div>
  );
};

export default DrinkDetails;
