/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import Input from '../../app/commons/Input/Input';
import Select from '../../app/commons/Select/Select';
import HomePageStyled from './HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import NavBar from '../../app/commons/NavBar/NavBar';

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkillsAsync());
  }, []);

  return (
    <HomePageStyled
      data-cy="hola"
    >
      <NavBar/>
      <SearchBar />
      <div>
        <Input/>
        <Select/>
      </div>
    </HomePageStyled>
  );
};
