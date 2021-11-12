/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { range } from 'ramda';
import Box from '@material-ui/core/Box';
import { SkeletonWrapper as Skeleton } from './SkeletonWrapper.styled';

const SkeletonWrapper = ({ rows }) => (
  <Box width="100%">
    {range(0, rows).map(row => (
      <Skeleton key={row} animation="wave" />
    ))}
  </Box>
);

SkeletonWrapper.propTypes = {
  rows: PropTypes.number,
};

SkeletonWrapper.defaultProps = {
  rows: 15,
};

export default SkeletonWrapper;
