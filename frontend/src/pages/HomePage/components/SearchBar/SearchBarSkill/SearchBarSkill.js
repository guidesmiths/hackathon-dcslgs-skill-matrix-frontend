/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAllSkills } from '../../../../../redux/skills/skillsSlice';
import {
  addSkillFilter,
  updateSkillFilter,
  removeSkillFilter,
} from '../../../../../redux/filters/filtersSlice';
import { SearchBarSkillStyled, InputWrapper, StyledIcon } from './SearchBarSkill.styled';
import Input from '../../../../../app/commons/Input/Input';
import Select from '../../../../../app/commons/Select/Select';
import Label from '../../../../../app/commons/Label/Label';

const SearchBarSkill = ({ isLastFilter, filter, index }) => {
  const dispatch = useDispatch();
  const options = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  const [optionsList, setOptionsList] = useState([]);
  const skills = useSelector(selectAllSkills);

  const handleInput = event => {
    const inputValue = event.target.value;
    const filteredSkillsList = skills.filter(skill => skill.name.toLowerCase().includes(inputValue.toLowerCase()));
    setOptionsList(filteredSkillsList);
    dispatch(
      updateSkillFilter({
        index,
        filter: { skill: inputValue, level: filter.level },
      }),
    );
  };

  const handleSelectChange = event => dispatch(
    updateSkillFilter({
      index,
      filter: { skill: filter.skill, level: Number(event.target.value) },
    }),
  );
  return (
    <SearchBarSkillStyled data-cy={`search-bar-skill-${index}`}>
      <InputWrapper>
        <Input
          input={filter.skill}
          optionsList={optionsList}
          width={300}
          onChangeInput={handleInput}
        />
        <Label left={20} top={-10}>Skill</Label>
      </InputWrapper>
      <InputWrapper>
        <Select
          options={options}
          selected={filter.level}
          onChange={e => handleSelectChange(e)}
        />
        <Label left={10} top={-10}>Level</Label>
      </InputWrapper>
      <StyledIcon
        icon={'delete'}
        show={!isLastFilter}
        onClick={() => dispatch(removeSkillFilter(index))}
      />
      <StyledIcon
        icon={'add'}
        show={isLastFilter}
        onClick={() => dispatch(addSkillFilter())}
      />
    </SearchBarSkillStyled>
  );
};

SearchBarSkill.propTypes = {
  filter: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isLastFilter: PropTypes.bool.isRequired,
};

export default SearchBarSkill;
