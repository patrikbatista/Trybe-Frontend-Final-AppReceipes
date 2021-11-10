import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { RecommendationCard } from '../atoms';

const RecommendationContainer = ({ foodOrDrink }) => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = async (foodOrDrink) => {
    if (foodOrDrink === 'Drink') {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
      const data = await response.json()
      setRecommendations(data.drinks)
    } else {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      const data = await response.json()
      setRecommendations(data.meals)
    }
  }

  useEffect(() => {
    fetchRecommendations(foodOrDrink)
  }, [foodOrDrink])

  return (
  <div>
    {recommendations
    && recommendations.map((recommendation, index) => (<RecommendationCard
      key={ index }
      index={ index }
      foodOrDrink={ foodOrDrink }
      recommendation={ recommendation }
    />))}
  </div>
  )
};

RecommendationContainer.propTypes = {
  foodOrDrink: PropTypes.string.isRequired,
};

export default RecommendationContainer;
