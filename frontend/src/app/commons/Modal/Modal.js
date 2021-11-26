import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalStyled,
  OverlayStyled,
} from './Modal.styled';

const Modal = ({ onCloseClick, children, className }) => (
  <>
    <ModalStyled className={className} data-cy="modal">
      {children}
    </ModalStyled>
    <OverlayStyled data-cy="modal-overlay" onClick={onCloseClick}/>
  </>
);

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  onCloseClick: PropTypes.func,
};

Modal.defaultProps = {
  className: '',
  onCloseClick: () => { /* empty function */ },
};

export default Modal;
