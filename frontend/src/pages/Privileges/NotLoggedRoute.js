import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';
import { HomePage } from '../HomePage';
import LoginPage from '../LoginPage/LoginPage';

const redirectToLogin = () => <LoginPage />;

const NotLoggedRoute = () => {
  const notLoggedIn = localStorage.getItem('token') === null;

  return (
    <Route
      render = { () => (notLoggedIn ? redirectToLogin() : <Redirect exact component={HomePage} to = {HOME_ROUTE} />
      )}
    />
  );
};

export default NotLoggedRoute;
