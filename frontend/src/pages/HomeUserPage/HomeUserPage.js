/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SearchUserBar } from './SearchUserBar/SearchUserBar';
import AnswersUserList from './AnswersUserList/AnswersUserList';
import { HomePageStyled, StyledBackground } from '../HomePage/HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import { fetchAnswersAsync, resetAnswers } from '../../redux/answers/answersSlice';
import { fetchUserInfoAsync } from '../../redux/user/userSlice';
import { resetFilters } from '../../redux/filters/filtersSlice';

const HomeUserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(fetchUserInfoAsync(history));
    dispatch(fetchSkillsAsync());
    dispatch(fetchAnswersAsync());
    return () => {
      dispatch(resetAnswers());
    };
  }, [dispatch]);

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
