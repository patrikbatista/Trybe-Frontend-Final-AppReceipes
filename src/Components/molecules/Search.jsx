import React, { useState } from 'react';
import searchIcon from '../../images/searchIcon.svg';
import { SearchBar } from '../atoms';

const Search = () => {
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
      {showSearchBar && <SearchBar />}
    </div>
  );
};

export default Search;
