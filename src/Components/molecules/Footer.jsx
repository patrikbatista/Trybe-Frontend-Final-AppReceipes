import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkButton from '../atoms/LinkButton';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import { getCategories, getRecipes, setIsIngredient } from '../../redux/actions';

const Footer = ({ fillListOfRecipes, fillListOfCategories, setIsIngredientFalse }) => (
  <footer data-testid="footer" style={ { position: 'fixed', bottom: '0' } }>
    <LinkButton
      src={ drinkIcon }
      alt="drink"
      href="/bebidas"
      testid="drinks-bottom-btn"
    />
    <LinkButton
      src={ exploreIcon }
      alt="explore"
      href="/explorar"
      testid="explore-bottom-btn"
    />
    <LinkButton
      src={ mealIcon }
      alt="meal"
      href="/comidas"
      testid="food-bottom-btn"
      handleClick={ () => {
        fillListOfRecipes('meal');
        fillListOfCategories('meal');
        setIsIngredientFalse();
      } }
    />
  </footer>
);

Footer.propTypes = {
  fillListOfRecipes: PropTypes.func.isRequired,
  fillListOfCategories: PropTypes.func.isRequired,
  setIsIngredientFalse: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
  fillListOfCategories: (category) => dispatch(getCategories(category)),
  setIsIngredientFalse: () => dispatch(setIsIngredient()),
});

export default connect(null, mapDispatchToProps)(Footer);
