import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserPageStyled, UserPageDisplay } from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import UserSkills from './components/UserSkills';
import {
  fetchEcosystemsAsync,
  selectAllEcosystems,
  updateEcosystemSelected,
} from '../../redux/ecosystems/ecosystemsSlice';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const allEcosystems = useSelector(selectAllEcosystems);

  const selectEcosystem = id => {
    dispatch(
      updateEcosystemSelected({
        id, allEcosystems,
      }),
    );
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
    dispatch(fetchEcosystemsAsync());
    dispatch(fetchSkillsAsync);
  }, []);

  return (
    <UserPageStyled data-cy="user">
      <UserPageDisplay>
        <Ecosystems selectEcosystem={selectEcosystem} />
        <UserSkills />
      </UserPageDisplay>
    </UserPageStyled>
  );
};

export default HomePage;
