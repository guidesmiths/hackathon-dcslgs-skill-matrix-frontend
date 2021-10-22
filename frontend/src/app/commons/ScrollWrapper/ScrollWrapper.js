import React from 'react';
import PropTypes from 'prop-types';
import { UserRowWrapper } from './ScrollWrapper.styled';

const ScrollWrapper = ({ children, height }) => (
  <UserRowWrapper height = {height}>
    {children}
  </UserRowWrapper>
);
export default ScrollWrapper;

ScrollWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  height: PropTypes.number,
};
ScrollWrapper.defaultProps = {
  height: 70,
};
