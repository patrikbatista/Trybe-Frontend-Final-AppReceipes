import React from 'react';
import searchIcon from '../../images/searchIcon.svg';

const SearchButton = () => (
  <input type="image" src={ searchIcon } alt="perfil" data-testid="search-top-btn" />
);

export default SearchButton;
