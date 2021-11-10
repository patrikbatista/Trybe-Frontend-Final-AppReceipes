import PropTypes from 'prop-types';
import React from 'react';

const RecommendationCard = ({ index, recommendation, foodOrDrink }) => (
  <div
    data-testid={ `${index}-recomendation-card` }
  >
    {recommendation[`str${foodOrDrink}`]}
  </div>
);

RecommendationCard.propTypes = {
  index: PropTypes.number.isRequired,
  recommendation: PropTypes.shape({
    strDrink: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default RecommendationCard;
