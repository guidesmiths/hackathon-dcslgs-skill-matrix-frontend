/* eslint-disable import/prefer-default-export */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectAllSkills } from '../../../../../redux/skills/skillsSlice';

import SearchBarSkillStyled from './SearchBarSkill.styled';
import Input from '../../../../../app/commons/Input/Input';
import Select from '../../../../../app/commons/Select/Select';
import Icon from '../../../../../app/commons/Icon/Icon';

const SearchBarSkill = ({ onAddFilter, onDeleteFilter, onUpdateFilter, isLastFilter, filter, index }) => {
  const selectOptions = [
    { value: 1, selected: true },
    { value: 2 },
    { value: 3 },
    { value: 4 },
  ];
  const [inputSkill, setInputSkill] = useState(filter.skill);
  const [skillLevel, setSkillLevel] = useState(filter.level);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [options, setOptions] = useState(selectOptions);
  const skills = useSelector(selectAllSkills);

  useEffect(() => {
    const filterSkill = filter.skill;
    const filterLevel = filter.level;
    setInputSkill(filterSkill);
    setSkillLevel(filterLevel);
    const updatedOptions = options.map(({ value }) => ({ value, selected: value === filterLevel }));
    setOptions(updatedOptions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter.skill, filter.level]);

  const handleInput = event => {
    const inputValue = event.target.value;
    const filteredSkillsList = skills.filter(skill => (
      skill.name
        .toLowerCase().includes(inputValue.toLowerCase())
    ));
    setInputSkill(inputValue);
    setFilteredSkills(filteredSkillsList);
    onUpdateFilter({ skill: inputValue, level: skillLevel });
  };

  const handleSelectChange = event => {
    const selectValue = Number(event.target.value);
    setSkillLevel(selectValue);
    onUpdateFilter({ skill: inputSkill, level: selectValue });
  };

  return (
    <SearchBarSkillStyled data-cy={`search-bar-skill-${index}`}>
      <Input input={inputSkill} optionsList={filteredSkills} onChangeInput={handleInput}/>
      <Select options={options} onChange={handleSelectChange}/>
      <Icon icon={'delete_outline'} marginRight={10} onClick={onDeleteFilter}/>
      <Icon icon={'add'} show={isLastFilter} onClick={() => onAddFilter({ skill: inputSkill, level: skillLevel })}/>
    </SearchBarSkillStyled>
  );
};

SearchBarSkill.propTypes = {
  filter: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isLastFilter: PropTypes.bool.isRequired,
  onAddFilter: PropTypes.func.isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
  onUpdateFilter: PropTypes.func.isRequired,
};

export default SearchBarSkill;
