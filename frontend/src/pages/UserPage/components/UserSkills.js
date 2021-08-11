/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  UserData,
  DataTitle,
  RowWrapper,
  RowTitle,
  UserInput,
  FormHeader,
} from '../UserPage.styled';
import { selectSkillsPerSystem } from '../../../redux/ecosystems/ecosystemsSlice';
import {
  selectSkillsWithLevel,
  selectEcosystemPerId,
  fetchUpdatedUserAsync,
  selectUserData,
} from '../../../redux/user/userSlice';

import UserRow from './UserRow';
import LevelBar from './LevelBar';

const UserSkills = ({ systemSelected }) => {
  const selectedSkills = useSelector(selectSkillsPerSystem(systemSelected));
  const selectedUser = useSelector(selectUserData);
  const userSkills = useSelector(selectSkillsWithLevel(systemSelected));
  const selectedEcosystem = useSelector(selectEcosystemPerId(systemSelected));
  const dispatch = useDispatch();

  const skillswithLevel = selectedSkills.map(skill => {
    const index = userSkills.findIndex(
      userSkill => userSkill.id === skill.id,
    );
    const { level, interested, comments } = index !== -1 ? userSkills[index] : { level: 0, interested: false, comments: '' };
    return {
      ...skill,
      level,
      interested,
      comments,
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchUpdatedUserAsync({ userSkills, selectedUser, selectedEcosystem }));
  };

  return (
    <UserData data-cy={'userRow'}>
      <form onSubmit={handleSubmit}>
        <FormHeader>
          <RowTitle>
            <DataTitle>{selectedEcosystem?.name} Ecosystem</DataTitle>
            <LevelBar level={selectedEcosystem?.average} />
            <UserInput type="submit" value="Save" />
          </RowTitle>
        </FormHeader>
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
            idEcosystem={systemSelected}
            skill={skill}
          />
        ))}
      </form>
    </UserData>
  );
};

UserSkills.defaultProps = {
  systemSelected: null,
};

UserSkills.propTypes = {
  systemSelected: PropTypes.number,
};

export default UserSkills;
