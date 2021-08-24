import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay } from './UserPage.styled';
import { fetchUserAsync } from '../../redux/user/userSlice';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import UserSkills from './components/UserSkills';
import IconStyled from '../../app/commons/icon/icon';
import Modal from '../../app/commons/Modal/Modal';
import SuggestionForm from './components/SuggestionForm';
import { fetchEcosystemsAsync } from '../../redux/ecosystems/ecosystemsSlice';

const UserPage = () => {
  const dispatch = useDispatch();
  const [systemSelected, setSystem] = useState(null);
  const [show, setShow] = useState(false);
  const selectEcosystem = id => {
    setSystem(id);
  };

  useEffect(() => {
    dispatch(fetchUserAsync());
    dispatch(fetchEcosystemsAsync());
  }, []);

  const showModal = () => {
    setShow(!show);
  };

  return (
    <UserPageStyled data-cy="user">
      <UserPageDisplay>
        <Ecosystems selectEcosystem={selectEcosystem} />
        <UserSkills systemSelected={systemSelected} />
      </UserPageDisplay>
      <Modal show={show} onCloseClick={showModal}>
        <SuggestionForm showModal={showModal}/>
      </Modal>
      <IconStyled icon={'add'} position={'fixed'} bottom={2} right={2} onClick={showModal}/>
    </UserPageStyled>
  );
};

export default UserPage;
