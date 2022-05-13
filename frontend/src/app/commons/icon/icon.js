import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material-ui/core/Icon';
import { IconStyled } from './Icon.styled';

export const Icon = ({ icon, className, border, height, width, show, onClick, onMouseEnter, onMouseLeave }) => (
  <IconStyled
    border={border}
    className={className}
    data-cy={`icon-${icon}`}
    height={height}
    show={show}
    width={width}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <MaterialIcon>{icon}</MaterialIcon>
  </IconStyled>
);

Icon.defaultProps = {
  border: '',
  className: '',
  height: null,
  icon: '',
  onClick: () => { /* empty function */ },
  onMouseEnter: () => { /* empty function */ },
  onMouseLeave: () => { /* empty function */ },
  show: true,
  width: 25,
};

Icon.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string,
  show: PropTypes.bool,
  width: PropTypes.number,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
