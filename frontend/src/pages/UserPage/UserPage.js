/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTour } from '@reactour/tour';
import { fetchSkillByEcosystemIdAsync } from '../../redux/ecosystems/ecosystemsSlice';
import { insertAnswersAsync, selectUserData, fetchAnswersByUserAndEcosystemAsync, fetchFilledSkillsCountAsync } from '../../redux/user/userSlice';

import { Ecosystems } from '../../app/commons/Ecosystems';
import { Footer } from '../../app/commons/Footer';
import { PopUp } from '../../app/commons/PopUp';
import { UserSkills } from './components/UserSkills';
import { SuggestionForm } from './components/SuggestionForm';
import { ConfirmPopUp } from './components/ConfirmPopUp';

import { UserPageStyled, UserPageDisplay, StyledIcon, EditButtonStyled, HeaderStyled, StyledModal, SaveButton } from './UserPage.styled';
import { TextTour, Success, Warning } from '../../app/commons/Tour/TextTour.styled';

export const UserPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isOpen, currentStep, setCurrentStep, setDisabledActions, setIsOpen, setSteps } = useTour();

  const [ecosystemIdSelected, setEcosystemIdSelected] = useState(0);
  const [step, setStep] = useState(0);
  const [showSuggestionModal, setShowSuggestionModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [canceling, isCanceling] = useState(false);
  const [edit, setEdit] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [emptyState, setEmptyState] = useState(true);

  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (edit) {
      isCanceling(true);
    } else {
      const currentLocation = +pathname.split('/')[3];
      if (currentLocation && userData.id) {
        dispatch(fetchSkillByEcosystemIdAsync(currentLocation));
        dispatch(fetchAnswersByUserAndEcosystemAsync({ ecoId: currentLocation }));
        setEcosystemIdSelected(currentLocation);
        setEmptyState(false);
      }
      if (!currentLocation) {
        setEmptyState(true);
      }
    }
  }, [pathname, userData.id, canceling]);

  const handleSubmit = () => {
    setIsSubmited(true);
    setEdit(false);
    dispatch(insertAnswersAsync(userData))
      .then(() => {
        dispatch(fetchFilledSkillsCountAsync());
        setConfirmed(true);
        setTimeout(() => {
          setConfirmed(false);
        }, 2000);
      })
      .catch(err => console.log(err));
    if (currentStep === 7) {
      setIsOpen(false);
    }
  };

  const handleCancel = confirm => {
    if (confirm) {
      setEdit(false);
      dispatch(fetchAnswersByUserAndEcosystemAsync({ ecoId: ecosystemIdSelected }));
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
    if (currentStep === 7 && !isOpen) {
      setCurrentStep(0);
    }
    if (isOpen && (currentStep <= 3 && step > currentStep)) {
      setEdit(currentStep > 3);
      setDisabledActions(currentStep === 3);
    } else if (isOpen && currentStep < 3) {
      setEdit(false);
    }
    /* If the user passed the step of activate the edit mode, there is no need to disable again */
    if (isOpen && currentStep > 3) {
      setEdit(true);
    }
    if (!pathname.split('/')[3]) {
      setCurrentStep(0);
    }
    if (isOpen && currentStep === 0 && pathname.split('/')[3]) {
      setDisabledActions(false);
    }
    setSteps([
      {
        disableActions: !pathname.split('/')[3],
        selector: '[data-cy="ecosystems"]',
        content: <TextTour>Have a look at all the different ecosystems we currently have identified at the
        team. If you click in an ecosystem, you will find all the skills related to each one of them.
        {!pathname.split('/')[3] ? <Warning>To continue, please click on any ecosystem.</Warning>
          : <Success>You can continue with the tour.</Success>
        }</TextTour>,
      },
      {
        selector: '[data-cy="skill-0"]',
        content: <TextTour>All skills are rated by expertise levels - each level has their own description.</TextTour>,
      },
      {
        highlightedSelectors: [
          '[data-cy="navbar"]',
          '[data-cy="header"]',
          '[data-cy="userRow"]',
          '[data-cy="footer]',
        ],
        content: <TextTour>Once you have had a look at the ecosystems and skills, you are ready to start! Go to the
        ecosystems you feel most comfortable with.</TextTour>,
      },
      {
        disableActions: !edit,
        selector: !edit ? '[data-cy="editUser"]' : '[data-cy="saveUser"]',
        content: <TextTour>Once you&apos;ve had a look to the ecosystems and skills,
           you are ready to create your skill matrix profile. To proceed, search for the skills you may feel identified with and click on the option edit.
        {!edit ? <Warning>To continue, please click on the <em>Edit</em> button.</Warning>
          : <Success>You can continue with the tour.</Success>
        } </TextTour>,
      },
      {
        selector: '[data-cy="skill-0-description-level"]',
        content: <TextTour>Have a look at the
        descriptions of each level for that skill and choose the one you feel identified with. We have up
        to 16 skills levels considering the + and the -.</TextTour>,
      },
      {
        selector: '[data-cy="comment-section"]',
        content: <TextTour>Include comments if needed to justify your skill level rate.</TextTour>,
      },
      {
        selector: '[data-cy="checkbox"]',
        content: <TextTour>If you are willing to learn certain skills, click on the “I’d like to learn tab”.</TextTour>,
      },
      {
        selector: '[data-cy="saveUser"]',
        content: <TextTour>Don&apos;t forget to save it!</TextTour>,
      },
    ]);
    setStep(currentStep);
  }, [isOpen, edit, currentStep, pathname.split('/')[3]]);

  useEffect(() => {
    const currentLocation = +pathname.split('/')[3];
    if (currentLocation && userData.id) {
      dispatch(fetchSkillByEcosystemIdAsync(currentLocation));
      dispatch(fetchAnswersByUserAndEcosystemAsync({ ecoId: currentLocation }));
      setEcosystemIdSelected(currentLocation);
      setEmptyState(false);
    }
    if (!currentLocation) {
      setEmptyState(true);
    }
  }, []);

  const handleEdit = () => {
    setEdit(true);
    setDisabledActions(false);
  };

  const handleInbox = () => {
    setShowSuggestionModal(!showSuggestionModal);
  };

  return (
    <UserPageStyled data-cy="user">
      <HeaderStyled data-cy="header" />
      <UserPageDisplay>
        <Ecosystems ecosystemIdSelected={ecosystemIdSelected} />
        <UserSkills ecosystemIdSelected={ecosystemIdSelected} edit={edit} emptyState={emptyState} isSubmited={isSubmited} setIsSubmited={setIsSubmited}/>
      </UserPageDisplay>
      {showSuggestionModal && (
        <StyledModal>
          <SuggestionForm setConfirmed={setConfirmed} onCloseClick={handleInbox} />
        </StyledModal>
      )}
      {confirmed && <PopUp isSuccess />}
      <Footer>
        {!edit
          ? <>
            <StyledIcon data-cy="add" icon="email" onClick={handleInbox}/>
            { !emptyState && <EditButtonStyled data-cy="editUser" onClick={handleEdit}>Edit</EditButtonStyled>}
          </>
          : <>
            <SaveButton action="cancel" onClick={() => isCanceling(true)}>Cancel</SaveButton>
            <SaveButton data-cy="saveUser" onClick={handleSubmit}>Save</SaveButton>
          </>
        }
      </Footer>
      {canceling && (
        <StyledModal>
          <ConfirmPopUp setConfirmed={handleCancel} onCloseClick={() => isCanceling(false)}/>
        </StyledModal>
      )}
    </UserPageStyled>
  );
};
