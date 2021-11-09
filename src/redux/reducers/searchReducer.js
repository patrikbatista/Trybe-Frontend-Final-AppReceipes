import { SET_SEARCH_OPTION, SET_WORD_SEARCHED } from '../actions';

const INITIAL_STATE = {
  option: '',
  searched: '',
};

function searchReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_SEARCH_OPTION:
    return {
      ...state,
      option: action.payload,
    };
  case SET_WORD_SEARCHED:
    return {
      ...state,
      searched: action.payload,
    };
  default:
    return state;
  }
}

export default searchReducer;
