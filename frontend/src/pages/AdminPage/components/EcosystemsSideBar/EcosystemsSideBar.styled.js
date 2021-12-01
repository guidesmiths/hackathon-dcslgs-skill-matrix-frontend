import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserRowWrapper } from '../../../../app/commons/ScrollWrapper/ScrollWrapper.styled';

const EcosystemsSideBarStyled = styled.div`
  z-index: 1;
  grid-area: ecosystems-sidebar;
  display: flex;
  flex-direction: column;
  height: 95%;
  width: 80%;
  font-family: ${props => props.theme.fonts.poppins};
  box-sizing: border-box;
  margin: 20px auto 0;
  padding: 0px 0px 50px;
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

const EcosystemElementStyled = styled(Link)`
  padding: 8px 25px;
  font-size:14px;
  font-weight: ${props => (props.selected ? 'bold' : '400')};
  letter-spacing: 0.5px;
  line-height: 24px;
  text-decoration: none;
  color: ${props => (props.selected ? props.theme.colors.primaryColor : props.theme.colors.black)};
  background: ${props => (props.selected ? props.theme.colors.primaryColorWithOpacity : 'transparent')};

  &:last-child{
    padding-bottom: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;
const EcosystemScroller = styled(UserRowWrapper)`
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.primaryColor} transparent;
  &::-webkit-scrollbar {
    display: block !important;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primaryColor};
    width: 4px;
    max-height: 178px;
    border-radius: 8px;
  }
`;
export {
  EcosystemsSideBarStyled,
  EcosystemHeaderStyled,
  EcosystemElementStyled,
  EcosystemScroller,
};
