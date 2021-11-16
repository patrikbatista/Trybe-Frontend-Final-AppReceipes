import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ rootReducer }), initialState, applyMiddleware(thunk))
);

const renderWithRouterAndRedux = (
  component, { initialState, store = createMockStore(initialState) } = {},
) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Router history={history}>
        <Provider store={store}>
          {component}
        </Provider>
      </Router>,
    ),
    history,
    store,
  });
};

export default renderWithRouterAndRedux;
