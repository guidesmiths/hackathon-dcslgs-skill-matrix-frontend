import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserData, DataTitle, RowWrapper, RowTitle } from '../UserPage.styled';
import { selectEcosystems } from '../../../redux/user/userSlice';
import UserRow from './UserRow';

const UserSkills = ({ handleEditSkill }) => {
  const ecosystems = useSelector(selectEcosystems);

  return (
    <UserData>
      <RowWrapper>
        <RowTitle>
          <DataTitle>Skill Name</DataTitle>
          <DataTitle>Rating</DataTitle>
          <DataTitle>I&apos;d Like to learn</DataTitle>
        </RowTitle>
      </RowWrapper>
      {ecosystems?.map(system => system?.skills?.map(skill => (
        <UserRow
          key={skill.id}
          handleEditSkill={handleEditSkill}
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
