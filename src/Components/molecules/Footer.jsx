import React from 'react';
import LinkButton from '../atoms/LinkButton';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';

const Footer = () => (
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
    />
  </footer>
);

export default Footer;
