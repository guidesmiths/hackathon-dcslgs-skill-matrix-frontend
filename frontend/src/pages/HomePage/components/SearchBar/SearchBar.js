/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/prefer-default-export */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectSkillFilters } from '../../../../redux/filters/filtersSlice';
import { fetchUsersFilteredAsync } from '../../../../redux/answers/answersSlice';
import SearchBarSkill from './SearchBarSkill/SearchBarSkill';
import { SearchBarUsers, SearchBarsWrapper, IconStyled, SearchBarWrapper, SearchBarSkillWrapper } from './SearchBar.styled';
import { fetchSkillsAsync, selectAllSkills } from '../../../../redux/skills/skillsSlice';

const SearchBar = ({ currentPage, numberOfPages, name, handleName }) => {
  const dispatch = useDispatch();

  const skillFilters = useSelector(selectSkillFilters);
  const isLastFilter = index => index === skillFilters.length - 1;

  useEffect(() => {
    dispatch(fetchSkillsAsync());
  }, []);

  const skills = useSelector(selectAllSkills);
  // TODO check how can we set skills as the initial state of filteredSkills
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [usedSkills] = useState([]);

  useEffect(() => {
    const page = (currentPage > numberOfPages ? numberOfPages : currentPage) || 1;
    dispatch(fetchUsersFilteredAsync({ skillFilters, page, name }));
    /*
    Reason of this loop:
      If the user deletes a filter, the component is reloaded and if the usedSkills index are the same
      te substitution does not work

      Example: if there are 3 filters (index 0,1,2) and the index 1 is deleted, the remaining are (0,2) but if the second filter
      (the previous third one) is modified, the index will be one and again there are 3 filters instead of 2
    */
    for (let i = 0; i < usedSkills.length; i += 1) {
      usedSkills[i].index = i;
    }
  }, [skillFilters, name, currentPage, numberOfPages]);

  const addUsedSkill = skill => {
    usedSkills.push(skill);
    /* If the user is changing the filter, we need to know where is changing it to remove from the usedSkills
    If don't, the usedSkills will be pushing new skills.
    For example, if I write React on the same filter, the R skill and the React skill both will be aded instead of only React
    */
    const pos = usedSkills.findIndex(s => s.index === skill.index);
    if (usedSkills[pos] !== skill) {
      usedSkills.splice(pos, 1);
    }
    // Filter which one is already in use
    setFilteredSkills(skills.filter(({ name: skillName }) => !usedSkills.find(s => s.info.name === skillName)));
  };

  const removeUsedSkill = index => {
    const position = usedSkills.findIndex(s => s.index === index);
    usedSkills.splice(position, 1);
    setFilteredSkills(skills.filter(({ name: skillName }) => !usedSkills.find(s => s.info.name === skillName)));
  };

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
            addUsedSkill={addUsedSkill}
            filter={filter}
            index={index}
            isFirstFilter={skillFilters.length > 1}
            isLastFilter={isLastFilter(index)}
            removeUsedSkill={removeUsedSkill}
            // The first render will not have anything on filteredSkills
            skills={filteredSkills.length ? filteredSkills : skills }
            usedSkills={usedSkills}
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
  name: '',
  numberOfPages: 1,
};

export default SearchBar;
