/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import EcosystemsSideBar from './components/EcosystemsSideBar/EcosystemsSideBar';
import EcosystemMain from './components/EcosystemMain/EcosystemMain';
import { fetchSuggestionsAsync, selectAllSuggestions } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync, upsertEcosystemAsync, selectAllEcosystems } from '../../redux/ecosystems/ecosystemsSlice';
import { fetchUserInfoAsync } from '../../redux/user/userSlice';
import { upsertSkillAsync } from '../../redux/skills/skillsSlice';
import { AdminPageStyled, EditButton, SaveCancelButton, ShowSuggestions } from './AdminPage.styled';
import PopUp from '../../app/commons/PopUp/PopUp';
import Footer from '../../app/commons/Footer/Footer';

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
  const ecosystems = useSelector(selectAllEcosystems);
  const suggestions = useSelector(selectAllSuggestions);
  const [selectedEcosystem, setSelectedEcosystem] = useState(null);
  const [noSuggestions, setNoSuggestions] = useState(true);
  const [isNewEcosystem, setIsNewEcosystem] = useState(false);
  const [isNewSkill, setIsNewSkill] = useState(false);
  const [isOnEditableMode, setIsOnEditableMode] = useState(null);
  const [beforeEdit, setBeforeEdit] = useState(null);
  const [newEcosystem, setNewEcosystem] = useState(newEcosystemEmpty);
  const [refresh, setRefresh] = useState(false);
  const [isThereAnyError, setIsThereAnyError] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    setIsOnEditableMode(!!isNewEcosystem);
  }, [isNewEcosystem]);

  const handleEcosystemClick = selectedId => {
    const ecosystem = ecosystems.find(({ id }) => id === selectedId);
    setIsNewEcosystem(false);
    setSelectedEcosystem(ecosystem);
    history.push(`/ecosystem/${selectedId}`);
    if (ecosystem !== 0) {
      setBeforeEdit(ecosystem);
    }
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

  const isThereAnyEmptySkillName = currentEcosystem => currentEcosystem.skills.some(skill => skill.name === '');
  const isThereAnyEmptyLevelDescription = currentEcosystem => currentEcosystem.skills.some(skill => skill.levels.some(level => level.levelDescription === ''));
  const invalidData = currentEcosystem => currentEcosystem.name === '' || isThereAnyEmptySkillName(currentEcosystem) || isThereAnyEmptyLevelDescription(currentEcosystem);
  const setError = currentEcosystem => setIsThereAnyError(invalidData(currentEcosystem));

  const handleSave = () => {
    if (isNewEcosystem) {
      setError(newEcosystem);
      if (!invalidData(newEcosystem)) {
        dispatch(upsertEcosystemAsync(newEcosystem))
          .then(({ payload }) => {
            setSelectedEcosystem(payload);
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
            setRefresh(true);
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
            .then(() => setRefresh(true))
            .catch(err => console.error(err));
        });
        setSelectedEcosystem(null);
      }
    }

    setShowPopUp(true);
    setIsOnEditableMode(false);
  };

  const cancelNewEcosystem = () => {
    setIsNewEcosystem(false);
    setIsOnEditableMode(false);
    setSelectedEcosystem(beforeEdit);
  };

  useEffect(() => {
    dispatch(fetchUserInfoAsync(history));
    dispatch(fetchSuggestionsAsync());
    dispatch(fetchEcosystemsAsync());
  }, []);

  useEffect(() => {
    if (refresh) {
      dispatch(fetchEcosystemsAsync());
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    const currentLocation = +pathname.split('/')[2];
    const ecosystem = ecosystems.find(({ id }) => id === currentLocation);
    if (currentLocation && ecosystem) {
      setSelectedEcosystem(ecosystem);
    }
    if (!ecosystem && !currentLocation) {
      handleEcosystemClick(1);
    }
    if (ecosystem !== 0) {
      setBeforeEdit(ecosystem);
    }
    setIsOnEditableMode(false);
  }, [pathname, ecosystems]);

  useEffect(() => {
    setNoSuggestions(suggestions.length === 0);
  }, [suggestions]);

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
        onRefresh={() => setRefresh(true)}
      />
      { showPopUp && <PopUp isSuccess={!isThereAnyError} onCloseClick={() => setShowPopUp(false)}/>}
      <Footer>
        <ShowSuggestions data-cy="edit-skill-button" show={!isOnEditableMode} onClick={() => setNoSuggestions(!noSuggestions)}>Inbox</ShowSuggestions>
        <EditButton data-cy="edit-skill-button" show={!isOnEditableMode} onClick={() => setIsOnEditableMode(true)}>Edit</EditButton>
        <SaveCancelButton data-cy="cancel-skill-button" show={isOnEditableMode} onClick={cancelNewEcosystem}>Cancel</SaveCancelButton>
        <SaveCancelButton data-cy="save-skill-button" show={isOnEditableMode} onClick={handleSave}>Save</SaveCancelButton>
      </Footer>
    </AdminPageStyled>
  );
};

export default HomePage;
