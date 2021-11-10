import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalStyled,
  OverlayStyled,
} from './Modal.styled';

const Modal = ({ show, onCloseClick, children, className }) => (
  <>
    <ModalStyled className={className} data-cy="modal" show={show}>
      {children}
    </ModalStyled>
    <OverlayStyled data-cy="modal-overlay" show={show} onClick={onCloseClick}/>
  </>
);

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func,
};

Modal.defaultProps = {
  onCloseClick: () => { /* empty function */ },
};

export default Modal;
