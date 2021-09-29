import styled from 'styled-components';

const SuggestionInboxStyled = styled.div`
  grid-area: suggestions;
  display: flex;
  height: 270px;
  min-height: 250px;
  border: 1px solid #aaa;
  background: ${props => props.theme.colors.backgroundGradient};
  position: relative;
`;

const SuggestionCardsStyled = styled.div`
  display: flex;
  margin: 40px 0 0;
  overflow-x: scroll;
  overflow-y: hidden;
  height:max-content;
  padding-bottom:30px;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const StyledSlider = styled.input`
  position: absolute;
  bottom: 70px;
  z-index: 1000;
  -webkit-appearance: none;
  width: 40%;
  height: 10px;
  background: white;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  left: 0;
  right: 0;
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
