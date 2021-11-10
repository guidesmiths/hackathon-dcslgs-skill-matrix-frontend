import React, { useEffect, useRef, useState } from 'react';
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
  const [showScroll, setShowScroll] = useState(false);
  const ref = useRef(null);

  const scroll = e => {
    if (position < e.target.value) {
      ref.current.scrollLeft += 350;
    } else {
      ref.current.scrollLeft -= 350;
    }
    setPosition(e.target.value);
  };

  useEffect(() => {
    setShowScroll(ref.current?.offsetWidth < ref.current?.scrollWidth);
  }, [ref.current?.scrollWidth]);

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
      {showScroll && <StyledSlider max="120" min="0" step="0.1" type="range" value={position} onChange={scroll}/>}
    </SuggestionInboxStyled>
  );
};

export default SuggestionsInbox;
