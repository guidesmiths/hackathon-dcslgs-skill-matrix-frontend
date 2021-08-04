import styled from 'styled-components';

import Icon from '../../../../../app/commons/Icon/icon';

const UserNameStyled = styled.p`
    margin: 0px;
    padding: 0px;
    width: 100%;
    font-size: 0.9rem;
`;

const SubjectStyled = styled.p`
    margin-top: 5px;
    padding: 0px;
    width: 100%;
    font-size: 0.8rem;
`;

const SuggestionCardStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 5px;
    border: 1px solid #aaa;
    padding: 10px;
    height: 100px;
    width: 185px;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

const IconsContainerStyled = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;

const IconStyled = styled(Icon)`
  border: 0px;
  width: 20px;
  height: 20px;
  color: #4f4f4f;
  margin: 0px 5px;
  
  &:hover {
   cursor: pointer;
   color: black;
  }
`;

export { SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled, IconStyled };
