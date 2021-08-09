import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import EcosystemsSideBar from './components/EcosystemsSideBar/EcosystemsSideBar';
import AdminPageStyled from './AdminPage.styled';
import EcosystemMain from './components/EcosystemMain/EcosystemMain';
import { fetchSuggestionsAsync } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync, selectAllEcosystems } from '../../redux/ecosystems/ecosystemsSlice';

const newEcosystem = {
  id: 0,
  name: '',
  skills: [{
    id: 0,
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

  const handleEcosystemClick = selectedId => {
    const ecosystem = ecosystems.find(({ id }) => id === selectedId);
    setIsNewEcosystem(false);
    setSelectedEcosystem(ecosystem);
  };

  const handleNewEcosystem = () => {
    setIsNewEcosystem(true);
    setSelectedEcosystem(newEcosystem);
  };

  useEffect(() => {
    dispatch(fetchSuggestionsAsync());
    dispatch(fetchEcosystemsAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPageStyled data-cy="admin-page">
      <SuggestionsInbox />
      <EcosystemsSideBar ecosystems={ecosystems} onEcosystemSelected={handleEcosystemClick} onNewEcosystem={handleNewEcosystem}/>
      <EcosystemMain ecosystem={selectedEcosystem} isNewEcosystem={isNewEcosystem}/>
    </AdminPageStyled>
  );
};

export default HomePage;
