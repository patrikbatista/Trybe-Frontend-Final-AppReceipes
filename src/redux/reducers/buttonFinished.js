import {
  SET_DISABLED,
} from '../actions';

const INITIAL_STATE = {
  disabled: true,
};

const recipeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_DISABLED:
    return {
      ...state,
      disabled: action.payload,
    };
  default:
    return state;
  }
};

export default recipeReducer;
