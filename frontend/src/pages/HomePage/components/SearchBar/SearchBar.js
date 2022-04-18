/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/prefer-default-export */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectSkillFilters } from '../../../../redux/filters/filtersSlice';
import { fetchUsersFilteredAsync } from '../../../../redux/answers/answersSlice';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';
import { SearchBarUsers, SearchBarsWrapper, IconStyled, SearchBarWrapper, SearchBarSkillWrapper } from './SearchBar.styled';
import { fetchSkillsAsync, selectAllSkills } from '../../../../redux/skills/skillsSlice';

const SearchBar = ({ currentPage, numberOfPages, name, handleName }) => {
  const dispatch = useDispatch();
  const skills = useSelector(selectAllSkills);
  const skillFilters = useSelector(selectSkillFilters);
  const isLastFilter = index => index === skillFilters.length - 1;

  useEffect(() => {
    dispatch(fetchSkillsAsync());
  }, []);

  useEffect(() => {
    const page = (currentPage > numberOfPages ? numberOfPages : currentPage) || 1;
    dispatch(fetchUsersFilteredAsync({ skillFilters, page, name }));
  }, [skillFilters, name, currentPage]);

  const skillsIdSearched = skillFilters.map(filter => filter.skill);
  const skillsNotSearched = skills.filter(skill => !skillsIdSearched.includes(skill.skillId));

  return (
    <SearchBarsWrapper>
      <SearchBarWrapper>
        <SearchBarUsers
          data-cy="user-input"
          name="user-name"
          placeholder="Search by name..."
          value={name}
          onChange={event => handleName(event.target.value)}
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
            skills={skillsNotSearched}
          />
        ))}
      </SearchBarSkillWrapper>
    </SearchBarsWrapper>
  );
};

SearchBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleName: PropTypes.func.isRequired,
  name: PropTypes.string,
  numberOfPages: PropTypes.number,
};

SearchBar.defaultProps = {
  name: null,
  numberOfPages: 1,
};

export default SearchBar;
