import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const RecipeButtonFinished = ({ disabled }) => {
  const [redirect, setRedirect] = useState(false);

  if (redirect) return <Redirect to="/receitas-feitas" />;

  return (
    <button
      style={ {
        with: '100%',
        position: 'fixed',
        bottom: '0',
      } }
      disabled={ disabled }
      type="button"
      data-testid="finish-recipe-btn"
      onClick={ () => setRedirect(true) }
    >
      Finalizar Receita
    </button>
  );
};

RecipeButtonFinished.propTypes = {
  disabled: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  disabled: state.button.disabled,
});

export default connect(mapStateToProps)(RecipeButtonFinished);
