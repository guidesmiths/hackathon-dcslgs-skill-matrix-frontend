/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import HomePageStyled from './HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import { fetchAnswersAsync } from '../../redux/answers/answersSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkillsAsync());
    dispatch(fetchAnswersAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomePageStyled
      data-cy="hola"
    >
      <SearchBar/>
      <AnswersList />
    </HomePageStyled>
  );
};

export default HomePage;
