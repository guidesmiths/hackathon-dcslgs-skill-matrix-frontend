/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSkillFilters,
  selectUserFilter,
} from '../../../redux/filters/filtersSlice';
import { fetchUsersFilteredAsync } from '../../../redux/answers/answersSlice';
import SearchBarUserSkill from './SearchBarUserSkill/SearchBarUserSkill';
import {
  SearchBarsUserWrapper,
  IconStyled,
  HomeSearchBarWrapper,
} from '../../HomePage/components/SearchBar/SearchBar.styled';
import { fetchSkillsAsync } from '../../../redux/skills/skillsSlice';

const SearchUserBar = ({ currentPage, numberOfPages }) => {
  const dispatch = useDispatch();
  const skillFilters = useSelector(selectSkillFilters);
  const userFilter = useSelector(selectUserFilter);

  useEffect(() => {
    dispatch(fetchSkillsAsync());
  }, []);

  useEffect(() => {
    const pagination = currentPage > numberOfPages ? numberOfPages : currentPage - 1;
    dispatch(fetchUsersFilteredAsync({ skillFilters, userFilter, pagination }));
  }, [skillFilters, userFilter, currentPage, numberOfPages]);

  return (
    <SearchBarsUserWrapper>
      <HomeSearchBarWrapper data-cy={'search-bar'}>
        {skillFilters.map((filter, index) => (
          <SearchBarUserSkill
            key={index}
            filter={filter}
            index={index}
          />
        ))}
        <IconStyled icon={'search'} />
      </HomeSearchBarWrapper>
    </SearchBarsUserWrapper>
  );
};

SearchUserBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};

export default SearchUserBar;
