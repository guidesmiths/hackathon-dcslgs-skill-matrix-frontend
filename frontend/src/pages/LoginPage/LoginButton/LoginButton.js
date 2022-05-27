/* eslint-disable no-console */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';
import { useDispatch } from 'react-redux';
import Outlook from '../../../Assets/Icons/Outlook.svg';
import { loginRequest } from '../../../configuration/authConfig';
import { LoginButtonStyled, StyledIcon } from '../LoginPage.styled';
import { insertUserAsync } from '../../../redux/user/userSlice';

export const LoginButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { instance } = useMsal();

  // This function shows official Microsoft login Pop up
  const handleLoginPopup = async () => {
    try {
      const result = await instance.loginPopup(loginRequest);
      const response = await dispatch(insertUserAsync(result.accessToken));
      const { payload } = response;

      if (payload) {
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!payload?.country) {
          history.push('/profile');
        } else {
          history.push('/country');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LoginButtonStyled data-cy="login-page-button" onClick={handleLoginPopup}>
      <StyledIcon src={Outlook} />
      Sign In with Outlook
    </LoginButtonStyled>

  );
};
