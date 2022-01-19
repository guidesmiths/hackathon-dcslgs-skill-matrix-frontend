/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { useTour } from '@reactour/tour';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import EcosystemsSideBar from './components/EcosystemsSideBar/EcosystemsSideBar';
import EcosystemMain from './components/EcosystemMain/EcosystemMain';
import { fetchSuggestionsAsync, selectAllSuggestions } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync, upsertEcosystemAsync, selectAllEcosystems, fetchSkillByEcosystemIdAsync, selectCurrentEcosystem } from '../../redux/ecosystems/ecosystemsSlice';
import { selectUserData } from '../../redux/user/userSlice';
import { upsertSkillAsync } from '../../redux/skills/skillsSlice';
import { AdminPageStyled, EditButton, SaveCancelButton, ShowSuggestions } from './AdminPage.styled';
import PopUp from '../../app/commons/PopUp/PopUp';
import Footer from '../../app/commons/Footer/Footer';
import TextTour from '../../app/commons/Tour/TextTour';

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

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { currentStep, isOpen, setDisabledActions, setSteps } = useTour();
  const [step, setStep] = useState(0);

  const ecosystems = useSelector(selectAllEcosystems);
  const suggestions = useSelector(selectAllSuggestions);
  const userData = useSelector(selectUserData);
  const [selectedEcosystem, setSelectedEcosystem] = useState(null);
  const [noSuggestions, setNoSuggestions] = useState(true);
  const [isNewEcosystem, setIsNewEcosystem] = useState(false);
  const [isNewSkill, setIsNewSkill] = useState(false);
  const [isOnEditableMode, setIsOnEditableMode] = useState(null);
  const [newEcosystem, setNewEcosystem] = useState(newEcosystemEmpty);
  const [isThereAnyError, setIsThereAnyError] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const { pathname } = useLocation();
  const currEcosystem = useSelector(selectCurrentEcosystem);

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
    if (!ecosystems.length) {
      dispatch(fetchEcosystemsAsync());
    }
  }, [ecosystems]);

  useEffect(() => {
    if (ecosystems.length) {
      const currentLocation = +pathname.split('/')[2];
      const ecosystem = ecosystems.find(({ id }) => id === currentLocation);

      if (currentLocation && userData.id) {
        dispatch(fetchSkillByEcosystemIdAsync(currentLocation));
      }

      if (!currentLocation && !ecosystem) {
        history.push(`/ecosystem/${ecosystems[0]?.id}`);
      }
      setIsOnEditableMode(false);
    }
  }, [pathname, ecosystems, userData.id]);

  useLayoutEffect(() => {
    setIsOnEditableMode(!!isNewEcosystem);
  }, [isNewEcosystem]);

  useEffect(() => {
    if (isOpen) {
      console.log(currentStep);
      if (currentStep > 1) {
        setNoSuggestions(false);
      }
      // } else if (currentStep === 1 && !noSuggestions && step > currentStep) {
      //   setNoSuggestions(true);
      // }

      setStep(currentStep);
    }
  }, [isOpen, noSuggestions, currentStep]);

  useEffect(() => {
    if (isOpen) {
      if (currentStep <= 3 && step > currentStep) {
        setIsOnEditableMode(false);
      } else if (currentStep > 3) {
        setIsOnEditableMode(true);
      }
      setSteps([
        {
          selector: '[data-cy="ecosystems-sidebar"]',
          content: <TextTour>Here you can see the skill</TextTour>,
        },
        {
          disableActions: currentStep === 1 && noSuggestions,
          selector: '[data-cy="inbox-button"]',
          content: <TextTour>Here you can open the suggestions</TextTour>,
        },
        {
          selector: '[data-cy="suggestions-list"]',
          content: <TextTour>Here you can open the suggestions</TextTour>,
        },
        {
          disableActions: currentStep === 3 && !isOnEditableMode,
          selector: !isOnEditableMode ? '[data-cy="edit-skill-button"]' : '[data-cy="save-skill-button"]',
          content: <TextTour>Here you can able the edit mode</TextTour>,
        },
        {
          selector: '[data-cy="icon-add"]',
          content: <TextTour>Here you can insert an ecosystem</TextTour>,
        },
        {
          selector: '[data-cy="skill-container-tour-0"]',
          content: <TextTour>Here you can able the edit mode</TextTour>,
        },
        {
          selector: '[data-cy="add-skill"]',
          content: <TextTour>Here you can insert an ecosystem</TextTour>,
        },
        {
          selector: '[data-cy="delete-ecosystem-button"]',
          content: <TextTour>Here you can delete an ecosystem</TextTour>,
        },
      ]);
    }
  }, [isOpen, noSuggestions, currentStep, isOnEditableMode]);

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
                setSelectedEcosystem(payload);
                handleEcosystemClick(payload[0]?.id);
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
          })
          .then(() => {
            setShowPopUp(true);
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
        setSelectedEcosystem(null);
      }
    }

    setIsOnEditableMode(false);
  };

  const cancelNewEcosystem = () => {
    setIsNewEcosystem(false);
    setIsOnEditableMode(false);
    setSelectedEcosystem(currEcosystem);
  };

  return (
    <AdminPageStyled data-cy="admin-page" noSuggestions={noSuggestions}>
      <SuggestionsInbox noSuggestions={noSuggestions} suggestions={suggestions}/>
      <EcosystemsSideBar
        ecosystems={ecosystems}
        noSuggestions={noSuggestions}
        selected={selectedEcosystem?.id}
        show={isOnEditableMode}
        onNewEcosystem={newEcosystemMode}
      />
      <EcosystemMain
        ecosystem={selectedEcosystem}
        handleNewEcosystemAdmin={handleNewEcosystemAdmin}
        isNewEcosystem={isNewEcosystem}
        isThereAnyError={isThereAnyError}
        noSuggestions={noSuggestions}
        show={isOnEditableMode}
        onNewEcosystem={newEcosystemMode}
        onNewSkill={addNewSkill}
      />
      { showPopUp && <PopUp isSuccess={!isThereAnyError} onCloseClick={() => setShowPopUp(false)}/>}
      <Footer>
        <ShowSuggestions data-cy="inbox-button" show={!isOnEditableMode} onClick={() => { setNoSuggestions(!noSuggestions); setDisabledActions(false); }}>Inbox</ShowSuggestions>
        <EditButton data-cy="edit-skill-button" show={!isOnEditableMode} onClick={() => { setIsOnEditableMode(true); setDisabledActions(false); }}>Edit</EditButton>
        <SaveCancelButton data-cy="cancel-skill-button" show={isOnEditableMode} onClick={cancelNewEcosystem}>Cancel</SaveCancelButton>
        <SaveCancelButton save data-cy="save-skill-button" show={isOnEditableMode} onClick={handleSave}>Save</SaveCancelButton>
      </Footer>
    </AdminPageStyled>
  );
};

export default HomePage;
