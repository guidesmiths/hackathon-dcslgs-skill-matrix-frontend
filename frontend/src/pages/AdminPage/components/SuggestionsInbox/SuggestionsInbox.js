import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllSuggestions,
} from '../../../../redux/suggestions/suggestionsSlice';
import SuggestionCard from './SuggestionCard/SuggestionCard';
import {
  SuggestionInboxStyled, SuggestionCardsStyled, StyledSlider,
} from './SuggestionsInbox.styled';

const SuggestionsInbox = () => {
  const suggestions = useSelector(selectAllSuggestions);
  const [position, setPosition] = useState(0);
  const ref = useRef(null);
  const scroll = e => {
    if (position < e.target.value) {
      ref.current.scrollLeft += 300;
    } else {
      ref.current.scrollLeft -= 300;
    }
    setPosition(e.target.value);
  };
  return (
    <SuggestionInboxStyled data-cy="suggestions-inbox">
      <SuggestionCardsStyled ref={ref}>
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
      <StyledSlider type="range" min="0" max="100" value={position} step="0.1" onChange={e => scroll(e)}/>
    </SuggestionInboxStyled>
  );
};

export default SuggestionsInbox;
