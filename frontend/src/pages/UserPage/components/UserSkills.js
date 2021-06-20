import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { UserData, DataTitle, RowWrapper, RowTitle } from '../UserPage.styled';
import { selectSkillsPerSystem } from '../../../redux/ecosystems/ecosystemsSlice';
import { selectSkillsWithLevel } from '../../../redux/user/userSlice';

import UserRow from './UserRow';

const UserSkills = ({ systemSelected }) => {
  const selectedSkills = useSelector(selectSkillsPerSystem(systemSelected));
  const userSkills = useSelector(selectSkillsWithLevel(systemSelected));

  const skillswithLevel = selectedSkills.map(skill => {
    const index = userSkills.findIndex(userSkill => userSkill.id === skill.id);
    const { level } = index !== -1 ? userSkills[index] : {};
    return {
      ...skill,
      level,
    };
  });

  return (
    <UserData>
      <RowWrapper>
        <RowTitle>
          <DataTitle>Skill Name</DataTitle>
          <DataTitle>Rating</DataTitle>
          <DataTitle>I&apos;d Like to learn</DataTitle>
        </RowTitle>
      </RowWrapper>
      {skillswithLevel?.map(skill => (
        <UserRow
          key={skill.id}
          // handleEditSkill={handleEditSkill}
          skill={skill}
        />
      ))}
    </UserData>
  );
};

UserSkills.defaultProps = {
  mySkills: [],
};

UserSkills.propTypes = {
  // handleEditSkill: PropTypes.func.isRequired,
  systemSelected: PropTypes.array.isRequired,
  // mySkills: PropTypes.array,
};

export default UserSkills;
