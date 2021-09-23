import React from 'react';
import PropTypes from 'prop-types';
import StyledName from './Label.styled';

const Label = ({ children, top, left, weight, type }) => (
  <StyledName top={ top } left={ left } weight={weight} type={type}>
    {children}
  </StyledName>
);
export default Label;

Label.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

Label.defaultProps = {
  type: '',
};
