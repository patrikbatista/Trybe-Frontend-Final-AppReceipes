import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import recipeReducer from './recipeReducers';

const rootReducer = combineReducers({
  searchReducer,
  recipeReducer,
});

export default rootReducer;
