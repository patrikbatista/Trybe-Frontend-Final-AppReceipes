import { fetchFilterRecipes, fetchRecipes } from '../../utils/fetch';

export const SET_SEARCH_OPTION = 'SET_SEARCH_OPTION';
export const SET_WORD_SEARCHED = 'SET_WORD_SEARCHED';
export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';

const errorMessage = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

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
      .catch(() => global.alert(errorMessage));
  };
}
