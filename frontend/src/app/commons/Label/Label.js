import React from 'react';
import PropTypes from 'prop-types';
import { Label as StyledLabel } from './Label.styled';

export const Label = ({ children, top, left, weight, type }) => (
  <StyledLabel left={left} top={top} type={type} weight={weight}>
    {children}
  </StyledLabel>
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
