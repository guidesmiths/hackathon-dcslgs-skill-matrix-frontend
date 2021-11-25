import React, { useState } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './app/commons/NavBar/NavBar';
import { selectUserData } from './redux/user/userSlice';
import { HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE, PAGE404_ROUTE, DIRECTORY_ROUTE } from './constants/routes';
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
  const show = location !== '/login'; // && location !== '/404';
  const userData = useSelector(selectUserData);

  // For production:
  // const [userView, setUserView] = useState(userData.role === 'user');
  const [userView, setUserView] = useState(false);

  const handleChangeRoleView = () => {
    setUserView(!userView);
  };

  return (
    <>
      {show && userData?.email && <NavBar handleChangeRoleView={handleChangeRoleView} userData={userData} userView={userView} /> }
      <Switch>
        <NotLoggedRoute exact component={LoginPage} path={LOGIN_ROUTE} />
        <Route exact component={Page404} path={PAGE404_ROUTE} />
        {!userView && <PrivateRoute exact component={UserPage} path={USER_ROUTE} />}
        <PrivateRoute exact component={userView ? UserPage : AdminPage} path={HOME_ROUTE} />
        <PrivateRoute exact component={userView ? HomeUserPage : HomePage} path={DIRECTORY_ROUTE} />
        {/* Default path for non existing pages */}
        <Route component={() => <Redirect to={PAGE404_ROUTE} />} />
      </Switch>
    </>
  );
};

export default AppRouter;
