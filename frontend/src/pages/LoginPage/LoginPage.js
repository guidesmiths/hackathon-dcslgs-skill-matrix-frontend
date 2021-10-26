import React from 'react';
import Logo from '../../Assets/Images/logo.png';
import AnimatedWaves from './AnimatedWaves/AnimatedWaves';
import LoginButton from './Login/Components/LoginButton';
import { LoginStyled, LoginTitle, StyledText } from './LoginPage.styled';

const LoginPage = () => (
  <>
    <LoginStyled data-cy="login-page">
      <img src={Logo} />
      <LoginTitle>Skill Matrix</LoginTitle>
      <LoginButton/>
      <StyledText>
         If you are having trouble logging in to your account, please contact infrastructure.
      </StyledText>
    </LoginStyled>
    <AnimatedWaves/>
  </>
);

export default LoginPage;
