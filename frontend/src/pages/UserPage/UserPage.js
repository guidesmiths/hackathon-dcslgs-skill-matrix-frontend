import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay } from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import UserSkills from './components/UserSkills';
import { fetchEcosystemsAsync } from '../../redux/ecosystems/ecosystemsSlice';
import { fetchSkillsAsync } from '../../redux/skills/skillsSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleEcosystem = system => {
    // Question: temporary function until connection with backend
    console.log(system);
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
    dispatch(fetchEcosystemsAsync());
    dispatch(fetchSkillsAsync);
  }, []);

  return (
    <UserPageStyled data-cy="user">
      <UserPageDisplay>
        <Ecosystems
          handleEcosystem={handleEcosystem}
        />
        <UserSkills/>
      </UserPageDisplay>
    </UserPageStyled>
  );
};

export default HomePage;
