import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserPageStyled from './UserPage.styled';
import { fetchUserAsync, selectUser } from '../../redux/user/userSlice';

const HomePage = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
    console.log('user', user);
  }, []);

  return <UserPageStyled data-cy="user">
    <h1>Hi {user[0]?.name}</h1>
  </UserPageStyled>;
};

export default HomePage;
