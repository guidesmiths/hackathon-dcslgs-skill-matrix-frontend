/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTour } from '@reactour/tour';
import { useHistory, useLocation } from 'react-router-dom';
import SearchUserBar from './SearchUserBar/SearchUserBar';
import AnswersUserList from './AnswersUserList/AnswersUserList';
import { HomePageStyled, StyledBackground } from '../HomePage/HomePage.styled';
import { resetAnswers, selectNumberOfPages } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';
import TextTour from '../../app/commons/Tour/TextTour';

const HomeUserPage = () => {
  const dispatch = useDispatch();
  const { setSteps } = useTour();
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = useSelector(selectNumberOfPages);
  const history = useHistory();
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const page = +params.get('page');
    setCurrentPage(page || 1);
  }, []);
  useEffect(() => history.push({ search: `page=${currentPage}` }), [currentPage]);

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
        <SearchUserBar currentPage={currentPage} numberOfPages={numberOfPages} />
      </StyledBackground>
      <AnswersUserList currentPage={currentPage} handlePagination={handlePagination} numberOfPages={numberOfPages}/>
    </HomePageStyled>
  );
};

export default HomeUserPage;
