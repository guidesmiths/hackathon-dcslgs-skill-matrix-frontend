import React from 'react';
import { RowWrapper, Placeholder, ImageHolder, InputHolder } from './LoadingUserRow.styled';

const LoadingUserRowUser = () => (
  <RowWrapper>
    <Placeholder>
      <ImageHolder/>
      <InputHolder/>
    </Placeholder>
    <Placeholder>
      <ImageHolder/>
      <InputHolder/>
    </Placeholder>
    <Placeholder>
      <ImageHolder/>
      <InputHolder/>
    </Placeholder>
  </RowWrapper>
);

export default LoadingUserRowUser;
