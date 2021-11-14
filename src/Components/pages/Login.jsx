import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getRecipes, getCategories } from '../../redux/actions';
import { Input, Button } from '../atoms';

import { emailVerification, passwordVerification } from '../../utils/verify';
import { createTokens, saveUser } from '../../utils/localStorage';

const Login = ({ history, fillListOfRecipes, fillListOfCategories }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createTokens();
    saveUser(email);
    fillListOfRecipes('meal');
    fillListOfCategories('meal');
    history.push('/comidas');
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

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  fillListOfRecipes: PropTypes.func.isRequired,
  fillListOfCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fillListOfRecipes: (category) => dispatch(getRecipes(category)),
  fillListOfCategories: (category) => dispatch(getCategories(category)),
});

export default connect(null, mapDispatchToProps)(Login);
