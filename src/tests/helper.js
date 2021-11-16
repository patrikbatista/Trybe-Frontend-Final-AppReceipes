import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const createMockStore = () => (
  createStore(combineReducers({ rootReducer }), applyMiddleware(thunk))
);

const renderWithRouterAndRedux = (component) => {
  const history = createMemoryHistory();
  const store = createMockStore();
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
