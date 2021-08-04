import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import EcosystemsSideBar from './components/EcosystemsSideBar/EcosystemsSideBar';
import AdminPageStyled from './AdminPage.styled';
import { fetchSuggestionsAsync } from '../../redux/suggestions/suggestionsSlice';
import { fetchEcosystemsAsync } from '../../redux/ecosystems/ecosystemsSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuggestionsAsync());
    dispatch(fetchEcosystemsAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPageStyled
      data-cy="admin-page"
    >
      <SuggestionsInbox />
      <EcosystemsSideBar />
    </AdminPageStyled>
  );
};

export default HomePage;
