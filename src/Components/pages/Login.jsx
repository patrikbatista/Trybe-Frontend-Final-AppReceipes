import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { Input, Button } from '../atoms';
import { emailVerification, passwordVerification } from '../../utils/verify';
import { createTokens, saveUser } from '../../utils/localStorage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTokens();
    saveUser(email);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/comidas" />;
  }

  return (
    <main>
      <form onSubmit={ handleSubmit }>
        <Input
          placeholder="Email"
          name="email"
          type="text"
          testId="email-input"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          testId="password-input"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <Button
          testId="login-submit-btn"
          disabled={ !(emailVerification(email) && passwordVerification(password)) }
        >
          Login
        </Button>
      </form>
    </main>
  );
};

export default Login;
