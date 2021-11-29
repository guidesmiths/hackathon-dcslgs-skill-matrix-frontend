/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import EcosystemsSideBar from './components/EcosystemsSideBar/EcosystemsSideBar';
import EcosystemMain from './components/EcosystemMain/EcosystemMain';
import { fetchSuggestionsAsync, selectAllSuggestions } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync, insertEcosystemAsync, selectAllEcosystems } from '../../redux/ecosystems/ecosystemsSlice';
import { fetchUserInfoAsync } from '../../redux/user/userSlice';
import { insertSkillAsync } from '../../redux/skills/skillsSlice';
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
  useLayoutEffect(() => {
    setIsOnEditableMode(!!isNewEcosystem);
  }, [isNewEcosystem]);

  const handleEcosystemClick = selectedId => {
    const ecosystem = ecosystems.find(({ id }) => id === selectedId);
    setIsNewEcosystem(false);
    setSelectedEcosystem(ecosystem);
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

  const handleNewEcosystemAdmin = newEco => setNewEcosystem(newEco);

  const isThereAnyEmptySkillName = newEcosystem.skills.some(skill => skill.name === '');
  const isThereAnyEmptyLevelDescription = newEcosystem.skills.some(skill => skill.levels.some(level => level.levelDescription === ''));

  const handleSave = () => {
    setIsThereAnyError(newEcosystem.name === '' || isThereAnyEmptySkillName || isThereAnyEmptyLevelDescription);
    if (!(newEcosystem.name === '' || isThereAnyEmptySkillName || isThereAnyEmptyLevelDescription)) {
      if (isNewEcosystem) {
        dispatch(insertEcosystemAsync(newEcosystem))
          .then(() => setRefresh(true));
        setSelectedEcosystem(null);
      }

      if (isNewSkill) {
        const newSkill = selectedEcosystem.skills.find(skill => !skill.id);
        newSkill.ecosystem = selectedEcosystem.id;
        dispatch(insertSkillAsync(newSkill))
          .then(() => setRefresh(true));
        setSelectedEcosystem(null);
      }
    }
    setShowPopUp(true);
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
    handleEcosystemClick(1);
  }, [ecosystems]);

  useEffect(() => {
    setNoSuggestions(suggestions.length === 0);
  }, [suggestions]);

  return (
    <AdminPageStyled data-cy="admin-page" noSuggestions={noSuggestions}>
      <SuggestionsInbox noSuggestions={noSuggestions} suggestions={suggestions}/>
      <EcosystemsSideBar
        ecosystems={ecosystems}
        noSuggestions={noSuggestions}
        show={isOnEditableMode}
        onEcosystemSelected={handleEcosystemClick}
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
