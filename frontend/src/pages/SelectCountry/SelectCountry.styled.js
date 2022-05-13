import styled from 'styled-components';
import { StyledBackground } from '../HomePage/HomePage.styled';
import { Button } from '../../app/commons/Button';

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

const ContainerWrapper = styled.div`
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

const StyledButton = styled(Button)`
  margin: 10px 0;
`;

export {
  Header,
  Heading,
  TextWrapper,
  ContainerWrapper,
  Container,
  StyledButton,
};
