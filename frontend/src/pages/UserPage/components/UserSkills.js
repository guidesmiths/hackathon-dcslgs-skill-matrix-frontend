import React, { useEffect } from 'react';
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
} from '../../../redux/user/userSlice';

import UserRow from './UserRow';
import LevelBar from './LevelBar';

const UserSkills = ({ systemSelected }) => {
  const selectedSkills = useSelector(selectSkillsPerSystem(systemSelected));
  const userSkills = useSelector(selectSkillsWithLevel(systemSelected));
  const selectedEcosystem = useSelector(selectEcosystemPerId(systemSelected));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUpdatedUserAsync({ userSkills }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSkills]);

  const skillswithLevel = selectedSkills.map(skill => {
    const index = userSkills.findIndex(
      userSkill => userSkill.id === skill.id,
    );
    const { level, interested } = index !== -1 ? userSkills[index] : { level: 0, interested: false };
    return {
      ...skill,
      level,
      interested,
    };
  });

  const handleSubmit = e => {
    e.preventDefault();
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
            // handleEditSkill={handleEditSkill}
          />
        ))}
      </form>
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
