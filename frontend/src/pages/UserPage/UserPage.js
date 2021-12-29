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

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ecosystemIdSelected, setEcosystemIdSelected] = useState();
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const { pathname } = useLocation();

  const userData = useSelector(selectUserData);
  const ecosystems = useSelector(selectAllEcosystems);

  const handleSubmit = () => {
    setIsSubmited(true);
    setEdit(false);
    setConfirmed(true);
    dispatch(insertAnswersAsync(userData));
  };

  const handleCancel = () => {
    setEdit(false);
    dispatch(fetchAnswersByUserAndEcosystemAsync({ userId: userData.id, ecoId: ecosystemIdSelected }));
  };

  useEffect(() => {
    if (ecosystems.length === 0) {
      dispatch(fetchEcosystemsAsync());
    }
  }, [ecosystems]);

  useEffect(() => {
    if (ecosystemIdSelected && userData.id) {
      dispatch(fetchAnswersByUserAndEcosystemAsync({ userId: userData.id, ecoId: ecosystemIdSelected }));
    }
  }, [userData.id, ecosystemIdSelected]);

  useEffect(() => {
    const currentLocation = +pathname.split('/')[3];
    if (currentLocation && userData.id) {
      dispatch(fetchSkillByEcosystemIdAsync(currentLocation));
      dispatch(fetchAnswersByUserAndEcosystemAsync({ userId: userData.id, ecoId: currentLocation }));
      setEcosystemIdSelected(currentLocation);
    }
    if (!currentLocation) {
      history.push(`/profile/ecosystem/${ecosystems[0]?.id}`);
    }
  }, [pathname, userData.id]);

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
            <SaveButton action={'cancel'} onClick={handleCancel}>Cancel</SaveButton>
            <SaveButton onClick={handleSubmit}>Save</SaveButton>
          </>
        }
      </Footer>
    </UserPageStyled>
  );
};

export default UserPage;
