/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchLevelUserBySkillAsync } from '../../../../redux/user/userSlice';
import { selectAllSkills } from '../../../../redux/skills/skillsSlice';
import {
  updateSkillFilter,
} from '../../../../redux/filters/filtersSlice';
import {
  SearchBarSkillStyled,
  InputWrapperUser,
} from '../../../HomePage/components/SearchBar/SearchBarSkill/SearchBarSkill.styled';
import Input from '../../../../app/commons/Input/Input';

const SearchBarUserSkill = ({ index }) => {
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
      dispatch(fetchLevelUserBySkillAsync(selectedSkill.id))
        .then(response => {
          const level = response.payload;
          dispatch(
            updateSkillFilter({
              index,
              filter: { skill: selectedSkill.id, level: level?.skill_value || 1 },
            }),
          );
        })
        .catch(err => console.error(err));
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
  index: PropTypes.number.isRequired,
};

export default SearchBarUserSkill;
