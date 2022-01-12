/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTour } from '@reactour/tour';
import { SearchBar } from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import { HomePageStyled, StyledBackground } from './HomePage.styled';
import { resetAnswers } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';
import TextTour from '../../app/commons/Tour/TextTour';

const HomePage = () => {
  const dispatch = useDispatch();
  const { setSteps } = useTour();

  useEffect(() => () => {
    dispatch(resetAnswers());
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    setSteps([
      {
        selector: '[data-cy="user-input"]',
        content: <TextTour>You can look for colleagues through their names&apos;</TextTour>,
      },
      {
        selector: '[data-cy="search-bar-skill-0"]',
        content: <TextTour>Or just type a skill and the minimum level you wish to find</TextTour>,
      },
      {
        selector: '[data-cy="answer-list-element-0"]',
        content: <TextTour>Example of answer</TextTour>,
      },
      {
        selector: '[data-cy="user-seniority-0"]',
        content: <TextTour>Seniority of the user</TextTour>,
      },
      {
        selector: '[data-cy="switch-admin-0"]',
        content: <TextTour>Here you can change the role of a determined user</TextTour>,
      },
    ]);
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
