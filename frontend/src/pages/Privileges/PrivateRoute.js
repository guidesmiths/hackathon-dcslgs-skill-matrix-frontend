import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import { LOGIN_ROUTE } from '../../constants/routes';

function redirect() {
  return <Redirect exact component={LoginPage} to = {LOGIN_ROUTE} />;
}

const PrivateRoute = ({ component: Component, path }) => {
  const isLoggedIn = localStorage.getItem('token') !== null;

  return (
    <Route path={path}
      render = {props => (isLoggedIn ? <Component { ...props }/>
        : redirect()) }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
