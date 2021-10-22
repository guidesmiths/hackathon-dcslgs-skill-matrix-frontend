import styled from 'styled-components';

export const UserRowWrapper = styled.div`
  overflow-y:scroll;
  max-height: ${props => props.height}vh;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display:none;
  }
`;
