/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
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
import { Input } from '../../../../../app/commons/Input';
import Select from '../../../../../app/commons/Select/Select';
import { Label } from '../../../../../app/commons/Label';

const SearchBarSkill = ({ isFirstFilter, isLastFilter, filter, index, skills }) => {
  const dispatch = useDispatch();
  const options = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  const [optionsList, setOptionsList] = useState([]);
  const skillFilters = useSelector(selectSkillFilters);
  const [skillTyped, setSkillTyped] = useState();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleInput = event => {
    const inputValue = event.target.value;
    setSkillTyped(inputValue);
    const filteredSkillsList = skills.filter(skill => (
      `${skill.ecosystemName} - ${skill.skillName}`.toLowerCase().includes(inputValue.toLowerCase())
    ));
    setOptionsList(filteredSkillsList || skills);

    const foundSkill = filteredSkillsList.find(
      skill => `${skill.ecosystemName} - ${skill.skillName}` === inputValue,
    );
    setSelectedSkill(foundSkill);

    if (foundSkill) {
      dispatch(
        updateSkillFilter({
          index,
          filter: { skill: foundSkill.skillId, level: filter.level || 1 },
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

  const handleSelectChange = event => selectedSkill
    && dispatch(
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
    const newSkillData = await skills.find(
      skill => skill.skillId === newSkill?.skill,
    );
    setSkillTyped(newSkillData?.name);
  };

  return (
    <SearchBarSkillStyled data-cy={`search-bar-skill-${index}`}>
      <InputWrapper>
        <Input
          input={skillTyped}
          optionsList={optionsList}
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
        icon="delete"
        show={isFirstFilter}
        onClick={() => removeFilter(index)}
      />
      <StyledIcon
        icon="add"
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
  skills: PropTypes.array.isRequired,
  isFirstFilter: PropTypes.bool,
};

SearchBarSkill.defaultProps = {
  isFirstFilter: false,
};

export default SearchBarSkill;
