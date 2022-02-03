import styled from 'styled-components';

const SuggestionInboxStyled = styled.div`
  grid-area: suggestions;
  display: flex;
  height: ${({ noSuggestions }) => (noSuggestions ? '90px' : '270px')};
  min-height: ${({ noSuggestions }) => (!noSuggestions && '250px')};
  background: ${({ theme }) => theme.colors.backgroundGradient};
  position: relative;
`;

const SuggestionCardsStyled = styled.div`
  display: flex;
  margin: 30px auto 40px;
  padding: 10px 0;
  overflow: hidden;
  width: 95%;
  height: max-content;
`;

const StyledSlider = styled.input`
  z-index: 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 70px;
  -webkit-appearance: none;
  width: 40%;
  height: 10px;
  background: white;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin: auto;
  border-radius: 5px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 60%;
    height: 10px;
    background: black;
    cursor: pointer;
    border-radius: 8px;
  }

  &::-moz-range-thumb {
    width: 60%;
    height: 8px;
    background: black;
    cursor: pointer;
    border-radius: 8px;
  }
`;

export { SuggestionInboxStyled, SuggestionCardsStyled, StyledSlider };
