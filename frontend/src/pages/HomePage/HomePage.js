/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTour } from '@reactour/tour';
import SearchBar from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import { HomePageStyled, StyledBackground } from './HomePage.styled';
import { resetAnswers, selectNumberOfPages } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';
import TextTour from '../../app/commons/Tour/TextTour';
import Pagination from '../../app/commons/Pagination/Pagination';

const HomePage = () => {
  const dispatch = useDispatch();
  const { setSteps } = useTour();
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = useSelector(selectNumberOfPages);

  const handlePagination = (_, page) => {
    setCurrentPage(page);
  };

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
        <SearchBar currentPage={currentPage} numberOfPages={numberOfPages} />
      </StyledBackground>
      <AnswersList />
      <Pagination currentPage={currentPage > numberOfPages ? numberOfPages : currentPage} numberOfPages={numberOfPages} onChange={handlePagination} />
    </HomePageStyled>
  );
};

export default HomePage;
