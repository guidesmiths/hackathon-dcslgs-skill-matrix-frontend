import React from 'react';
import PropTypes from 'prop-types';
import { UserRowWrapper } from './ScrollWrapper.styled';

const ScrollWrapper = ({ children, height }) => (
  <UserRowWrapper data-cy="skills-container" height={height}>
    {children}
  </UserRowWrapper>
);

ScrollWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  height: PropTypes.number,
};

ScrollWrapper.defaultProps = {
  height: 70,
};

export default ScrollWrapper;
