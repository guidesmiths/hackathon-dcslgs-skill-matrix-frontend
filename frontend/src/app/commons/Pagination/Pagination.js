import React from 'react';
import PropTypes from 'prop-types';
import PaginationMaterial from '@material-ui/lab/Pagination';
import PaginationStyled from './Pagination.styled';

const Pagination = ({ currentPage, numberOfPages, onChange, shape, size }) => (
  <PaginationStyled>
    <PaginationMaterial
      count={numberOfPages}
      data-cy="pagination"
      page={currentPage}
      shape={shape}
      size={size}
      onChange={onChange}
    />
  </PaginationStyled>
);

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

export default Pagination;
