import PropTypes from 'prop-types';
import React from 'react';

const RecommendationCard = ({ index, recommendation, foodOrDrink }) => {
  console.log(recommendation);
  return (
    <div
      style={ {
        width: '300px',
        height: '300px',
        backgroundColor: 'purple',
        marginRight: '200px',
      } }
      data-testid={ `${index}-recomendation-card` }
    >
      <h1 data-testid={ `${index}-recomendation-title` }>
        {recommendation[`str${foodOrDrink}`]}
      </h1>
    </div>
  );
};

RecommendationCard.propTypes = {
  index: PropTypes.number.isRequired,
  recommendation: PropTypes.shape({
    strDrink: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default RecommendationCard;
