import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UserPageStyled, UserPageDisplay, StyledIcon, EditButtonStyled, HeaderStyled, StyledModal, SaveButton } from './UserPage.styled';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import PopUp from '../../app/commons/Pop-up/Pop-up';
import UserSkills from './components/UserSkills';
import SuggestionForm from './components/SuggestionForm';
import { fetchEcosystemsAsync, resetEcosystems } from '../../redux/ecosystems/ecosystemsSlice';
import Footer from '../../app/commons/Footer/Footer';

const UserPage = () => {
  const dispatch = useDispatch();
  const [systemSelected, setSystem] = useState(null);
  const [show, setShow] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const selectEcosystem = id => {
    setSystem(id);
  };

  const handleSubmit = () => {
    setIsSubmited(true);
    setEdit(false);
    setConfirmed(true);
  };

  useEffect(() => {
    dispatch(fetchEcosystemsAsync());
    return () => {
      dispatch(resetEcosystems());
    };
  }, [dispatch]);

  const showModal = () => {
    setShow(!show);
  };

  const closeConfirmed = () => {
    setConfirmed(false);
  };
  return (
    <UserPageStyled data-cy="user">
      <HeaderStyled/>
      <UserPageDisplay>
        <Ecosystems selectEcosystem={selectEcosystem} />
        <UserSkills systemSelected={systemSelected} edit={edit} isSubmited={isSubmited} setIsSubmited={setIsSubmited}/>
      </UserPageDisplay>
      <StyledModal show={show} onCloseClick={showModal}>
        <SuggestionForm showModal={showModal}/>
      </StyledModal>
      <PopUp onCloseClick={closeConfirmed} show={confirmed} isSuccess />
      <Footer>
        {!edit
          ? <>
            <StyledIcon icon={'email'} onClick={showModal} data-cy={'add'}/>
            <EditButtonStyled onClick={() => { setEdit(true); }} data-cy="editUser">Edit</EditButtonStyled>
          </>
          : <>
            <SaveButton action={'cancel'} onClick={() => { setEdit(false); }}>Cancel</SaveButton>
            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </>
        }
      </Footer>
    </UserPageStyled>
  );
};

export default UserPage;
