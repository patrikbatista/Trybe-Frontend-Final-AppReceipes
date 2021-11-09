import PropTypes from 'prop-types';
import React from 'react';

const Category = ({ categoryName }) => (
  <button type="button" data-testid={ `${categoryName}-category-filter` }>
    {categoryName}
  </button>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default Category;
