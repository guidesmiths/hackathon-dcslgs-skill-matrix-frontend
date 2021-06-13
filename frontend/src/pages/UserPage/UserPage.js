import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay } from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import UserSkills from './components/UserSkills';
import { fetchEcosystemsAsync } from '../../redux/ecosystems/ecosystemsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);

  const handleEcosystem = system => {
    // temporary function until connection with backend
    console.log(system);
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
    dispatch(fetchEcosystemsAsync());
  }, []);

  return (
    <UserPageStyled data-cy="user">
      <UserPageDisplay>
        <Ecosystems
          handleEcosystem={handleEcosystem}
        />
        <UserSkills
          isCollapsed={isCollapsed}
          setCollapsed={() => setCollapsed(!isCollapsed)}
        />
      </UserPageDisplay>
    </UserPageStyled>
  );
};

export default HomePage;
