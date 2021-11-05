import React from 'react';
import { Input, Button } from '../Components/atoms';

const Login = () => (
  <main>
    <Input placeholder="Email" name="email" testId="email-input" />
    <Input placeholder="Password" name="password" testId="password-input" />
    <Button testId="login-submit-btn">Login</Button>
  </main>
);

export default Login;
