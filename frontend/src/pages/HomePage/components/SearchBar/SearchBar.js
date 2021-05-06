/* eslint-disable import/prefer-default-export */
import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectAllSkills } from '../../../../redux/skills/skillsSlice';

import { SearchBarUsers, SearchBarSkills, SearchBarButton } from './SearchBar.styled';
import Input from '../../../../app/commons/Input/Input';
import Select from '../../../../app/commons/Select/Select';

export const SearchBar = () => {
  const [inputUser, setInputUser] = useState('');
  const [inputSKill, setInputSkill] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const skills = useSelector(selectAllSkills);

  const handleInput = event => {
    const filteredSkillsList = skills.filter(skill => (
      skill.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    ));
    setInputSkill(event.target.value);
    setFilteredSkills(filteredSkillsList);
  };

  return (
    <Fragment>
      <SearchBarUsers
        name="user-name"
        value={inputUser}
        onChange={e => setInputUser(e.target.value)}
      />
      <SearchBarSkills>
        <Input inputSkill={inputSKill} filteredSkills={filteredSkills} onChangeInput={handleInput}/>
        <Select/>
        <SearchBarButton>
          <span className="material-icons">
            add_circle
          </span>
        </SearchBarButton>
        <SearchBarButton>
          <span className="material-icons">
            remove_circle
          </span>
        </SearchBarButton>
      </SearchBarSkills>
    </Fragment>
  );
};
