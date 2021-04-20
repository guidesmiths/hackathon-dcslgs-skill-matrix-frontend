/* eslint-disable import/prefer-default-export */
import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import HomePageStyled from './HomePage.styled';

export const HomePage = () => (
  <HomePageStyled
    data-cy="hola"
  >
    <SearchBar />
  </HomePageStyled>
);
