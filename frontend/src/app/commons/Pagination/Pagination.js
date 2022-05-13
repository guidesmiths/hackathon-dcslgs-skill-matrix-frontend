import React from 'react';
import PropTypes from 'prop-types';
import PaginationMaterial from '@material-ui/lab/Pagination';
import { makeStyles, createStyles } from '@material-ui/core';
import PaginationStyled from './Pagination.styled';

const useStyles = makeStyles(() => createStyles({
  root: {
    '& .Mui-selected': {
      backgroundColor: '#BF3088',
      color: 'white',
      fontFamily: '\'Poppins\', sans-serif',
    },
  },
}));

export const Pagination = ({ currentPage, numberOfPages, onChange, shape, size }) => {
  const classes = useStyles();
  return (<PaginationStyled>
    <PaginationMaterial
      className={classes.root}
      count={numberOfPages}
      data-cy="pagination"
      page={currentPage}
      shape={shape}
      size={size}
      onChange={onChange}
    />
  </PaginationStyled>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  shape: PropTypes.string,
  size: PropTypes.string,
};

Pagination.defaultProps = {
  shape: 'round',
  size: 'medium',
};
