/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import { HomePageStyled, StyledBackground } from './HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import { fetchAnswersAsync, resetAnswers } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(fetchSkillsAsync());
    dispatch(fetchAnswersAsync());
    return () => {
      dispatch(resetAnswers());
    };
  }, [dispatch]);

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
