import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllSuggestions,
} from '../../../../redux/suggestions/suggestionsSlice';

import SuggestionCard from './SuggestionCard/SuggestionCard';
import {
  SuggestionInboxStyled, SuggestionCardsStyled,
} from './SuggestionsInbox.styled';

const SuggestionsInbox = () => {
  const suggestions = useSelector(selectAllSuggestions);

  return (
    <SuggestionInboxStyled data-cy="suggestions-inbox">
      <SuggestionCardsStyled>
        {suggestions.map(({ userName, description, subject, id }, index) => (
          <SuggestionCard
            key={id}
            description={description}
            id={id}
            index={index}
            subject={subject}
            userName={userName}
          />
        ))}
      </SuggestionCardsStyled>
    </SuggestionInboxStyled>
  );
};

export default SuggestionsInbox;
