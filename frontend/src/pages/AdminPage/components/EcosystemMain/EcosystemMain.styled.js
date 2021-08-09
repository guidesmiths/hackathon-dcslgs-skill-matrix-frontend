import styled from 'styled-components';

import Icon from '../../../../app/commons/Icon/icon';

const EcosystemContainerStyled = styled.div`
  grid-area: ecosystems-main;
  border: 1px solid #aaa;
  box-sizing: border-box;
  margin-left: 20px;
  margin-top: 20px;
  height: 100%;
`;

const EcosystemFallbackStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const EcosystemHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 30px;
  border-bottom: 2px solid #aaa;
`;

const EcosystemNameInputStyled = styled.input`
  padding: 10px;
`;

const IconsGroupStyled = styled.div`
  display: flex;
  align-items: center;
`;

const IconStyled = styled(Icon)`
  border: 0px;
  color: #4f4f4f;
  margin-left: 20px;
  width: 20px;
  height: 20px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export {
  EcosystemContainerStyled,
  EcosystemFallbackStyled,
  EcosystemHeaderStyled,
  EcosystemNameInputStyled,
  IconsGroupStyled,
  IconStyled,
};
