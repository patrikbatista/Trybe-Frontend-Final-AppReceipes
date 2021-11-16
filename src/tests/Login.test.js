import React from 'react';
import renderWithRouterAndRedux from './helper';
import { Login } from '../Components/pages';

describe('Tela de login', () => {
  it('2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Login />);
    const emailInput = getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
  });
});