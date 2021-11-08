import PropTypes from 'prop-types';
import React, { useState } from 'react';
import searchIcon from '../../images/searchIcon.svg';
import { SearchBar } from '../atoms';

const Search = ({ category }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <div>
      <input
        type="image"
        src={ searchIcon }
        alt="perfil"
        data-testid="search-top-btn"
        onClick={ () => setShowSearchBar(!showSearchBar) }
      />
      {showSearchBar && <SearchBar category={ category } />}
    </div>
  );
};

Search.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Search;
