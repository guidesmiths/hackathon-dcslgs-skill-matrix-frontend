import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './app/commons/NavBar/NavBar';
import { HOME_ROUTE } from './constants/routes';
import HomePage from './pages/HomePage/HomePage';

const AppRouter = () => (
  <>
    <NavBar/>
    <Switch>
      <Route
        exact
        component={HomePage}
        path={HOME_ROUTE}
      />
      {/* Default path for non existing pages */}
      <Route
        component={() => <Redirect to={HOME_ROUTE} />}
      />
    </Switch>
  </>
);

export default AppRouter;
