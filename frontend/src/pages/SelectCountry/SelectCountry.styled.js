import styled from 'styled-components';
import { StyledBackground } from '../HomePage/HomePage.styled';
import Button from '../../app/commons/Button/Button';

const Header = styled(StyledBackground)`
  position: relative;
  height: 200px;
  width: 100%;
  padding-top: 72px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 90%;
  margin-left: 100px;

  @media (max-width: 1140px) {
    margin-left: 60px;
  }
`;

const Heading = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-weight: ${({ weight }) => weight};

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
  top: 152px;
  right: 80px;
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
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey3};
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: 1140px) {
    height: 80px;
  }
`;

const Label = styled.p`
  font-family: ${({ theme }) => theme.fonts.poppins};
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
  border: 1px solid ${({ theme }) => theme.colors.grey2};
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
  z-index: 99;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  opacity: 0;
  cursor: pointer;

  &:hover ~ ${RadioButtonLabel} {
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    &::after {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      margin: 6px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 50%;
    }
  }

  &:checked + ${Item} {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }

  &:checked + ${RadioButtonLabel} {
    background: white;
    border: 1px solid ${({ theme }) => theme.colors.primaryColor};

    &::after {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      margin: 6px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 50%;
    }
  }
`;

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

export {
  Header,
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
