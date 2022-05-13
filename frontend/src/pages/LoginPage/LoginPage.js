import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../Assets/Images/logo.png';
import { selectUserInsertLoading } from '../../redux/user/userSlice';

import { Spinner } from '../../app/commons/Spinner';
import { LoginButton } from './LoginButton';
import { AnimatedWaves } from './AnimatedWaves';

import { LoginStyled, LoginTitle, StyledText } from './LoginPage.styled';

export const LoginPage = () => {
  const isLoading = useSelector(selectUserInsertLoading);

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <>
      <LoginStyled data-cy="login-page">
        <img src={Logo} />
        <LoginTitle>Skill Matrix</LoginTitle>
        {isLoading === 'idle' ? <LoginButton/> : <Spinner />}
        <StyledText>
         If you are having trouble logging in to your account, please contact infrastructure.
        </StyledText>
      </LoginStyled>
      <AnimatedWaves/>
    </>
  );
};
