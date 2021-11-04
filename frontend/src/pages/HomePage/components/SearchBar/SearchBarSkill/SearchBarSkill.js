/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAllSkills } from '../../../../../redux/skills/skillsSlice';
import {
  addSkillFilter,
  updateSkillFilter,
  removeSkillFilter,
  selectSkillFilters,
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
  const skillFilters = useSelector(selectSkillFilters);
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

  const handleSelectChange = event => dispatch(
    updateSkillFilter({
      index,
      filter: filter.skill && {
        skill: filter.skill,
        level: Number(event.target.value),
      },
    }),
  );
  const removeFilter = async arg => {
    dispatch(removeSkillFilter(arg));
    const newSkill = await skillFilters[index + 1];
    const newSkillData = await skills.find(skill => skill.id === newSkill?.skill);
    setSkillTyped(newSkillData?.name);
  };

  return (
    <SearchBarSkillStyled data-cy={`search-bar-skill-${index}`}>
      <InputWrapper>
        <Input
          input={skillTyped}
          optionsList={optionsList}
          // value={existingSkill || skillTyped}
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
