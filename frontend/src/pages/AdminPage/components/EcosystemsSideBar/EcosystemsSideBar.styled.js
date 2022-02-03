import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserRowWrapper } from '../../../../app/commons/ScrollWrapper/ScrollWrapper.styled';
import Icon from '../../../../app/commons/icon/icon';

const EcosystemBarStyled = styled.div`
  height: 100%;
`;

const EcosystemsSideBarStyled = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  font-family: ${({ theme }) => theme.fonts.poppins};
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
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? 'bold' : '400')};
  letter-spacing: 0.5px;
  line-height: 24px;
  text-decoration: none;
  color: ${({ selected, theme }) => (selected ? theme.colors.primaryColor : theme.colors.black)};
  background: ${({ selected, theme }) => (selected ? theme.colors.primaryColorWithOpacity : 'transparent')};

  &:hover {
    cursor: pointer;
  }
`;

const EcosystemScroller = styled(UserRowWrapper)`
  display: flex;
  flex-direction: column;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primaryColor} transparent;

  &::-webkit-scrollbar {
    display: block !important;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    width: 4px;
    max-height: 178px;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    border-radius: 8px;
  }
`;

const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 40px;
  width: 95%;
  margin: 10px auto;
  border: none;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 50px;
  color: ${({ theme }) => theme.colors.grey1};
  font-family: ${({ theme }) => theme.fonts.poppins};
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  border-radius: 8px;
`;

const IconStyled = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  transform: rotate(90deg);
  width: 14px;
  height: 14px;
  margin: auto;
`;

const Image = styled.img`
  display: block;
  width: 80px;
  margin: 10vh auto 10px auto;
`;

const NoEcosystemsMessage = styled.p`
  display: block;
  margin: auto;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 14px;
  text-align: center;
`;

const NoEcosystems = styled.div`
  height: 100%;
`;

export {
  EcosystemBarStyled,
  EcosystemsSideBarStyled,
  EcosystemHeaderStyled,
  EcosystemElementStyled,
  EcosystemScroller,
  IconStyled,
  Image,
  NoEcosystems,
  NoEcosystemsMessage,
  StyledInput,
  StyledInputWrapper,
};
