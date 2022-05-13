import React from 'react';
import PropTypes from 'prop-types';
import { RowWrapper, Placeholder, ImageHolder, InputHolder } from './LoadingUserRow.styled';

export const LoadingUserRow = ({ user }) => {
  const arrowButtonIcon = 'keyboard_arrow_down';

  return (
    <RowWrapper>
      <Placeholder>
        <ImageHolder/>
        <InputHolder/>
        <InputHolder/>
      </Placeholder>
      <div/>
      <Placeholder>
        <ImageHolder/>
        <InputHolder/>
      </Placeholder>
      {!user
      && <span className="material-icons">
        {arrowButtonIcon}
      </span>
      }
    </RowWrapper>
  );
};

LoadingUserRow.propTypes = {
  user: PropTypes.bool,
};

LoadingUserRow.defaultProps = {
  user: false,
};
