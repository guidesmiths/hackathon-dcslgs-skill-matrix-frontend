import styled from 'styled-components';

const SuggestionInboxStyled = styled.div`
  grid-area: suggestions;
  display: flex;
  height: 270px;
  border: 1px solid #aaa;
  background: ${props => props.theme.colors.backgroundGradient};
`;

const SuggestionCardsStyled = styled.div`
  display: flex;
  margin: 40px 0 0;
  overflow-x: scroll;
  overflow-y: hidden;
  height:max-content;
  padding-bottom:20px;
  position: relative;

  &::-webkit-scrollbar {
    behavior: smooth;
    height:7px;
  };

  &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        height:8px;
        background-color: black;
   };

   ::-webkit-scrollbar-track-piece:end{
    margin-right: 320px; 
    background-color: white;
    border-radius: 0 10px 10px 0;
    width:50px
   };

   ::-webkit-scrollbar-track-piece:start{
    margin-left: 320px; 
    background-color: white;
    border-radius: 10px 0 0 10px;
   };
`;




export { SuggestionInboxStyled, SuggestionCardsStyled };
