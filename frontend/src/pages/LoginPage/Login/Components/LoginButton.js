/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { useDispatch } from 'react-redux';
import Outlook from '../../../../Assets/Icons/Outlook.svg';
import { loginRequest } from '../../../../configuration/authConfig';
import { LoginButtonStyled, StyledIcon } from '../../LoginPage.styled';
import { insertUserAsync } from '../../../../redux/user/userSlice';

const LoginButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { instance } = useMsal();

  // This function shows official Microsoft login Pop up
  async function handleLoginPopup() {
    await instance.loginPopup(loginRequest).then(
      result => {
        dispatch(insertUserAsync(result.accessToken))
          .then(response => {
            const { payload: { country } } = response;
            if (country != null) {
              history.push('/profile');
            } else {
              history.push('/country');
            }
          })
          .catch(err => console.error(err));
      },
    ).catch(error => {
      console.error(error);
    });
  }

  return (
    <LoginButtonStyled data-cy="login-page-button" onClick={handleLoginPopup}>
      <StyledIcon src={Outlook} />
      Sign In with Outlook
    </LoginButtonStyled>

  );
};

export default LoginButton;
