/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import HomePageStyled from './HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkillsAsync());
  }, []);

  return (
    <HomePageStyled
      data-cy="hola"
    >
      <SearchBar/>
    </HomePageStyled>
  );
};
