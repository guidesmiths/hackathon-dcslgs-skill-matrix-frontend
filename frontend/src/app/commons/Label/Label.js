import React from 'react';
import PropTypes from 'prop-types';
import StyledName from './Label.styled';

export const Label = ({ children, top, left, weight, type }) => (
  <StyledName left={left} top={top} type={type} weight={weight}>
    {children}
  </StyledName>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  type: PropTypes.string,
  weight: PropTypes.number,
};

Label.defaultProps = {
  type: '',
  weight: 500,
};
