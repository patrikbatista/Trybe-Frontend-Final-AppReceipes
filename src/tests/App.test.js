import React from 'react';
import { renderWithRouterAndStore } from './helper';
import App from '../App';

describe('Rotas', () => {
  it('1 - Tela de login: /;', () => {
    const { history } = renderWithRouterAndStore(<App />, '/');
    expect(history.location.pathname).toBe('/');
  });
});
