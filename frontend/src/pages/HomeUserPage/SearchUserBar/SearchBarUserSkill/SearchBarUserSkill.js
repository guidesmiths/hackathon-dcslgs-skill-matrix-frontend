/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAllSkills } from '../../../../redux/skills/skillsSlice';
import {
  updateSkillFilter,
} from '../../../../redux/filters/filtersSlice';
import {
  SearchBarSkillStyled,
  InputWrapperUser,
} from '../../../HomePage/components/SearchBar/SearchBarSkill/SearchBarSkill.styled';
import Input from '../../../../app/commons/Input/Input';

const SearchBarUserSkill = ({ filter, index }) => {
  const dispatch = useDispatch();
  const [optionsList, setOptionsList] = useState([]);
  const skills = useSelector(selectAllSkills);
  const [skillTyped, setSkillTyped] = useState();

  const handleInput = event => {
    const inputValue = event.target.value;
    setSkillTyped(inputValue);
    const filteredSkillsList = skills.filter(skill => skill.name.toLowerCase().includes(inputValue.toLowerCase()));
    setOptionsList(filteredSkillsList || skills);

    const selectedSkill = filteredSkillsList.find(
      skill => skill.name === inputValue,
    );

    if (selectedSkill) {
      dispatch(
        updateSkillFilter({
          index,
          filter: { skill: selectedSkill.id, level: filter.level || 1 },
        }),
      );
    } else if (!inputValue) {
      dispatch(
        updateSkillFilter({
          index,
          filter: { skill: null, level: 0 },
        }),
      );
    }
  };

  return (
    <SearchBarSkillStyled data-cy={`search-bar-skill-${index}`}>
      <InputWrapperUser>
        <Input
          input={skillTyped}
          optionsList={optionsList}
          placeholder={'What is the skill you need help with?'}
          width={300}
          onChangeInput={handleInput}
        />
      </InputWrapperUser>
    </SearchBarSkillStyled>
  );
};

SearchBarUserSkill.propTypes = {
  filter: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default SearchBarUserSkill;
