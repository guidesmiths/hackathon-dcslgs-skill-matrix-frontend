import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from '@material-ui/core/Icon';
import IconStyled from './Icon.styled';

const Icon = ({ icon, className, border, height, width, marginRight, show, position, right, bottom, onClick }) => (
  (
    <IconStyled
      border={border}
      bottom={bottom}
      className={className}
      data-cy={`icon-${icon}`}
      height={height}
      marginRight={marginRight}
      position={position}
      right={right}
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
  bottom: 0,
  className: '',
  height: 50,
  icon: '',
  marginRight: 0,
  onClick: () => {},
  position: 'static',
  right: 0,
  show: true,
  width: 50,
};

Icon.propTypes = {
  border: PropTypes.string,
  bottom: PropTypes.number,
  className: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.string,
  marginRight: PropTypes.number,
  show: PropTypes.bool,
  position: PropTypes.string,
  right: PropTypes.number,
  width: PropTypes.number,
  onClick: PropTypes.func,
};

export default Icon;
