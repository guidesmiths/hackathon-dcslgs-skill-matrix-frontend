/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { updateUserFilter, selectSkillFilters, selectUserFilter } from '../../../../redux/filters/filtersSlice';
import { fetchUsersFilteredAsync } from '../../../../redux/answers/answersSlice';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';
import { SearchBarUsers, SearchBarsWrapper, IconStyled, SearchBarWrapper, SearchBarSkillWrapper } from './SearchBar.styled';
import { fetchSkillsAsync } from '../../../../redux/skills/skillsSlice';

const SearchBar = ({ currentPage, numberOfPages }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const skillFilters = useSelector(selectSkillFilters);
  const userFilter = useSelector(selectUserFilter);
  const isLastFilter = index => index === skillFilters.length - 1;

  useEffect(() => {
    dispatch(fetchSkillsAsync());
  }, []);

  useEffect(() => {
    const pagination = currentPage > numberOfPages ? numberOfPages : currentPage - 1;
    dispatch(fetchUsersFilteredAsync({ skillFilters, userFilter, pagination }));
  }, [skillFilters, userFilter, currentPage, numberOfPages]);

  const updateFilter = event => {
    dispatch(updateUserFilter(event.target.value));
    history.replace({ search: `&name=${event.target.value}` });
  };

  useEffect(() => {
    const params = new URLSearchParams(search);
    const name = params.get('name');
    dispatch(updateUserFilter(name));
  }, [search]);

  return (
    <SearchBarsWrapper>
      <SearchBarWrapper>
        <SearchBarUsers
          data-cy="user-input"
          name="user-name"
          placeholder="Search by name..."
          value={userFilter}
          onChange={updateFilter}
        />
        <IconStyled icon={'search'} />
      </SearchBarWrapper>
      <SearchBarSkillWrapper>
        {skillFilters.map((filter, index) => (
          <SearchBarSkill
            key={index}
            filter={filter}
            index={index}
            isFirstFilter={skillFilters.length > 1}
            isLastFilter={isLastFilter(index)}
          />
        ))}
      </SearchBarSkillWrapper>
    </SearchBarsWrapper>
  );
};

SearchBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number,
};

SearchBar.defaultProps = {
  numberOfPages: 1,
};

export default SearchBar;
