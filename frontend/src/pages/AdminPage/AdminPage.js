import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SuggestionsInbox from './components/SuggestionsInbox/SuggestionsInbox';
import AdminPageStyled from './AdminPage.styled';
import { fetchSuggestionsAsync } from '../../redux/suggestions/suggestionsSlice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSuggestionsAsync());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AdminPageStyled
      data-cy="admin-page"
    >
      <SuggestionsInbox />
    </AdminPageStyled>
  );
};

export default HomePage;
