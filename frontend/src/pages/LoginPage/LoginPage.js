import React from 'react';
import Logo from '../../Assets/Images/logo.png';
import Outlook from '../../Assets/Icons/Outlook.svg';
import AnimatedWaves from './AnimatedWaves/AnimatedWaves';
import { LoginStyled, LoginTitle, LoginButton, StyledIcon, StyledText } from './LoginPage.styled';

const LoginPage = () => (
  <>
    <LoginStyled data-cy="login-page">
      <img src={Logo} />
      <LoginTitle>Skill Matrix</LoginTitle>
      <LoginButton data-cy="login-page-button">
        <StyledIcon src={Outlook}/>
          Sign In with Outlook
      </LoginButton>
      <StyledText>
         If you are having trouble logging in to your account, please contact infrastructure.
      </StyledText>
    </LoginStyled>
    <AnimatedWaves/>
  </>
);

export default LoginPage;
