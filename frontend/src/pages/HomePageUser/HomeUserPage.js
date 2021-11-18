/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SearchBarUser } from './SearchBar/SearchBarUser';
import AnswersListUser from './AnswersList/AnswersListUser';
import { HomePageStyled, StyledBackground } from '../HomePage/HomePage.styled';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';
import { fetchAnswersAsync, resetAnswers } from '../../redux/answers/answersSlice';
import { fetchUserInfoAsync } from '../../redux/user/userSlice';

const HomeUserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
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
        <SearchBarUser/>
      </StyledBackground>
      <AnswersListUser/>
    </HomePageStyled>
  );
};

export default HomeUserPage;
