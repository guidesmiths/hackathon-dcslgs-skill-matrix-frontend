import styled from 'styled-components';

import Icon from '../../../../app/commons/Icon/icon';

const EcosystemsSideBarStyled = styled.div`
  grid-area: ecosystems-sidebar;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #aaa;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 0px;
`;

const EcosystemHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  border-bottom: 2px solid #aaa;
  font-weight: bold;
`;

const EcosystemElementStyled = styled.div`
  padding: 20px 25px;

  &:hover {
    background: #f4f4f4;
    cursor: pointer;
  }
`;

const PlusIconStyled = styled(Icon)`
  border: 0px;
  width: 10px;
  height: 10px;
  color: #4f4f4f;
  
  &:hover {
   color: black;
   cursor: pointer;
  }
`;

export {
  EcosystemsSideBarStyled,
  EcosystemHeaderStyled,
  EcosystemElementStyled,
  PlusIconStyled,
};
