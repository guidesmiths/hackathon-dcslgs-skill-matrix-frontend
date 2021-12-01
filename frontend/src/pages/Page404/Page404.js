import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledPage404, StyledTitleWrapper, StyledTitle, StyledH3, StyledP, StyledButton } from './Page404.styled';

const Page404 = () => {
  const history = useHistory();
  const clichHandler = () => {
    history.push('/');
  };

  return (
    <StyledPage404>
      <StyledTitleWrapper data-cy="title-wrapper">
        <StyledTitle data-cy="title-404">404</StyledTitle>
      </StyledTitleWrapper>
      <StyledH3>Page does not exist</StyledH3>
      <StyledP>
          Maybe you got a broken link, or maybe you made a misprint in the address bar. Try to start all over again in the main sections:
      </StyledP>
      <StyledButton dataCy={'redirect-home'} onClick={clichHandler}>Home</StyledButton>
    </StyledPage404>
  );
};

export default Page404;
