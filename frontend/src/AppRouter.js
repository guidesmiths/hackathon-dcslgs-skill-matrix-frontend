import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import NavBar from './app/commons/NavBar/NavBar';
import { HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE, ADMIN_ROUTE, PAGE404_ROUTE } from './constants/routes';
import HomePage from './pages/HomePage/HomePage';
import UserPage from './pages/UserPage/UserPage';
import AdminPage from './pages/AdminPage/AdminPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Page404 from './pages/Page404/Page404';

const AppRouter = () => {
  const location = useLocation().pathname;
  const show = location !== '/login' && location !== '/404';

  return (
    <>
      {show && <NavBar /> }
      <Switch>
        <Route exact component={HomePage} path={HOME_ROUTE} />
        <Route exact component={LoginPage} path={LOGIN_ROUTE} />
        <Route exact component={UserPage} path={USER_ROUTE} />
        <Route exact component={Page404} path={PAGE404_ROUTE} />
        <Route
          exact
          component={AdminPage}
          path={ADMIN_ROUTE}
        />
        {/* Default path for non existing pages */}
        <Route component={() => <Redirect to={HOME_ROUTE} />} />
      </Switch>
    </>
  );
};

export default AppRouter;
