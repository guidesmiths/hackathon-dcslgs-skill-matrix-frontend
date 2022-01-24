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
        highlightedSelectors: [
          '[data-cy="navbar"]',
          '[data-cy="search-bar"]',
          '[data-cy="answers-list"]',
        ],
        content: <TextTour>If you need support on a project due to skills requirements, this is the place to be.</TextTour>,
      },
      {
        selector: '[data-cy="search-bar"]',
        content: <TextTour>By the directory, you will be able to know what team mates could help you.
           Search by the skill needed, and the tool will show you all the team mates from any country who have
            a higher expertise level than the one you currently have to help &amp; guide if needed with any skill included in the skills matrix database.</TextTour>,
      },
      {
        highlightedSelectors: [
          '[data-cy="answers-list"]',
          // '[data-cy="answer-list-element-0"]',
          // '[data-cy="answer-list-element-1"]',
          // '[data-cy="answer-list-element-2"]',
          // '[data-cy="answer-list-element-3"]',
        ],
        content: <TextTour>The directory will show you the name,
           email as well as role at the company info of those colleagues
           who may help you so then, you can contact them easily by Slack
           or email. Sounds good right?</TextTour>,
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
