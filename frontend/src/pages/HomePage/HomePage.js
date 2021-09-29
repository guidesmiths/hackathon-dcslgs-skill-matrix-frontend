import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchBar } from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import HomePageStyled from './HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import { fetchAnswersAsync, resetAnswers } from '../../redux/answers/answersSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSkillsAsync());
    dispatch(fetchAnswersAsync());
    return () => {
      dispatch(resetAnswers());
    };
  }, [dispatch]);

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
