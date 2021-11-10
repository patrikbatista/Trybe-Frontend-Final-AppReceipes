import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import RecipeDetails from '../../organisms/RecipeDetails';

const FoodDetails = () => {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();

  const fetchRecipe = async (recipeId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    const data = await response.json();
    setRecipe(data.meals[0]);
  };

  useEffect(() => {
    fetchRecipe(id);
  }, [id]);

  return (
    <div>
      {recipe && <RecipeDetails
        recipe={ recipe }
        foodOrDrink="Meal"
        status="inProgress"
      />}
    </div>
  );
};

export default FoodDetails;
