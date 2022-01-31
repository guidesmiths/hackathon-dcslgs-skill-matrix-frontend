import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UserRowWrapper } from '../ScrollWrapper/ScrollWrapper.styled';
import Icon from '../icon/icon';

const EcosystemColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  font-family: ${props => props.theme.fonts.poppins};
`;

const ButtonStyled = styled(Link)`
  padding: 8px 25px;
  font-size: 14px;
  font-weight: ${props => (props.selected ? 'bold' : '400')};
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: start;
  text-decoration: none;
  border: 0;
  color: ${props => (props.selected ? props.theme.colors.primaryColor : props.theme.colors.black)};
  background: ${props => (props.selected ? props.theme.colors.primaryColorWithOpacity : 'transparent')};

  &:hover {
    cursor: pointer;
  }
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
  border-radius: 8px;
  padding-left: 50px;
  width: 100%;
  height: 100%;
  color: #8D9091;
  font-family: ${params => params.theme.fonts.poppins};
  border: 1px solid #EFEFEF;
`;

const IconStyled = styled(Icon)`
  position: absolute;
  transform: rotate(90deg);
  width: 14px;
  height: 14px;
  top: 0;
  bottom: 0;
  left: 15px;
  margin: auto;
`;

const Image = styled.img`
  display:block;
  width: 80px;
  margin : 10vh auto 10px auto;
`;

const NoEcosystemsMessage = styled.p`
  display: block;
  margin : auto;
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 14px;
  text-align: center;
`;

const NoEcosystems = styled.div`
  height: 100%;
`;

export {
  EcosystemColumn,
  ButtonStyled,
  TitleColumn,
  EcosystemScroller,
  IconStyled,
  Image,
  NoEcosystemsMessage,
  NoEcosystems,
  StyledInput,
  StyledInputWrapper,
};
