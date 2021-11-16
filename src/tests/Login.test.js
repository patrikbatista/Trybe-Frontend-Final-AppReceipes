import React from 'react';
import renderWithRouterAndRedux from './helper';
import { Login } from '../Components/pages';
import { fireEvent } from '@testing-library/dom';
import App from '../App';

describe('1 - Tela de login', () => {
  describe('Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login', () => {
    it('O input de email deve possuir o atributo data-testid="email-input"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      expect(emailInput).toBeInTheDocument();
    });

    it('O input de senha deve possuir o atributo data-testid="password-input"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const passwordInput = getByTestId('password-input');
      expect(passwordInput).toBeInTheDocument();
    });
    
    it('O botão de login deve possuir o atributo data-testid="login-submit-btn"', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const loginBtn = getByTestId('login-submit-btn');
      expect(loginBtn).toBeInTheDocument();
    });
  });

  describe('Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email', () => {
    it('É possível escrever o email', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      expect(emailInput.value).toBe('pessoa@gmail.com');
    });
  })

  describe('Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha', () => {
    it('É possível escrever a senha', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const passwordInput = getByTestId('password-input');
      fireEvent.change(passwordInput, { target: { value: '123456' } });
      expect(passwordInput.value).toBe('123456');
    });
  })

  describe('Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos', () => {
    it('- O botão deve estar desativado se o email for inválido', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      fireEvent.change(emailInput, { target: { value: 'pessoa' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(true);
    });

    it('- O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '123456' } });
      expect(loginBtn.disabled).toBe(true);
    });

    it('- O botão deve estar ativado se o email e a senha forem válidos', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
    });
  })

  describe('Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken', () => {
    it('- Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage', () => {
      const { getByTestId, history } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      expect(emailInput).toBeInTheDocument();
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
      fireEvent.click(loginBtn);
      expect(localStorage.getItem('mealsToken')).toBeTruthy();
      expect(localStorage.getItem('cocktailsToken')).toBeTruthy();
    });
  })

  describe('Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão', () => {
    it('Após a submissão, o e-mail de pessoa usuária deve ser salvo em localStorage na chave user no formato { email: email-da-pessoa }', () => {
      const { getByTestId } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      expect(emailInput).toBeInTheDocument();
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
      const userLocalStorage = JSON.parse(localStorage.getItem('user'));
      expect(userLocalStorage.email).toBe('pessoa@gmail.com');
    });
  })

  describe('Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login', () => {
    it('- A rota muda para a tela principal de receitas de comidas', () => {
      const { getByTestId, history } = renderWithRouterAndRedux(<Login />);
      const emailInput = getByTestId('email-input');
      const passwordInput = getByTestId('password-input');
      const loginBtn = getByTestId('login-submit-btn');
      expect(emailInput).toBeInTheDocument();
      fireEvent.change(emailInput, { target: { value: 'pessoa@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '1234567' } });
      expect(loginBtn.disabled).toBe(false);
      fireEvent.click(loginBtn);
      expect(history.location.pathname).toBe('/comidas');
    });
  })
});