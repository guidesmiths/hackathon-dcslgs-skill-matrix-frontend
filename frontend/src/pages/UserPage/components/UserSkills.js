import React from 'react';
import PropTypes from 'prop-types';
import { UserData, DataTitle, RowWrapper, RowTitle } from '../UserPage.styled';
// import UserRow from './UserRow';

const UserSkills = ({ mySkills }) => (
  <UserData>
    <RowWrapper>
      <RowTitle>
        <DataTitle>Skill Name</DataTitle>
        <DataTitle>Rating</DataTitle>
        <DataTitle>I&apos;d Like to learn</DataTitle>
      </RowTitle>
    </RowWrapper>
    {mySkills?.map(skill => (
      // <UserRow
      //   key={skill.id}
      //   handleEditSkill={handleEditSkill}
      //   skill={skill.name}
      // />
      <p key={skill.id}>{skill.name}</p>
    ))}
  </UserData>
);

UserSkills.defaultProps = {
  mySkills: [],
};

UserSkills.propTypes = {
  // handleEditSkill: PropTypes.func.isRequired,
  mySkills: PropTypes.array,
};

export default UserSkills;
