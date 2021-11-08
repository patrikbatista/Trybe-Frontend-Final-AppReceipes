import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actions';

const INITIAL_STATE = {
  recipes: [],
  loading: false,
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_RECIPES:
    return {
      ...state,
      loading: true,
    };
  case RECEIVE_RECIPES:
    return { ...state, recipes: action.payload, loading: false };
  default:
    return state;
  }
};

export default recipeReducer;
