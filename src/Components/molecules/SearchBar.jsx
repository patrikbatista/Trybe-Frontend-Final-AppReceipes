import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setSearchOption, setWordSearched, fetchRecipes } from '../../redux/actions';

const SearchBar = ({ setOption, setWord, fetchReceitas, category }) => {
  const [radioOption, setRadioOption] = useState('ingredients');
  const [wordToSearch, setWordToSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setOption(radioOption);
    setWord(wordToSearch);
    fetchReceitas(radioOption, wordToSearch, category);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        data-testid="search-input"
        value={ wordToSearch }
        onChange={ (event) => setWordToSearch(event.target.value) }
      />
      <button
        type="submit"
        data-testid="exec-search-btn"
      >
        Pesquisar
      </button>
      <div>
        <label htmlFor="ingredients">
          Ingrediente
          <input
            type="radio"
            name="option"
            data-testid="ingredient-search-radio"
            id="ingredients"
            value="ingredients"
            onChange={ (event) => setRadioOption(event.target.value) }
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="radio"
            name="option"
            data-testid="name-search-radio"
            id="name"
            value="name"
            onChange={ (event) => setRadioOption(event.target.value) }
          />
        </label>
        <label htmlFor="first-letter">
          Primeira Letra
          <input
            type="radio"
            name="option"
            data-testid="first-letter-search-radio"
            id="first-letter"
            value="first-letter"
            onChange={ (event) => setRadioOption(event.target.value) }
          />
        </label>
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  category: PropTypes.string.isRequired,
  fetchReceitas: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setWord: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setOption: (option) => dispatch(setSearchOption(option)),
  setWord: (searched) => dispatch(setWordSearched(searched)),
  fetchReceitas: (o, w, c) => dispatch(fetchRecipes(o, w, c)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
