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
import { AdminPageStyled, EditButton, SaveCancelButton } from './AdminPage.styled';
import Footer from '../../app/commons/Footer/Footer';
import PopUp from '../../app/commons/PopUp/PopUp';
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
  const [showPopUp, setShowPopUp] = useState(false);
  const [errorName, setErrorName] = useState();
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
  const verifyInputs = (inputs, type) => {
    let verified;
    switch (type) {
      case 'Ecosystem':
        inputs.forEach(x => {
          const item = x.levels.find(y => y.levelDescription === '');
          if (!x.name) {
            setErrorName('Skill name');
            verified = false;
          } else if (item) {
            verified = false;
            setErrorName(`Description ${item.level}`);
          } else {
            verified = true;
            setErrorName('');
          }
        });
        break;
      case 'Skill':
        if (!inputs.name) {
          verified = false;
          setErrorName('Skill name');
        } else if (inputs.levels.find(y => y.levelDescription === '')) {
          verified = false;
          const item = inputs.levels.find(y => y.levelDescription === '');
          setErrorName(`Description ${item.level} id:${inputs.id}`);
        } else {
          verified = true;
          setErrorName('');
        }
        break;
      default: return verified;
    }
    return verified;
  };

  const handleSave = () => {
    if (isNewEcosystem) {
      if (!newEcosystem.name) {
        setErrorName('Ecosystem name');
      } else if (newEcosystem.name) {
        verifyInputs(newEcosystem.skills, 'Ecosystem');
      } else {
        setErrorName('');
        dispatch(insertEcosystemAsync(newEcosystem))
          .then(() => setRefresh(true));
        setSelectedEcosystem(null);
        setIsOnEditableMode(null);
      }
    }
    if (isNewSkill) {
      const newSkill = selectedEcosystem.skills.find(skill => !skill.id);
      newSkill.ecosystem = selectedEcosystem.id;
      const verified = verifyInputs(newSkill, 'Skill');
      if (verified) {
        dispatch(insertSkillAsync(newSkill))
          .then(() => setRefresh(true));
        setSelectedEcosystem(null);
        setIsOnEditableMode(null);
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
    handleEcosystemClick(selectedEcosystem?.id);
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
        errorInput={errorName}
        handleNewEcosystemAdmin={handleNewEcosystemAdmin}
        isNewEcosystem={isNewEcosystem}
        show={isOnEditableMode}
        onNewEcosystem={newEcosystemMode}
        onNewSkill={addNewSkill}
        onRefresh={() => setRefresh(true)}
      />
      {showPopUp && <PopUp input={errorName} isSuccess={!errorName} onCloseClick={() => setShowPopUp(false)}/>}
      <Footer>
        <EditButton data-cy="edit-skill-button" show={!isOnEditableMode} onClick={() => setIsOnEditableMode(true)}>Edit</EditButton>
        <SaveCancelButton data-cy="cancel-skill-button" show={isOnEditableMode} onClick={cancelNewEcosystem}>Cancel</SaveCancelButton>
        <SaveCancelButton data-cy="save-skill-button" show={isOnEditableMode} onClick={handleSave}>Save</SaveCancelButton>
      </Footer>
    </AdminPageStyled>
  );
};

export default HomePage;
