/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTour } from '@reactour/tour';
import { useHistory, useLocation } from 'react-router-dom';
import SearchBar from './components/SearchBar/SearchBar';
import AnswersList from './components/AnswersList/AnswersList';
import { HomePageStyled, StyledBackground } from './HomePage.styled';
import { resetAnswers, selectNumberOfPages } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';
import { TextTour } from '../../app/commons/Tour/TextTour.styled';

export const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const { currentStep, isOpen, setCurrentStep, setSteps } = useTour();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentName, setCurrentName] = useState();
  const numberOfPages = useSelector(selectNumberOfPages);

  const handlePagination = (_, page) => {
    setCurrentPage(page);
  };

  useEffect(() => () => {
    dispatch(resetAnswers());
    dispatch(resetFilters());
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const page = +params.get('page');
    setCurrentPage(page || 1);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);
    const name = params.get('name');
    setCurrentName(name);
    const query = name ? `&name=${name}` : '';
    history.push({ search: `page=${currentPage}${query}` });
  }, [currentPage, search]);

  useEffect(() => {
    if (!isOpen && currentStep === 4) {
      setCurrentStep(0);
    }
    setSteps([
      {
        selector: '[data-cy="user-input"]',
        content: <TextTour>Do you want to know the complete skills set a team member has? Insert their
        name in the search tab and voila!</TextTour>,
      },
      {
        selector: '[data-cy="search-bar-skill-0"]',
        content: <TextTour>If you need to know more about who has a certain skill and expertise level, this
        is the solution for you. You may include as many skills and expertise levels as needed by
        clicking on the + tab. Efficient and easy peasy!</TextTour>,
      },
      {
        selector: '[data-cy="answer-list-element-0"]',
        content: <TextTour>Need an example on how the Directory works? Check this out! You may see the
        name of the employee, email and role at the business.</TextTour>,
      },
      {
        selector: '[data-cy="user-seniority-0"]',
        content: <TextTour>Here, you may see the current role of each employee.
        As an Admin, you may change employees&apos; access settings to the skill matrix tool by.</TextTour>,
      },
      {
        selector: '[data-cy="switch-admin-0"]',
        content: <TextTour>As an Admin, you may change employees&apos; access settings to the skill matrix tool by
        clicking on this tab.</TextTour>,
      },
    ]);
  }, []);

  const handleName = name => {
    setCurrentName(name);
    setCurrentPage(1);
    const query = name ? `&name=${name}` : '';
    history.push({ search: `page=1${query}` });
  };

  return (
    <HomePageStyled>
      <StyledBackground>
        <SearchBar currentPage={currentPage} handleName={handleName} name={currentName} numberOfPages={numberOfPages} />
      </StyledBackground>
      <AnswersList currentPage={currentPage} handlePagination={handlePagination} numberOfPages={numberOfPages}/>
    </HomePageStyled>
  );
};
