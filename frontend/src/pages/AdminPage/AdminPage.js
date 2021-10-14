import React, { useEffect, useState, Fragment, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import EcosystemsSideBar from './components/EcosystemsSideBar/EcosystemsSideBar';
import EcosystemMain from './components/EcosystemMain/EcosystemMain';
import { fetchSuggestionsAsync } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync, insertEcosystemAsync, selectAllEcosystems } from '../../redux/ecosystems/ecosystemsSlice';
import { AdminPageStyled, EditButton, SaveCancelButton } from './AdminPage.styled';
import Footer from '../../app/commons/Footer/Footer';

// Do we need this?
const newEcosystemEmpty = {
  name: '',
  skills: [{
    name: '',
    description: '',
    levels: [
      { level: 1, description: '' },
      { level: 2, description: '' },
      { level: 3, description: '' },
      { level: 4, description: '' },
    ],
  }],
};

const HomePage = () => {
  const dispatch = useDispatch();
  const ecosystems = useSelector(selectAllEcosystems);
  const [selectedEcosystem, setSelectedEcosystem] = useState(null);
  const [isNewEcosystem, setIsNewEcosystem] = useState(null);
  const [isOnEditableMode, setIsOnEditableMode] = useState(null);
  const [beforeEdit, setBeforeEdit] = useState(null);
  const [newEcosystem, setNewEcosystem] = useState(newEcosystemEmpty);

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
    setSelectedEcosystem(newEcosystem);
  };

  const handleNewEcosystemAdmin = newEco => setNewEcosystem(newEco);

  const saveNewEcosystem = () => dispatch(insertEcosystemAsync(newEcosystem));

  const cancelNewEcosystem = () => {
    setIsNewEcosystem(false);
    setIsOnEditableMode(false);
    setSelectedEcosystem(beforeEdit);
  };

  useEffect(() => {
    dispatch(fetchSuggestionsAsync());
    dispatch(fetchEcosystemsAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <AdminPageStyled data-cy="admin-page">
        <SuggestionsInbox />
        <EcosystemsSideBar ecosystems={ecosystems} show={isOnEditableMode} onEcosystemSelected={handleEcosystemClick} onNewEcosystem={newEcosystemMode}/>
        <EcosystemMain ecosystem={selectedEcosystem} handleNewEcosystemAdmin={handleNewEcosystemAdmin} isNewEcosystem={isNewEcosystem} show={isOnEditableMode} />
      </AdminPageStyled>
      <Footer>
        <EditButton data-cy="edit-skill-button" show={!isOnEditableMode} onClick={() => setIsOnEditableMode(true)}>Edit</EditButton>
        <SaveCancelButton data-cy="cancel-skill-button" show={isOnEditableMode} onClick={cancelNewEcosystem}>Cancel</SaveCancelButton>
        <SaveCancelButton data-cy="save-skill-button" show={isOnEditableMode} onClick={saveNewEcosystem}>Save</SaveCancelButton>
      </Footer>
    </Fragment>
  );
};

export default HomePage;
