import React from 'react';
import PropTypes from 'prop-types';
import StyledName from './Label.styled';

const Label = ({ children, top, left, weight, type, errorInput }) => (
  <StyledName errorInput={errorInput} left={left} top={top} type={type} weight={weight}>
    {children}
  </StyledName>
);

Label.propTypes = {
  children: PropTypes.string.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  errorInput: PropTypes.bool,
  type: PropTypes.string,
  weight: PropTypes.number,
};

Label.defaultProps = {
  errorInput: '',
  type: '',
  weight: 500,
};

export default Label;
