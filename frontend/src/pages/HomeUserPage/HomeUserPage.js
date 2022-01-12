/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTour } from '@reactour/tour';
import { SearchUserBar } from './SearchUserBar/SearchUserBar';
import AnswersUserList from './AnswersUserList/AnswersUserList';
import { HomePageStyled, StyledBackground } from '../HomePage/HomePage.styled';
import { resetAnswers } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';
import TextTour from '../../app/commons/Tour/TextTour';

const HomeUserPage = () => {
  const dispatch = useDispatch();
  const { setSteps } = useTour();

  useEffect(() => () => {
    dispatch(resetAnswers());
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    setSteps([
      {
        selector: '[data-cy="search-bar"]',
        content: <TextTour>You can look for colleagues with upper skills than you in a determined skill</TextTour>,
      },
      {
        selector: '[data-cy="answer-list-element-0"]',
        content: <TextTour>Here there is an example of the results of the search</TextTour>,
      },
    ]);
  }, []);

  return (
    <HomePageStyled>
      <StyledBackground>
        <SearchUserBar/>
      </StyledBackground>
      <AnswersUserList/>
    </HomePageStyled>
  );
};

export default HomeUserPage;
