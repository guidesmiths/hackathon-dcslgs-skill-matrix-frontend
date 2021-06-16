import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { UserData, DataTitle, RowWrapper, RowTitle } from '../UserPage.styled';
import UserRow from './UserRow';
import { selectSelectedSkills } from '../../../redux/ecosystems/ecosystemsSlice';

const UserSkills = ({ handleEditSkill }) => {
  const selectedSkills = useSelector(selectSelectedSkills);

  return (
    <UserData>
      <RowWrapper>
        <RowTitle>
          <DataTitle>Skill Name</DataTitle>
          <DataTitle>Rating</DataTitle>
          <DataTitle>I&apos;d Like to learn</DataTitle>
        </RowTitle>
      </RowWrapper>
      {selectedSkills?.map((skill => (
        <UserRow
          key={skill.id}
          handleEditSkill={handleEditSkill}
          skill={skill.name}
        />
      )))}
    </UserData>
  );
};

UserSkills.propTypes = {
  handleEditSkill: PropTypes.func.isRequired,
};

export default UserSkills;
