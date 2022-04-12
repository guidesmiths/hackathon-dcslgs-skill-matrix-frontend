import styled from 'styled-components';

const HomePageStyled = styled.div`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.poppins};
  overflow-y: auto;
  height: 95vh;
  padding-top: 72px;
`;

const StyledBackground = styled.div`
  z-index: 1;
  background: ${({ theme }) => theme.colors.backgroundGradient};
`;

export { HomePageStyled, StyledBackground };
