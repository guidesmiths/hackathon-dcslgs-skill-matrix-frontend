import React from 'react';
import { RowWrapper, Placeholder, ImageHolder, InputHolder } from './LoadingUserRow.styled';

const LoadingUserRow = () => {
  const arrowButtonIcon = 'keyboard_arrow_down';

  return (
    <RowWrapper>
      <Placeholder>
        <ImageHolder/>
        <InputHolder/>
        <InputHolder/>
      </Placeholder>
      <Placeholder>
        <ImageHolder/>
        <InputHolder/>
      </Placeholder>
      <span className="material-icons">
        {arrowButtonIcon}
      </span>
    </RowWrapper>
  );
};

export default LoadingUserRow;
