import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { SearchBarInput } from '../../../pages/HomePage/components/SearchBar/SearchBar.styled';
import { selectAllSkills } from '../../../redux/skills/skillsSlice';

function Input() {
  const [input, setInput] = useState('');
  const [filteredSkills, setFilteredSkills] = useState([]);
  const skills = useSelector(selectAllSkills);

  const handleInput = event => {
    const filteredSkillsList = skills.filter(skill => (
      skill.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    ));
    setInput(event.target.value);
    setFilteredSkills(filteredSkillsList);
  };

  return (
    <Fragment>
      <SearchBarInput
        list="skills"
        type="text"
        value={input}
        onChange={e => handleInput(e)}
      />
      <datalist id="skills">
        {filteredSkills.length > 0
          ? filteredSkills.map(skill =>
            (<option key={skill.id}>{skill.name}</option>
            ))
          : null}
      </datalist>
    </Fragment>
  );
}

export default Input;
