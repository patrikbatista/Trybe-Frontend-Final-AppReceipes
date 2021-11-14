import {
  REQUEST_RECIPES,
  RECEIVE_RECIPES,
  RECEIVE_CATEGORIES,
  REQUEST_CATEGORIES,
  INGREDIENT,
} from '../actions';

const INITIAL_STATE = {
  recipes: [],
  categories: [],
  buttonLoaded: false,
  loaded: false,
  isIngredient: false,
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
  case REQUEST_CATEGORIES:
    return {
      ...state,
      buttonLoaded: false,
    };
  case RECEIVE_CATEGORIES:
    return { ...state,
      categories: action.payload,
      buttonLoaded: true,
    };
  case INGREDIENT:
    return { ...state, isIngredient: !state.isIngredient };
  default:
    return state;
  }
};

export default recipeReducer;
