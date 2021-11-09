import { REQUEST_RECIPES, RECEIVE_RECIPES, RECEIVE_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  categories: [],
  loaded: false,
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_RECIPES:
    return {
      ...state,
      loaded: false,
    };
  case RECEIVE_RECIPES:
    return { ...state, recipes: action.payload, loaded: true };
  case RECEIVE_CATEGORIES:
    return { ...state, categories: action.payload };
  default:
    return state;
  }
};

export default recipeReducer;
