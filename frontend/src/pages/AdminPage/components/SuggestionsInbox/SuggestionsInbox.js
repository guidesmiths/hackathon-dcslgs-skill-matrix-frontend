import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectSuggestionsByRange,
  selectNumberOfSuggestions,
} from '../../../../redux/suggestions/suggestionsSlice';

import Icon from '../../../../app/commons/Icon/icon';
import SuggestionCard from './SuggestionCard/SuggestionCard';
import SuggestionInboxStyled from './SuggestionsInbox.styled';

const SuggestionsInbox = () => {
  const pageSize = 3;
  const numberOfPages = Math.ceil(
    useSelector(selectNumberOfSuggestions) / pageSize,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const suggestions = useSelector(
    selectSuggestionsByRange(
      (currentPage - 1) * pageSize,
      currentPage * pageSize,
    ),
  );

  const getNextPage = value => {
    const nextPage = currentPage + value;
    if (nextPage < 1) return 1;
    if (nextPage > numberOfPages) return numberOfPages;
    return nextPage;
  };

  return (
    <SuggestionInboxStyled data-cy="suggestions-inbox">
      <Icon
        icon="arrow_back_ios"
        onClick={() => setCurrentPage(getNextPage(-1))}
      />
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
      <Icon
        icon="arrow_forward_ios"
        onClick={() => setCurrentPage(getNextPage(1))}
      />
    </SuggestionInboxStyled>
  );
};

export default SuggestionsInbox;
