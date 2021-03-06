/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavBar } from './app/commons/NavBar';
import { fetchUserInfoAsync, selectUserData } from './redux/user/userSlice';
import { HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE, ADMIN_ROUTE, PAGE404_ROUTE, DIRECTORY_ROUTE, COUNTRY_ROUTE } from './constants/routes';
import { HomePage } from './pages/HomePage';
import { HomeUserPage } from './pages/HomeUserPage';
import { AdminPage } from './pages/AdminPage';
import { LoginPage } from './pages/LoginPage';
import { UserPage } from './pages/UserPage';
import { Page404 } from './pages/Page404';
import { PrivateRoute } from './pages/PrivateRoute';
import { NotLoggedRoute } from './pages/NotLoggedRoute';
import { SelectCountry } from './pages/SelectCountry';
import getEnvConfig from './configuration/environment';

const AppRouter = ({ environment }) => {
  const location = useLocation().pathname;
  const show = location !== '/login'; // && location !== '/404';
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userView, setUserView] = useState(true);

  const handleChangeRoleView = () => {
    setUserView(!userView);
  };

  useEffect(() => {
    if (!userData.id) {
      dispatch(fetchUserInfoAsync(history));
    }
  }, [userData.country]);

  useEffect(() => {
    if (environment === 'production' && !userData.role === 'admin') {
      setUserView(true);
    }
  }, [userData]);

  return (
    <>
      {show && <NavBar handleChangeRoleView={handleChangeRoleView} userData={userData} userView={userView} /> }
      <Switch>
        <NotLoggedRoute exact component={LoginPage} path={LOGIN_ROUTE} />
        <PrivateRoute exact component={SelectCountry} path={COUNTRY_ROUTE} />
        <PrivateRoute exact component={UserPage} path={[HOME_ROUTE, USER_ROUTE, `${USER_ROUTE}/ecosystem/`, `${USER_ROUTE}/ecosystem/:id`]} />
        {!userView && <PrivateRoute exact component={AdminPage} path={[`${ADMIN_ROUTE}`, `${ADMIN_ROUTE}/:id`]} />}
        <PrivateRoute exact component={userView ? HomeUserPage : HomePage} path={DIRECTORY_ROUTE} />
        <Route exact component={Page404}/>
        {/* Default path for non existing pages */}
        <Route component={() => <Redirect to={PAGE404_ROUTE} />} />
      </Switch>
    </>
  );
};

AppRouter.defaultProps = {
  environment: getEnvConfig().environment,
};

AppRouter.propTypes = {
  environment: PropTypes.string,
};

export default AppRouter;
