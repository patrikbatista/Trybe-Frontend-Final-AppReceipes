import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getRecipes, getCategories } from '../../redux/actions';
import LinkButton from '../atoms/LinkButton';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

const Footer = ({ fillListOfRecipes, fillListOfCategories }) => (
  <footer data-testid="footer" style={ { position: 'fixed', bottom: '0' } }>
    <LinkButton
      src={ drinkIcon }
      alt="drink"
      href="/bebidas"
      testid="drinks-bottom-btn"
      handleClick={ () => {
        fillListOfRecipes('drink');
        fillListOfCategories('drink');
      } }
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
      } }
    />
  </footer>
);

Footer.propTypes = {
  fillListOfCategories: PropTypes.func.isRequired,
  fillListOfRecipes: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
  fillListOfCategories: (category) => dispatch(getCategories(category)),
});

export default connect(null, mapDispatchToProps)(Footer);
