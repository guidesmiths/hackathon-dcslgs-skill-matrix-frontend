import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay } from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import UserSkills from './components/UserSkills';

const HomePage = () => {
  const dispatch = useDispatch();

  const handleEcosystem = system => {
    console.log(system);
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, []);

  return (
    <UserPageStyled data-cy="user">
      <UserPageDisplay>
        <Ecosystems
          ecosystem={['React', 'Big Data', 'NodeJS']}
          handleEcosystem={handleEcosystem}
        />
        <UserSkills/>
      </UserPageDisplay>
    </UserPageStyled>
  );
};

export default HomePage;
