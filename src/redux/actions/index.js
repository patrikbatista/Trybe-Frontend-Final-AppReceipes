import { fetchCategories, fetchFilterRecipes, fetchRecipes } from '../../utils/fetch';

const errorMessage = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export const SET_SEARCH_OPTION = 'SET_SEARCH_OPTION';
export const SET_WORD_SEARCHED = 'SET_WORD_SEARCHED';
export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const setSearchOption = (payload) => ({
  type: SET_SEARCH_OPTION,
  payload,
});

export const setWordSearched = (payload) => ({
  type: SET_WORD_SEARCHED,
  payload,
});

const requestRecipes = () => ({
  type: REQUEST_RECIPES,
});

const receiveRecipes = (payload) => ({
  type: RECEIVE_RECIPES,
  payload,
});

const receiveCategories = (payload) => ({
  type: RECEIVE_CATEGORIES,
  payload,
});

export function getFilterRecipes(option, wordSearched, category) {
  return (dispatch) => {
    dispatch(requestRecipes());
    return fetchFilterRecipes(option, wordSearched, category)
      .then((response) => dispatch(receiveRecipes(response)))
      .catch(() => global.alert(errorMessage));
  };
}

export function getRecipes(category) {
  return (dispatch) => {
    dispatch(requestRecipes());
    return fetchRecipes(category)
      .then((response) => dispatch(receiveRecipes(response)))
      .catch(() => global.alert('Sinto muito, não encontramos nenhuma receita.'));
  };
}

export function getCategories(category) {
  return (dispatch) => (
    fetchCategories(category)
      .then((response) => dispatch(receiveCategories(response)))
      .catch(() => global.alert('Sinto muito, não encontramos nenhuma categoria.'))
  );
}
