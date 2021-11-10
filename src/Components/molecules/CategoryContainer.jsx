import PropTypes from 'prop-types';
import React from 'react';
import { AllCategories } from '../atoms';
import Category from '../atoms/Category';

const MAX_CATEGORIES = 5;

const CategoryContainer = ({ categories, foodOrDrink }) => (
  <div>
    {categories && <AllCategories foodOrDrink={ foodOrDrink } />}
    {categories && categories.slice(0, MAX_CATEGORIES).map(({ strCategory }) => (<Category
      key={ strCategory }
      categoryName={ strCategory }
      foodOrDrink={ foodOrDrink }
    />))}
  </div>
);

CategoryContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  foodOrDrink: PropTypes.string.isRequired,
};

export default CategoryContainer;
