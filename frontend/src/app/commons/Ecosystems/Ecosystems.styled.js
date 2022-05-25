import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserRowWrapper } from '../ScrollWrapper/ScrollWrapper.styled';
import { Icon } from '../Icon';

const EcosystemColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  font-family: ${({ theme }) => theme.fonts.poppins};
`;

const ButtonStyled = styled(Link)`
  display: flex;
  align-items: center;
  padding: 8px 25px;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? 'bold' : '400')};
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: start;
  text-decoration: none;
  border: 0;
  color: ${({ selected, theme }) => (selected ? theme.colors.primaryColor : theme.colors.black)};
  background: ${({ selected, theme }) => (selected ? theme.colors.primaryColorWithOpacity : 'transparent')};

  &:hover {
    cursor: pointer;
  }
`;

const NumberCircle = styled.div`
  display: flex;
  justify-content: center;
  height: 15px;
  width: 15px;
  margin-left: 10px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primaryColor};
`;

const NumberText = styled.span`
  font-size: 9px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.white};
`;

const TitleColumn = styled.h4`
  padding: 20px 25px;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
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
    background-color: ${({ theme }) => theme.colors.primaryColor};
    width: 4px;
    max-height: 178px;
    border-radius: 8px;
  }
`;

const StyledInputWrapper = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 10px auto;
  border: none;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  padding-left: 50px;
  width: 100%;
  height: 100%;
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
  EcosystemColumn,
  ButtonStyled,
  NumberCircle,
  NumberText,
  TitleColumn,
  EcosystemScroller,
  IconStyled,
  Image,
  NoEcosystemsMessage,
  NoEcosystems,
  StyledInput,
  StyledInputWrapper,
};
