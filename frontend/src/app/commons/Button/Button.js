import React from 'react';
import PropTypes from 'prop-types';

import ButtonStyled from './Button.styled';

const Button = ({ className, children, onClick, dataCy }) => (
  <ButtonStyled className={className} data-cy={dataCy} onClick={onClick}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  dataCy: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  dataCy: 'button',
  onClick: () => { /* empty function */ },
};

export default Button;
