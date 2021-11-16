import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import { LOGIN_ROUTE } from '../../constants/routes';
import { selectUserData } from '../../redux/user/userSlice';

function redirect() {
  return <Redirect exact component={LoginPage} to = {LOGIN_ROUTE} />;
}

const PrivateRoute = ({ component: Component, path }) => {
  const userData = useSelector(selectUserData);

  return (
    <Route path={path}
      render = {props => (userData ? <Component { ...props }/>
        : redirect()) }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;
