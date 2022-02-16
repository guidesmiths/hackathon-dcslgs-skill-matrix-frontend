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
import Input from '../../../../../app/commons/Input/Input';
import Select from '../../../../../app/commons/Select/Select';
import Label from '../../../../../app/commons/Label/Label';

const SearchBarSkill = ({ addUsedSkill, removeUsedSkill, isFirstFilter, isLastFilter, filter, index, skills, usedSkills }) => {
  const dispatch = useDispatch();
  const options = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }];
  const [optionsList, setOptionsList] = useState([]);
  const skillFilters = useSelector(selectSkillFilters);
  const [skillTyped, setSkillTyped] = useState();
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleInput = event => {
    const inputValue = event.target.value;
    setSkillTyped(inputValue);
    const filteredSkillsList = skills.filter(skill => skill.name.toLowerCase().includes(inputValue.toLowerCase()));
    setOptionsList(filteredSkillsList || skills);

    const foundSkill = filteredSkillsList.find(
      skill => skill.name === inputValue,
    );

    setSelectedSkill(foundSkill);

    if (foundSkill) {
      // It's important to save in which filter the users are writing in order to delete correctly if needed
      addUsedSkill({ info: foundSkill, index });
      dispatch(
        updateSkillFilter({
          index,
          filter: { skill: foundSkill.id, level: filter.level || 1 },
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
    const newSkill = await skillFilters[arg + 1];
    // The usedSkill list is used to recover the name of the following filter and apply to the index of the deleted one
    const newSkillData = await usedSkills.find(
      skill => skill.info.id === newSkill?.skill,
    );
    removeUsedSkill(arg);
    setSkillTyped(newSkillData?.info.name);
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
          disabled={!selectedSkill}
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
  addUsedSkill: PropTypes.func.isRequired,
  filter: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isLastFilter: PropTypes.bool.isRequired,
  removeUsedSkill: PropTypes.func.isRequired,
  skills: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  usedSkills: PropTypes.arrayOf(PropTypes.shape({
    index: PropTypes.number.isRequired,
    info: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  })).isRequired,
  isFirstFilter: PropTypes.bool,
};

SearchBarSkill.defaultProps = {
  isFirstFilter: false,
};

export default SearchBarSkill;
