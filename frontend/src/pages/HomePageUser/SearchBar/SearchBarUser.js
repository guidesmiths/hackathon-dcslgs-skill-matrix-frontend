/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSkillFilters,
  selectUserFilter,
} from '../../../redux/filters/filtersSlice';
import { fetchAnswersAsync } from '../../../redux/answers/answersSlice';
import SearchBarSkillUser from './SearchBarSkill/SearchBarSkillUser';
import {
  SearchBarsUserWrapper,
  IconStyled,
  SearchBarWrapper,
} from '../../HomePage/components/SearchBar/SearchBar.styled';

export const SearchBarUser = () => {
  const dispatch = useDispatch();
  const skillFilters = useSelector(selectSkillFilters);
  const userFilter = useSelector(selectUserFilter);

  useEffect(() => {
    dispatch(fetchAnswersAsync({ skillFilters, userFilter }));
  }, [skillFilters, userFilter]);

  return (
    <SearchBarsUserWrapper>
      <SearchBarWrapper>
        {skillFilters.map((filter, index) => (
          <SearchBarSkillUser
            key={index}
            filter={filter}
            index={index}
          />
        ))}
        <IconStyled icon={'search'} />
      </SearchBarWrapper>
    </SearchBarsUserWrapper>
  );
};
