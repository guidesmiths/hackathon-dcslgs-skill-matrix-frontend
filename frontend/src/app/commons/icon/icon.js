import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material-ui/core/Icon';
import IconStyled from './Icon.styled';

const Icon = ({ icon, className, border, height, width, show, onClick }) => (
  (
    <IconStyled
      border={border}
      className={className}
      data-cy={`icon-${icon}`}
      height={height}
      show={show}
      width={width}
      onClick={onClick}
    >
      <MaterialIcon>{icon}</MaterialIcon>
    </IconStyled>
  )
);

Icon.defaultProps = {
  border: '',
  className: '',
  height: 50,
  icon: '',
  onClick: () => {},
  show: true,
  width: 'auto',
};

Icon.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string,
  show: PropTypes.bool,
  width: PropTypes.number,
  onClick: PropTypes.func,
};

export default Icon;
