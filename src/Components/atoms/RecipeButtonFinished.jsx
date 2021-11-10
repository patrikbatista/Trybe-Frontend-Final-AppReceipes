import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

const RecipeButtonFinished = ({ disabled }) => {
  const handleClick = () => {
    console.log('clicked');
  };

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
      onClick={ handleClick }
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
