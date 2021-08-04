import styled from 'styled-components';

import Icon from '../../../../app/commons/Icon/icon';

const SuggestionInboxStyled = styled.div`
  grid-area: suggestions;
  display: grid;
  grid-template-columns: 4fr 3fr 9fr 3fr 4fr;
  grid-template-rows: 3fr 9fr;
  grid-template-areas:
    ". ecosystems-number . employees-number ."
    "back-icon suggestion-cards suggestion-cards suggestion-cards forward-icon";
  height: 200px;
  border: 1px solid #aaa;
`;

const SuggestionCardsStyled = styled.div`
  grid-area: suggestion-cards;
  display: flex;
  margin: auto;
`;

const EcosystemsNumberStyled = styled.div`
  grid-area: ecosystems-number;
  place-self: end center;
`;

const EmployeesNumberStyled = styled.div`
  grid-area: employees-number;
  place-self: end center;
`;

const IconStyled = styled(Icon)`
  border: 0px;
  width: 10px;
  height: 10px;
  color: #4f4f4f;
  
  &:hover {
   cursor: pointer;
   color: black;
  }
`;

const BackIconStyled = styled(IconStyled)`
  grid-area: back-icon;
  place-self: center right;
`;

const ForwardIconStyled = styled(IconStyled)`
  grid-area: forward-icon;
  place-self: center left;
`;

export { SuggestionInboxStyled, BackIconStyled, ForwardIconStyled, SuggestionCardsStyled, EcosystemsNumberStyled, EmployeesNumberStyled };
