/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import Input from '../../app/commons/Input/Input';
import Select from '../../app/commons/Select/Select';
import HomePageStyled from './HomePage.styled';

export const HomePage = () => (
  <HomePageStyled
    data-cy="hola"
  >
    <SearchBar />
    <div>
      <Input/>
      <Select/>
    </div>
  </HomePageStyled>
);
