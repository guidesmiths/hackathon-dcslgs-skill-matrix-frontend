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
import {
  SearchBarSkillStyled,
  InputWrapper,
  StyledIcon,
} from './SearchBarSkill.styled';
import Input from '../../../../../app/commons/Input/Input';
import Select from '../../../../../app/commons/Select/Select';
import Label from '../../../../../app/commons/Label/Label';

const SearchBarSkill = ({ isFirstFilter, isLastFilter, filter, index }) => {
  const dispatch = useDispatch();
  const options = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  const [optionsList, setOptionsList] = useState([]);
  const skills = useSelector(selectAllSkills);
  const [skillTyped, setSkillTyped] = useState();

  const handleInput = event => {
    const inputValue = event.target.value;
    setSkillTyped(inputValue);
    const filteredSkillsList = skills.filter(skill => skill.name.toLowerCase().includes(inputValue.toLowerCase()));
    console.log(
      '🚀 ~ file: SearchBarSkill.js ~ line 31 ~ SearchBarSkill ~ filteredSkillsList',
      filteredSkillsList,
    );
    setOptionsList(filteredSkillsList || skills);

    const selectedSkill = filteredSkillsList.find(
      skill => skill.name === inputValue,
    );
    console.log(
      '🚀 ~ file: SearchBarSkill.js ~ line 40 ~ SearchBarSkill ~ selectedSkill',
      selectedSkill,
    );

    dispatch(
      updateSkillFilter({
        index,
        filter: selectedSkill
          ? { skill: selectedSkill.id, level: filter.level || 1 }
          : !skillTyped && !filteredSkillsList.length && null,
      }),
    );
  };

  const handleSelectChange = event => dispatch(
    updateSkillFilter({
      index,
      filter: filter.skill && {
        skill: filter.skill,
        level: Number(event.target.value),
      },
    }),
  );
  const removeFilter = arg => {
    dispatch(removeSkillFilter(arg));
    setSkillTyped('');
  };

  return (
    <SearchBarSkillStyled data-cy={`search-bar-skill-${index}`}>
      <InputWrapper>
        <Input
          input={skillTyped}
          optionsList={optionsList}
          value={skillTyped}
          width={300}
          onChangeInput={handleInput}
        />
        <Label left={20} top={-10}>
          Skill
        </Label>
      </InputWrapper>
      <InputWrapper>
        <Select
          options={options}
          selected={filter.level}
          onChange={handleSelectChange}
        />
        <Label left={10} top={-10}>
          Level
        </Label>
      </InputWrapper>
      <StyledIcon
        icon={'delete'}
        show={isFirstFilter}
        onClick={() => removeFilter(index)}
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
  isFirstFilter: PropTypes.bool,
};

SearchBarSkill.defaultProps = {
  isFirstFilter: false,
};

export default SearchBarSkill;
