import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserPageStyled from './UserPage.styled';
import { fetchUserAsync, selectUser } from '../../redux/user/userSlice';

const HomePage = () => {
  const user = useSelector(selectUser);
  console.log('user', user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, []);

  return <UserPageStyled data-cy="user">
    <h1>Hi {user.name}</h1>
  </UserPageStyled>;
};

export default HomePage;
