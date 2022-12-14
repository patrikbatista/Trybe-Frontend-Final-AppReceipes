import React from 'react';
import shareIcon from '../../images/shareIcon.svg';

const ShareButton = () => (
  <input
    type="image"
    src={ shareIcon }
    alt="share"
    data-testid="share-btn"
    onClick={ () => {
      window.navigator.clipboard.writeText(window.location.href.toString()
        .split('/in-progress')[0]);
      const alerta = document.createElement('p');
      alerta.innerHTML = 'Link copiado!';
      alerta.classList.add('alerta');
      alerta.style.display = 'none';
      document.body.appendChild(alerta);
    } }
  />
);

export default ShareButton;
