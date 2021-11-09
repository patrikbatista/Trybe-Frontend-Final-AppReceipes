import PropTypes from 'prop-types';
import React from 'react';
import Category from '../atoms/Category';

const MAX_CATEGORIES = 5;

const CategoryContainer = ({ categories }) => (
  <div>
    {categories && categories.slice(0, MAX_CATEGORIES).map(({ strCategory }) => {
      console.log(strCategory);
      return <Category key={ strCategory } categoryName={ strCategory } />;
    })}
  </div>
);

CategoryContainer.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryContainer;
