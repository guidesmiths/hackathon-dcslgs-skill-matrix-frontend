import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './app/commons/NavBar/NavBar';
import { fetchUserInfoAsync, selectUserData } from './redux/user/userSlice';
import { HOME_ROUTE, LOGIN_ROUTE, USER_ROUTE, PAGE404_ROUTE, DIRECTORY_ROUTE, COUNTRY_ROUTE } from './constants/routes';
import HomePage from './pages/HomePage/HomePage';
import HomeUserPage from './pages/HomeUserPage/HomeUserPage';
import AdminPage from './pages/AdminPage/AdminPage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserPage from './pages/UserPage/UserPage';
import Page404 from './pages/Page404/Page404';
import PrivateRoute from './pages/Privileges/PrivateRoute';
import NotLoggedRoute from './pages/Privileges/NotLoggedRoute';
import SelectCountry from './pages/SelectCountry/SelectCountry';

const AppRouter = () => {
  const location = useLocation().pathname;
  const show = location !== '/login'; // && location !== '/404';
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const history = useHistory();
  // For production:
  // const [userView, setUserView] = useState(userData.role === 'user');
  const [userView, setUserView] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleChangeRoleView = () => {
    setUserView(!userView);
  };
  useEffect(() => {
    dispatch(fetchUserInfoAsync(history));
    if (isSubmited) {
      history.push('/profile');
    }
  }, [isSubmited]);

  return (
    <>
      {show && userData?.email && <NavBar handleChangeRoleView={handleChangeRoleView} userData={userData} userView={userView} /> }
      <Switch>
        <NotLoggedRoute exact component={LoginPage} path={LOGIN_ROUTE} />
        <PrivateRoute component={() => <SelectCountry setIsSubmited={setIsSubmited} userId={userData.user_id} userName={userData.name} />} path={COUNTRY_ROUTE} />
        <Route exact component={Page404} path={PAGE404_ROUTE} />
        {!userView && <PrivateRoute exact component={UserPage} path={USER_ROUTE} />}
        <PrivateRoute exact component={userView ? UserPage : AdminPage} path={[HOME_ROUTE, '/ecosystem/:id']} />
        <PrivateRoute exact component={userView ? HomeUserPage : HomePage} path={DIRECTORY_ROUTE} />
        {/* Default path for non existing pages */}
        <Route component={Page404} path={PAGE404_ROUTE}/>
        <Route component={() => <Redirect to={PAGE404_ROUTE} />} />
      </Switch>
    </>
  );
};

export default AppRouter;
