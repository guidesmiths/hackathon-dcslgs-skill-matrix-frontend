/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const UserRowWrapper = styled.div`
  overflow-y: scroll;
  max-height: ${props => props.height}vh;
  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }
  @media (max-height: 1190px) {
    max-height: ${props => props.height - 1}vh;
  }
  @media (max-height: 1180px) {
    max-height: ${props => props.height - 3}vh;
  }  
  @media (max-height: 1150px) {
    max-height: ${props => props.height - 5}vh;
  }
  @media (max-height: 1050px) {
    max-height: ${props => props.height - 7}vh;
  }
  @media (max-height: 1000px) {
    max-height: ${props => props.height - 10}vh;
  }
  @media (max-height: 920px) {
    max-height: ${props => props.height - 15}vh;
  }
  @media (max-height: 850px) {
    max-height: ${props => props.height - 20}vh;
  }
  @media (max-height: 750px) {
    max-height: ${props => props.height - 25}vh;
  }
  @media (max-height: 700px) {
    max-height: ${props => props.height - 30}vh;
  }
  @media (max-height: 650px) {
    max-height: ${props => props.height - 35}vh;
  }
`;
