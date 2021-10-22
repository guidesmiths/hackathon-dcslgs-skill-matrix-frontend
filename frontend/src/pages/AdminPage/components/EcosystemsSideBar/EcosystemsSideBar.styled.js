import styled from 'styled-components';

const EcosystemsSideBarStyled = styled.div`
  z-index: 1;
  grid-area: ecosystems-sidebar;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  font-family: ${props => props.theme.fonts.poppins};
  box-sizing: border-box;
  margin: 20px auto 0;
  padding: 0px 0px 50px;
  overflow-y: scroll;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const EcosystemHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
  font-weight: 700;
  font-size: 24px;
`;

const EcosystemElementStyled = styled.div`
  padding: 8px 25px;
  font-size:14px;
  letter-spacing: 0.5px;
  line-height: 24px;
  &:last-child{
    padding-bottom: 30px;
  }
  &:hover {
    background: #f4f4f4;
    cursor: pointer;
  }
`;

export {
  EcosystemsSideBarStyled,
  EcosystemHeaderStyled,
  EcosystemElementStyled,
};
