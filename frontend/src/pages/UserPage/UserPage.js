/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { UserPageStyled, UserPageDisplay, StyledIcon, EditButtonStyled, HeaderStyled, StyledModal, SaveButton } from './UserPage.styled';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import PopUp from '../../app/commons/PopUp/PopUp';
import UserSkills from './components/UserSkills';
import SuggestionForm from './components/SuggestionForm';
import { fetchEcosystemsAsync, fetchSkillByEcosystemIdAsync, selectAllEcosystems } from '../../redux/ecosystems/ecosystemsSlice';
import Footer from '../../app/commons/Footer/Footer';
import { insertAnswersAsync, selectUserData, fetchAnswersByUserAndEcosystemAsync } from '../../redux/user/userSlice';
import ConfirmPopUp from './components/ConfirmPopUp/ConfirmPopUp';

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ecosystemIdSelected, setEcosystemIdSelected] = useState(0);
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [canceling, isCanceling] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const { pathname } = useLocation();

  const userData = useSelector(selectUserData);
  const ecosystems = useSelector(selectAllEcosystems);

  useEffect(() => {
    if (ecosystems.length === 0) {
      dispatch(fetchEcosystemsAsync());
    }
  }, [ecosystems]);

  useEffect(() => {
    if (edit) {
      isCanceling(true);
    } else {
      const currentLocation = +pathname.split('/')[3];
      if (currentLocation && userData.id) {
        dispatch(fetchSkillByEcosystemIdAsync(currentLocation));
        dispatch(fetchAnswersByUserAndEcosystemAsync({ userId: userData.id, ecoId: currentLocation }));
        setEcosystemIdSelected(currentLocation);
      }
      if (!currentLocation) {
        history.push(`/profile/ecosystem/${ecosystems[0]?.id}`);
      }
    }
  }, [pathname, userData.id, canceling]);

  const handleSubmit = () => {
    setIsSubmited(true);
    setEdit(false);
    dispatch(insertAnswersAsync(userData))
      .then(() => setConfirmed(true))
      .catch(err => console.log(err));
  };

  const handleCancel = confirm => {
    if (confirm) {
      setEdit(false);
      dispatch(fetchAnswersByUserAndEcosystemAsync({ userId: userData.id, ecoId: ecosystemIdSelected }));
    } else {
      handleSubmit();
    }
  };

  return (
    <UserPageStyled data-cy="user">
      <HeaderStyled />
      <UserPageDisplay>
        <Ecosystems ecosystemIdSelected={ecosystemIdSelected} />
        <UserSkills ecosystemIdSelected={ecosystemIdSelected} edit={edit} isSubmited={isSubmited} setIsSubmited={setIsSubmited}/>
      </UserPageDisplay>
      {showSuggestionModal && <StyledModal>
        <SuggestionForm setConfirmed={setConfirmed} onCloseClick={() => setShowSuggestionModal(!showSuggestionModal)} />
      </StyledModal>}
      {confirmed && <PopUp isSuccess onCloseClick={() => setConfirmed(false)} />}
      <Footer>
        {!edit
          ? <>
            <StyledIcon data-cy={'add'} icon={'email'} onClick={() => setShowSuggestionModal(!showSuggestionModal)}/>
            <EditButtonStyled data-cy="editUser" onClick={() => setEdit(true)}>Edit</EditButtonStyled>
          </>
          : <>
            <SaveButton action={'cancel'} onClick={() => isCanceling(true)}>Cancel</SaveButton>
            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </>
        }
      </Footer>
      {canceling
      && <StyledModal>
        <ConfirmPopUp setConfirmed={handleCancel} onCloseClick={() => isCanceling(false)}/>
      </StyledModal>
      }
    </UserPageStyled>
  );
};

export default UserPage;
