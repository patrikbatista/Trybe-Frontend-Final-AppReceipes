import React from 'react';
import renderWithRouterAndRedux from './helper';
import App from '../App';
import store from '../redux/store'

describe('1 - Rotas', () => {
  it('Tela de login: /;', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/');
  });
  it('Tela principal de receitas de comidas: /comidas;', () => {
    const { history } = renderWithRouterAndRedux(<App />, {initialState: null, store });
    history.push('/comidas');
    expect(history.location.pathname).toBe('/comidas');
  });
});
