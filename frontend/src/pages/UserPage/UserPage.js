import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay } from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import UserSkills from './components/UserSkills';
import {
  fetchEcosystemsAsync,
} from '../../redux/ecosystems/ecosystemsSlice';

const UserPage = () => {
  const dispatch = useDispatch();
  const [systemSelected, setSystem] = useState(1);
  const selectEcosystem = id => {
    setSystem(id);
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
    dispatch(fetchEcosystemsAsync());
  }, []);

  return (
    <UserPageStyled data-cy="user">
      <UserPageDisplay>
        <Ecosystems systemSelected={systemSelected} selectEcosystem={selectEcosystem} />
        <UserSkills />
      </UserPageDisplay>
    </UserPageStyled>
  );
};

export default UserPage;
