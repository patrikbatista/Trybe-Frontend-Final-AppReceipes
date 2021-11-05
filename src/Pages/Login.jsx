import React, { useState } from 'react';
import { Input, Button } from '../Components/atoms';
import { emailVerification, passwordVerification } from '../services/auth';
import { createTokens, saveUser } from '../services/localStorage';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createTokens();
    saveUser(email);
  };

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
