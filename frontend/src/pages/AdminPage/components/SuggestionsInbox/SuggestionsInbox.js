import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectSuggestionsByRange,
  selectNumberOfSuggestions,
} from '../../../../redux/suggestions/suggestionsSlice';

import SuggestionCard from './SuggestionCard/SuggestionCard';
import {
  SuggestionInboxStyled, BackIconStyled, ForwardIconStyled, SuggestionCardsStyled, EcosystemsNumberStyled, EmployeesNumberStyled,
} from './SuggestionsInbox.styled';

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
      <EcosystemsNumberStyled>28 ECOSYSTEMS</EcosystemsNumberStyled>
      {currentPage !== 1 && (
        <BackIconStyled
          icon="arrow_back_ios"
          onClick={() => setCurrentPage(getNextPage(-1))}
        />)}
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
      {currentPage !== numberOfPages && (
        <ForwardIconStyled
          icon="arrow_forward_ios"
          onClick={() => setCurrentPage(getNextPage(1))}
        />)}
      <EmployeesNumberStyled>85 EMPLOYEES</EmployeesNumberStyled>
    </SuggestionInboxStyled>
  );
};

export default SuggestionsInbox;
