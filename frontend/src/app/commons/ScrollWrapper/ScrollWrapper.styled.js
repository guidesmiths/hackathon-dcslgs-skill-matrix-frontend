/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const UserRowWrapper = styled.div`
  overflow-y: scroll;
  max-height: ${({ height }) => height}vh;
  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }
  @media (max-height: 1190px) {
    max-height: ${({ height }) => height - 1}vh;
  }
  @media (max-height: 1180px) {
    max-height: ${({ height }) => height - 3}vh;
  }
  @media (max-height: 1150px) {
    max-height: ${({ height }) => height - 5}vh;
  }
  @media (max-height: 1050px) {
    max-height: ${({ height }) => height - 7}vh;
  }
  @media (max-height: 1000px) {
    max-height: ${({ height }) => height - 10}vh;
  }
  @media (max-height: 920px) {
    max-height: ${({ height }) => height - 15}vh;
  }
  @media (max-height: 850px) {
    max-height: ${({ height }) => height - 20}vh;
  }
  @media (max-height: 750px) {
    max-height: ${({ height }) => height - 25}vh;
  }
  @media (max-height: 700px) {
    max-height: ${({ height }) => height - 30}vh;
  }
  @media (max-height: 650px) {
    max-height: ${({ height }) => height - 35}vh;
  }
`;
