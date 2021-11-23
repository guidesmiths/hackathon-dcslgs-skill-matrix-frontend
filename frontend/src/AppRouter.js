import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import NavBar from './app/commons/NavBar/NavBar';
import { HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE, PAGE404_ROUTE, ADMIN_ROUTE } from './constants/routes';
import HomePage from './pages/HomePage/HomePage';
import HomeUserPage from './pages/HomeUserPage/HomeUserPage';
import AdminPage from './pages/AdminPage/AdminPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import Page404 from './pages/Page404/Page404';
import PrivateRoute from './pages/Privileges/PrivateRoute';
import NotLoggedRoute from './pages/Privileges/NotLoggedRoute';

const AppRouter = () => {
  const location = useLocation().pathname;
  const show = location !== '/login' && location !== '/404';
  // TO DO define home path between user and admin
  return (
    <>
      {show && <NavBar /> }
      <Switch>
        <NotLoggedRoute exact component={LoginPage} path={LOGIN_ROUTE} />
        <Route exact component={Page404} path={PAGE404_ROUTE} />
        <PrivateRoute exact component={UserPage} path={USER_ROUTE} />
        <PrivateRoute exact component={HomePage} path={HOME_ROUTE} />
        <PrivateRoute exact component={HomeUserPage} path="/home" />
        <PrivateRoute exact component={AdminPage} path={ADMIN_ROUTE} />
        {/* Default path for non existing pages */}
        <Route component={() => <Redirect to={PAGE404_ROUTE} />} />
      </Switch>
    </>
  );
};

export default AppRouter;
