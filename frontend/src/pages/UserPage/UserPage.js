/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTour } from '@reactour/tour';
import { UserPageStyled, UserPageDisplay, StyledIcon, EditButtonStyled, HeaderStyled, StyledModal, SaveButton } from './UserPage.styled';
import Ecosystems from '../../app/commons/Ecosystems/Ecosystems';
import PopUp from '../../app/commons/PopUp/PopUp';
import UserSkills from './components/UserSkills';
import SuggestionForm from './components/SuggestionForm';
import { fetchEcosystemsAsync, fetchSkillByEcosystemIdAsync, selectAllEcosystems } from '../../redux/ecosystems/ecosystemsSlice';
import Footer from '../../app/commons/Footer/Footer';
import { insertAnswersAsync, selectUserData, fetchAnswersByUserAndEcosystemAsync } from '../../redux/user/userSlice';
import ConfirmPopUp from './components/ConfirmPopUp/ConfirmPopUp';
import TextTour from '../../app/commons/Tour/TextTour';

const UserPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ecosystemIdSelected, setEcosystemIdSelected] = useState(0);
  const { isOpen, currentStep, setDisabledActions, setSteps } = useTour();
  const [step, setStep] = useState(0);
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
  useEffect(() => {
    /*
    - This currentStep allows to check when I can keep the edit mode or reset it, the 3 corresponds to the index of the tour step which
    the user needs to activate the edit mode for the tour.

    - The step parameter allowed me to check if I came from a following step to disable again the edit mode
     */
    if (isOpen && (currentStep <= 3 && step > currentStep)) {
      setEdit(!(currentStep <= 3));
      setDisabledActions(currentStep === 3);
    } else if (isOpen && currentStep < 3) {
      setEdit(false);
    }
    /* If the user passed the step of activate the edit mode, there is no need to disable again */
    if (isOpen && currentStep > 3) {
      setEdit(true);
    }
    setSteps([
      {
        selector: '[data-cy="userSkill-0"]',
        content: <TextTour>Here you can see the skill</TextTour>,
      },
      {
        /*  TODO: This selector is not working */
        selector: '[data-cy="level-bar"]',
        content: <TextTour>Here you can see the skill in bars</TextTour>,
      },
      {
        selector: '[data-cy="checkbox"]',
        content: <TextTour>Here you can see the skill</TextTour>,
      },
      {
        disableActions: !edit,
        selector: !edit ? '[data-cy="editUser"]' : '[data-cy="saveUser"]',
        content: <TextTour>To edit the skills, you have to click on &apos;Edit&apos;</TextTour>,
      },
      {
        selector: '[data-cy="level-selector"]',
        content: <TextTour>Edit the skill level</TextTour>,
      },
      {
        selector: '[data-cy="sublevel-buttons"]',
        content: <TextTour>Here you can adjust the skill level with minus and plus</TextTour>,
      },
      {
        selector: '[data-cy="comment-section"]',
        content: <TextTour>Here you can write a comment</TextTour>,
      },
    ]);
    setStep(currentStep);
  }, [isOpen, edit, currentStep]);

  useEffect(() => {
    /*
    - This currentStep allows to check when I can keep the edit mode or reset it, the 3 corresponds to the index of the tour step which
    the user needs to activate the edit mode for the tour.

    - The step parameter allowed me to check if I came from a following step to disable again the edit mode
     */
    if (isOpen && (currentStep <= 3 && step > currentStep)) {
      setEdit(!(currentStep <= 3));
      setDisabledActions(currentStep === 3);
    } else if (isOpen && currentStep < 3) {
      setEdit(false);
    }
    /* If the user passed the step of activate the edit mode, there is no need to disable again */
    if (isOpen && currentStep > 3) {
      setEdit(true);
    }
    setSteps([
      {
        selector: '[data-cy="userSkill-0"]',
        content: <TextTour>Here you can see the skill</TextTour>,
      },
      {
        /*  TODO: This selector is not working */
        selector: '[data-cy="skill-bars-0"]',
        content: <TextTour>Here you can see the skill in bars</TextTour>,
      },
      {
        selector: '[data-cy="checkbox"]',
        content: <TextTour>Here you can see the skill</TextTour>,
      },
      {
        disableActions: !edit,
        selector: !edit ? '[data-cy="editUser"]' : '[data-cy="saveUser"]',
        content: <TextTour>To edit the skills, you have to click on &apos;Edit&apos;</TextTour>,
      },
      {
        selector: '[data-cy="level-selector"]',
        content: <TextTour>Edit the skill level</TextTour>,
      },
      {
        selector: '[data-cy="sublevel-buttons"]',
        content: <TextTour>Here you can adjust the skill level with minus and plus</TextTour>,
      },
      {
        selector: '[data-cy="comment-section"]',
        content: <TextTour>Here you can adjust the skill level with minus and plus</TextTour>,
      },
    ]);
    setStep(currentStep);
  }, [isOpen, edit, currentStep]);

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
  }, []);

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
            <EditButtonStyled data-cy="editUser" onClick={() => { setEdit(true); setDisabledActions(false); }}>Edit</EditButtonStyled>
          </>
          : <>
            <SaveButton action={'cancel'} onClick={() => isCanceling(true)}>Cancel</SaveButton>
            <SaveButton data-cy="saveUser" onClick={handleSubmit}>Save</SaveButton>
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
