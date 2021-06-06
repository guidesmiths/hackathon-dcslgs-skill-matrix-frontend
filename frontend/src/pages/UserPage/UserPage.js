import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserPageStyled from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, []);

  return <UserPageStyled data-cy="user"></UserPageStyled>;
};

export default HomePage;
