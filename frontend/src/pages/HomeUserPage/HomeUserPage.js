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
import { TextTour } from '../../app/commons/Tour/TextTour';

const HomeUserPage = () => {
  const dispatch = useDispatch();
  const { currentStep, setCurrentStep, isOpen, setSteps } = useTour();
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
    if (currentStep === 3 && !isOpen) {
      setCurrentStep(0);
    }
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
        content: <TextTour>The directory, gives you the opportunity
           to easily know who may help you on a certain skill/ecosystem.
           To do so, please search by the skill needed so you may see all
           the team mates based in any of our locations whose expertise
           level within the skill requested, is higher than yours.
           By this, you will be able to know who at the company may help,
           teach and/or support you on any skill included in our skill matrix tool.</TextTour>,
      },
      {
        highlightedSelectors: [
          '[data-cy="answers-list"]',
          // '[data-cy="answer-list-element-0"]',
          // '[data-cy="answer-list-element-1"]',
          // '[data-cy="answer-list-element-2"]',
          // '[data-cy="answer-list-element-3"]',
        ],
        content: <TextTour>The aim of the directory,
           is to show you the full name, email and role
           info of those colleagues who may give the support
           needed within a certain skill by Slack or email. Sounds good right?</TextTour>,
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
