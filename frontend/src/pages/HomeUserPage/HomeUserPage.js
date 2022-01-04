/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SearchUserBar } from './SearchUserBar/SearchUserBar';
import AnswersUserList from './AnswersUserList/AnswersUserList';
import { HomePageStyled, StyledBackground } from '../HomePage/HomePage.styled';
import { resetAnswers } from '../../redux/answers/answersSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';

const HomeUserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(resetAnswers());
    dispatch(resetFilters());
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
