import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import recipeReducer from './recipeReducers';
import buttonFinished from './buttonFinished';

const rootReducer = combineReducers({
  searchReducer,
  recipes: recipeReducer,
  button: buttonFinished,
});

export default rootReducer;
