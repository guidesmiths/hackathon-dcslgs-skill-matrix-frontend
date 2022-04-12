import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { SuggestionCard } from './SuggestionCard';
import { SuggestionInboxStyled, SuggestionCardsStyled, StyledSlider } from './SuggestionsInbox.styled';

export const SuggestionsInbox = ({ suggestions, noSuggestions }) => {
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
    <SuggestionInboxStyled data-cy="suggestions-inbox" noSuggestions={noSuggestions}>
      {!noSuggestions && (
        <SuggestionCardsStyled ref={ref} data-cy="suggestions-list">
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
      )}
      {showScroll && <StyledSlider max="120" min="0" step="0.1" type="range" value={position} onChange={scroll}/>}
    </SuggestionInboxStyled>
  );
};

SuggestionsInbox.propTypes = {
  noSuggestions: PropTypes.bool.isRequired,
  suggestions: PropTypes.array.isRequired,
};
