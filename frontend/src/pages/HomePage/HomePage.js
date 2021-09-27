import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import { HomePageStyled, StyledBackground } from './HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import { fetchAnswersAsync } from '../../redux/answers/answersSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkillsAsync());
    dispatch(fetchAnswersAsync());
  }, []);

  return (
    <HomePageStyled
      data-cy="hola"
    >
      <StyledBackground/>
      <SearchBar/>
      <AnswersList />
    </HomePageStyled>
  );
};

export default HomePage;
