/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import { HomePageStyled, StyledBackground } from './HomePage.styled';
import { resetAnswers } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(resetAnswers());
    dispatch(resetFilters());
  }, []);

  return (
    <HomePageStyled>
      <StyledBackground>
        <SearchBar />
      </StyledBackground>
      <AnswersList />
    </HomePageStyled>
  );
};

export default HomePage;
