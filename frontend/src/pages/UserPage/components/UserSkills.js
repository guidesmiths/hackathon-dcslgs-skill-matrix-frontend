import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  UserData,
  DataTitle,
  RowTitle,
  ColumTitles,
  ColumTitle,
  UserInput,
  FormHeader,
} from '../UserPage.styled';
import { selectSkillsPerSystem } from '../../../redux/ecosystems/ecosystemsSlice';
import {
  selectSkillsWithLevel,
  selectEcosystemPerId,
  fetchUserAsync,
  selectUserData,
} from '../../../redux/user/userSlice';

import UserRow from './UserRow';
import LevelBar from './LevelBar';

const UserSkills = ({ systemSelected, edit, isSubmited, setIsSubmited }) => {
  const selectedSkills = useSelector(selectSkillsPerSystem(systemSelected));
  const userSkills = useSelector(selectSkillsWithLevel(systemSelected));
  const selectedEcosystem = useSelector(selectEcosystemPerId(systemSelected));
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const ref = useRef(null);
  useEffect(() => {
    if (userData.length === 0) {
      dispatch(fetchUserAsync());
    }
  }, [userData, dispatch]);

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
    setIsSubmited(false);
  };

  useEffect(() => {
    if (isSubmited) {
      ref.current.click();
    }
  }, [isSubmited]);
  return (
    <UserData data-cy={'userRow'}>
      <form onSubmit={handleSubmit}>
        <FormHeader>
          <RowTitle>
            <DataTitle>{selectedEcosystem?.name}</DataTitle>
            <LevelBar field={'ecosystem'} level={selectedEcosystem?.average} />
            <UserInput ref={ref} type="submit" value="Save" />
          </RowTitle>
        </FormHeader>
        <ColumTitles>
          <ColumTitle>Skill Name</ColumTitle>
          <ColumTitle>Rating</ColumTitle>
          <ColumTitle>I&apos;d Like to learn</ColumTitle>
        </ColumTitles>
        {skillswithLevel?.map(skill => (
          <UserRow
            key={skill.id}
            edit={edit}
            idEcosystem={systemSelected}
            skill={skill}
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
  isSubmited: PropTypes.bool.isRequired,
  setIsSubmited: PropTypes.func.isRequired,
  systemSelected: PropTypes.array.isRequired,
  edit: PropTypes.bool.isRequired,
  // mySkills: PropTypes.array,
};

export default UserSkills;
