import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions';

const INITIAL_STATE = {
  recipes: [],
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
  default:
    return state;
  }
};

export default recipeReducer;
