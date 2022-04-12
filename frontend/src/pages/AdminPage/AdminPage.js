/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTour } from '@reactour/tour';

import { fetchSuggestionsAsync, selectAllSuggestions } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync, upsertEcosystemAsync, selectAllEcosystems, fetchSkillByEcosystemIdAsync, selectCurrentEcosystem } from '../../redux/ecosystems/ecosystemsSlice';
import { selectUserData } from '../../redux/user/userSlice';
import { upsertSkillAsync } from '../../redux/skills/skillsSlice';

import { PopUp } from '../../app/commons/PopUp';
import { Footer } from '../../app/commons/Footer';
import { SuggestionsInbox } from './components/SuggestionsInbox';
import { EcosystemsSideBar } from './components/EcosystemsSideBar';
import { EcosystemMain } from './components/EcosystemMain';

import { AdminPageStyled, EcosystemsContainer, EditButton, SaveCancelButton } from './AdminPage.styled';
import { TextTour, Success, Warning } from '../../app/commons/Tour/TextTour.styled';
import { StyledIcon } from '../UserPage/UserPage.styled';

// Do we need this?
const newEcosystemEmpty = {
  name: '',
  skills: [{
    name: '',
    description: '',
    levels: [
      { level: 1, levelDescription: '' },
      { level: 2, levelDescription: '' },
      { level: 3, levelDescription: '' },
      { level: 4, levelDescription: '' },
    ],
  }],
};

