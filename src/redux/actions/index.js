export const SET_SEARCH_OPTION = 'SET_SEARCH_OPTION';
export const SET_WORD_SEARCHED = 'SET_WORD_SEARCHED';

export const setSearchOption = (payload) => ({
  type: SET_SEARCH_OPTION,
  payload,
});

export const setWordSearched = (payload) => ({
  type: SET_WORD_SEARCHED,
  payload,
});
