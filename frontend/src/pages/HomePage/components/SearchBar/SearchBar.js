/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateUserFilter,
  selectSkillFilters,
  selectUserFilter,
} from '../../../../redux/filters/filtersSlice';
import { fetchFilteredAnswersAsync } from '../../../../redux/answers/answersSlice';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';
import { SearchBarUsers, SearchBarsWrapper, IconStyled, SearchBarWrapper, SearchBarSkillWrapper } from './SearchBar.styled';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const skillFilters = useSelector(selectSkillFilters);
  const userFilter = useSelector(selectUserFilter);
  const isLastFilter = index => index === skillFilters.length - 1;

  useEffect(() => {
    dispatch(fetchFilteredAnswersAsync({ skillFilters, userFilter }));
  }, [skillFilters, userFilter]);

  return (
    <SearchBarsWrapper>
      <SearchBarWrapper>
        <SearchBarUsers
          data-cy="user-input"
          name="user-name"
          value={userFilter}
          onChange={e => dispatch(updateUserFilter(e.target.value))}
          placeholder="Search by name..."
        />
        <IconStyled icon={'search'}/>
      </SearchBarWrapper>
      <SearchBarSkillWrapper>
        {skillFilters.map((filter, index) => (
          <SearchBarSkill
            key={index}
            filter={filter}
            index={index}
            isLastFilter={isLastFilter(index)}
          />))}
      </SearchBarSkillWrapper>
    </SearchBarsWrapper>
  );
};
