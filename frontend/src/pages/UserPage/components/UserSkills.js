import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserData, DataTitle, RowWrapper, RowTitle } from '../UserPage.styled';
import { selectUser } from '../../../redux/user/userSlice';
import { selectAllSkills } from '../../../redux/skills/skillsSlice';
import UserRow from './UserRow';

const UserSkills = ({ handleEditSkill }) => {
  const user = useSelector(selectUser);
  const availableSkills = useSelector(selectAllSkills);
  const [optionsList, setOptionsList] = useState([]);

  const handleEditInput = event => {
    const inputValue = event.target.value;
    const filteredSkillsList = availableSkills.filter(skill => skill.name.toLowerCase().includes(inputValue.toLowerCase()));
    setOptionsList(filteredSkillsList);
    // Question: Should we edit the value of this input through Redux or React?
  };

  return (
    <UserData>
      <RowWrapper>
        <RowTitle>
          <DataTitle>Skill Name</DataTitle>
          <DataTitle>Rating</DataTitle>
          <DataTitle>I&apos;d Like to learn</DataTitle>
        </RowTitle>
      </RowWrapper>
      {user?.ecosystems?.map(system => system?.skills?.map(skill => (
        <UserRow
          key={skill.id}
          l
          handleEditInput={handleEditInput}
          handleEditSkill={handleEditSkill}
          optionsList={optionsList}
          skill={skill}
        />
      )))}
    </UserData>
  );
};

UserSkills.propTypes = {
  handleEditSkill: PropTypes.func.isRequired,
};

export default UserSkills;
