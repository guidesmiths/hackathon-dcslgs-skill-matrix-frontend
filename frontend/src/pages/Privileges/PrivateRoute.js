import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import { LOGIN_ROUTE } from '../../constants/routes';
import { selectUserData } from '../../redux/user/userSlice';

const PrivateRoute = ({ component: Component, path }) => {
  const userData = useSelector(selectUserData);

  if (!userData) {
    return <Redirect exact component={LoginPage} to={LOGIN_ROUTE} />;
  }

  return (
    <Route path={path} render={props => <Component {...props} />} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default PrivateRoute;
