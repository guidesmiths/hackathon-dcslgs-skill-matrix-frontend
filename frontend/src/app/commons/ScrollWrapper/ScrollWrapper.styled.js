import styled from 'styled-components';

export const UserRowWrapper = styled.div`
  overflow-y:scroll;
  max-height: ${props => props.height}vh;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }

  @media (max-height: 1160px) {
    max-height: ${props => props.height - 5}vh;
  }
  @media (max-height: 1000px) {
    max-height: ${props => props.height - 10}vh;
  }
  @media (max-height: 900px) {
    max-height: ${props => props.height - 15}vh;
  }
`;
