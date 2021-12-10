import styled from 'styled-components';
import { StyledBackground } from '../HomePage/HomePage.styled';
import Button from '../../app/commons/Button/Button';

const Header = styled(StyledBackground)`
  position: relative;
  width: 100%;
  height: 200px;
`;

const TextWrapper = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 100px;
  @media (max-width: 1140px) {
    margin-left: 60px;
  }
`;

const Heading = styled.h1`
  color: white;
  font-size: 40px;
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: ${props => props.weight};
  margin: 0;
  @media (max-width: 1370px) {
    font-size: 36px;
  }
  @media (max-width: 1224px) {
    font-size: 30px;
  }
  @media (max-width: 996px) {
    font-size: 28px;
  }
`;

const ContanerWrapper = styled.div`
  position: absolute;
  right: 80px;
  top: 80px;
  width: 500px;
  @media (max-width: 1370px) {
    width: 400px;
  }
  @media (max-width: 1224px) {
    width: 350px;
  }
  @media (max-width: 1140px) {
    width: 300px;
    right: 40px;
  }
`;

const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;
const Country = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #EFEFEF;
  background-color: ${props => props.theme.colors.white};
  @media (max-width: 1140px) {
    height: 80px;
  }
`;

const Label = styled.p`
  font-family: ${props => props.theme.fonts.poppins};
  font-size: 16px;
  margin: 0 6px;
`;

const Image = styled.img`
  width: 24px;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  width: 150px;
  margin-bottom: 10px;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: 99;
  cursor: pointer;
  width: 24px;
  height: 24px;
  margin-right: 10px;

  &:hover ~ ${RadioButtonLabel} {
    border: 1px solid ${props => props.theme.colors.primaryColor};
    &::after {
      content: "";
      display: block;
      background-color: ${props => props.theme.colors.primaryColor};
      border-radius: 50%;
      width: 12px;
      height: 12px;
       margin: 6px;
    }
  }
  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
  &:checked + ${RadioButtonLabel} {
    background: white;
    border: 1px solid ${props => props.theme.colors.primaryColor};
    &::after {
      content: "";
      display: block;
      background-color: ${props => props.theme.colors.primaryColor};
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
    }
  }
`;

const StyledButton = styled(Button)`
  margin: 10px 0; 
`;

export { Header,
  Heading,
  TextWrapper,
  ContanerWrapper,
  Container,
  Country,
  Item,
  Label,
  Image,
  RadioButton,
  RadioButtonLabel,
  StyledButton,
};