export const AdminPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentStep, isOpen, setCurrentStep, setDisabledActions, setSteps } = useTour();
  const [step, setStep] = useState(0);

  const [loading, setLoading] = useState(true);

  const ecosystems = useSelector(selectAllEcosystems);
  const suggestions = useSelector(selectAllSuggestions);
  const userData = useSelector(selectUserData);
  const [selectedEcosystem, setSelectedEcosystem] = useState();
  const [noSuggestions, setNoSuggestions] = useState(true);
  const [isNewEcosystem, setIsNewEcosystem] = useState(false);
  const [isNewSkill, setIsNewSkill] = useState(false);
  const [isOnEditableMode, setIsOnEditableMode] = useState(false);
  const [newEcosystem, setNewEcosystem] = useState(newEcosystemEmpty);
  const [isThereAnyError, setIsThereAnyError] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const { pathname } = useLocation();
  const currEcosystem = useSelector(selectCurrentEcosystem);
  const [emptyState, setEmptyState] = useState(true);

  useEffect(() => {
    setSelectedEcosystem(currEcosystem);
  }, [currEcosystem]);

  useEffect(() => {
    dispatch(fetchSuggestionsAsync());
  }, []);

  useEffect(() => {
    setNoSuggestions(suggestions.length === 0);
  }, [suggestions]);

  useEffect(() => {
    dispatch(fetchEcosystemsAsync())
      .then(() => setLoading(false))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (ecosystems.length) {
      const currentLocation = +pathname.split('/')[2];
      const ecosystem = ecosystems.find(({ id }) => id === currentLocation);

      if (currentLocation && userData.id) {
        dispatch(fetchSkillByEcosystemIdAsync(currentLocation));
        setEmptyState(false);
      }

      if (!currentLocation && !ecosystem) {
        setEmptyState(true);
      }
      setIsOnEditableMode(false);
    }
  }, [pathname, ecosystems, userData.id]);

  useLayoutEffect(() => {
    setIsOnEditableMode(!!isNewEcosystem);
  }, [isNewEcosystem]);

  useEffect(() => {
    if (isOpen) {
      setStep(currentStep);
    }
  }, [isOpen, noSuggestions, currentStep]);

  useEffect(() => {
    if ((!pathname.split('/')[2]) || (currentStep === 4 && !isOpen)) {
      setCurrentStep(0);
    }
    if (isOpen) {
      if (currentStep < 1 && step > currentStep) {
        setIsOnEditableMode(false);
      } else if (currentStep > 1) {
        setIsOnEditableMode(true);
      }
      if (currentStep === 0 && pathname.split('/')[2]) {
        setDisabledActions(false);
      }
      setSteps([
        {
          disableActions: !pathname.split('/')[2],
          selector: '[data-cy="ecosystems-sidebar"]',
          content: <TextTour>As an Admin you can edit, delete and include any ecosystem. If you click in an
            ecosystem, you will find all the skills related to each one of them.
          {!pathname.split('/')[2] ? <Warning>To continue, please click on any ecosystem.</Warning>
            : <Success>You can continue with the tour.</Success>
          }</TextTour>,
        },
        // {
        //   disableActions: currentStep === 1 && noSuggestions,
        //   selector: '[data-cy="inbox-button"]',
        //   content: <TextTour>Here you can open the suggestions.</TextTour>,
        // },
        // {
        //   selector: '[data-cy="suggestions-list"]',
        //   content: <TextTour>Here you can open the suggestions.</TextTour>,
        // },
        {
          disableActions: !isOnEditableMode,
          selector: !isOnEditableMode ? '[data-cy="edit-skill-button"]' : '[data-cy="save-skill-button"]',
          content: <TextTour>You may edit,
            {!isOnEditableMode ? <Warning>To continue, please click on the <em>Edit</em> button.</Warning>
              : <Success>You can continue with the tour.</Success>
            } </TextTour>,
        },
        {
          selector: '[data-cy="skill-container-tour-0"]',
          content: <TextTour>Delete,</TextTour>,
        },
        {
          selector: '[data-cy="add-skill"]',
          content: <TextTour>And include any skill name.</TextTour>,
        },
        {
          highlightedSelectors: [
            '[data-cy="skill-container-tour-0"]',
            '[data-cy="skill-level-container-0"]',
            '[data-cy="skill-level-container-1"]',
            '[data-cy="skill-level-container-2"]',
          ],
          content: <TextTour>All skills are rated by expertise levels - each level has their own description; As an Admin you are also able to modify any of them.</TextTour>,
        },
        // {
        //   selector: '[data-cy="icon-add"]',
        //   content: <TextTour>Here you can insert an ecosystem</TextTour>,
        // },
      ]);
    }
  }, [isOpen, noSuggestions, currentStep, isOnEditableMode, pathname.split('/')[2]]);

  const handleEcosystemClick = selectedId => {
    const ecosystem = ecosystems.find(({ id }) => id === selectedId);
    setIsNewEcosystem(false);
    history.push(`/ecosystem/${selectedId}`);
  };

  const newEcosystemMode = () => {
    setIsNewEcosystem(true);
    setIsOnEditableMode(!!isNewEcosystem);
    setSelectedEcosystem(newEcosystem);
  };

  const addNewSkill = () => {
    setSelectedEcosystem({ ...selectedEcosystem,
      skills: [...selectedEcosystem.skills, {
        id: 0,
        name: '',
        description: '',
        levels: [
          { level: 1, levelDescription: '' },
          { level: 2, levelDescription: '' },
          { level: 3, levelDescription: '' },
          { level: 4, levelDescription: '' },
        ],
      }],
    });
    setIsNewSkill(true);
  };

  const handleNewEcosystemAdmin = newEco => {
    setNewEcosystem(newEco);
    setSelectedEcosystem(newEco);
    setIsNewEcosystem(true);
  };

  const isThereAnyEmptySkillName = currentEcosystem => currentEcosystem?.skills.some(skill => skill.name === '');
  const isThereAnyEmptyLevelDescription = currentEcosystem => currentEcosystem.skills.some(skill => skill.levels.some(level => level.levelDescription === ''));
  const invalidData = currentEcosystem => currentEcosystem.name === '' || isThereAnyEmptySkillName(currentEcosystem) || isThereAnyEmptyLevelDescription(currentEcosystem);
  const setError = currentEcosystem => { setIsThereAnyError(invalidData(currentEcosystem)); setShowPopUp(true); };

  const handleSave = () => {
    if (isNewEcosystem) {
      setError(newEcosystem);
      if (!invalidData(newEcosystem)) {
        dispatch(upsertEcosystemAsync(newEcosystem))
          .then(({ payload }) => {
            dispatch(fetchEcosystemsAsync())
              .then(() => {
                if (payload) {
                  setSelectedEcosystem(payload[0]);
                  handleEcosystemClick(payload[0]?.id);
                } else {
                  setSelectedEcosystem(newEcosystem?.id);
                  handleEcosystemClick(newEcosystem?.id);
                }
              });
            setNewEcosystem({
              name: '',
              skills: [{
                name: '',
                description: '',
                levels: [
                  { level: 1, levelDescription: '' },
                  { level: 2, levelDescription: '' },
                  { level: 3, levelDescription: '' },
                  { level: 4, levelDescription: '' },
                ],
              }],
            });
            setShowPopUp(true);
            setTimeout(() => {
              setShowPopUp(false);
            }, 2000);
            setIsOnEditableMode(false);
          })
          .catch(err => console.error(err));
      }
    }

    if (isNewSkill) {
      setError(newEcosystem);
      if (!invalidData(newEcosystem)) {
        const newSkills = newEcosystem.skills.filter(skill => !skill.id);
        newSkills.forEach(skill => {
          skill.ecosystem = selectedEcosystem.id;
          dispatch(upsertSkillAsync(skill))
            .then(() => dispatch(fetchEcosystemsAsync()))
            .catch(err => console.error(err));
        });
      }
    }
  };

  const cancelNewEcosystem = () => {
    setIsNewEcosystem(false);
    setIsOnEditableMode(false);
    setSelectedEcosystem(currEcosystem);
  };

  const deleteNewSkill = newCurrentEcosystem => {
    setSelectedEcosystem(newCurrentEcosystem);
    setNewEcosystem(newCurrentEcosystem);
  };

  const handleEdit = () => {
    setIsOnEditableMode(true);
    setDisabledActions(false);
  };

  const handleInbox = () => {
    setNoSuggestions(!noSuggestions);
    setDisabledActions(false);
  };

  return (
    <AdminPageStyled data-cy="admin-page" noSuggestions={noSuggestions}>
      <SuggestionsInbox noSuggestions={noSuggestions} suggestions={suggestions}/>
      <EcosystemsContainer>
        <EcosystemsSideBar
          ecosystems={ecosystems}
          loading={loading}
          noSuggestions={noSuggestions}
          selected={selectedEcosystem?.id}
          show={isOnEditableMode}
          onNewEcosystem={newEcosystemMode}
        />
        <EcosystemMain
          deleteNewSkill={deleteNewSkill}
          ecosystem={selectedEcosystem}
          emptyState={emptyState}
          handleNewEcosystemAdmin={handleNewEcosystemAdmin}
          isNewEcosystem={isNewEcosystem}
          isThereAnyError={isThereAnyError}
          noSuggestions={noSuggestions}
          show={isOnEditableMode}
          onNewEcosystem={newEcosystemMode}
          onNewSkill={addNewSkill}
        />
      </EcosystemsContainer>
      { showPopUp && <PopUp isSuccess={!isThereAnyError} />}
      <Footer>
        <StyledIcon data-cy="inbox-button" icon="email" show={!isOnEditableMode} onClick={handleInbox} />
        {!emptyState && <EditButton data-cy="edit-skill-button" show={!isOnEditableMode} onClick={handleEdit}>Edit</EditButton>}
        <SaveCancelButton data-cy="cancel-skill-button" show={isOnEditableMode} onClick={cancelNewEcosystem}>Cancel</SaveCancelButton>
        <SaveCancelButton save data-cy="save-skill-button" show={isOnEditableMode} onClick={handleSave}>Save</SaveCancelButton>
      </Footer>
    </AdminPageStyled>
  );
};
