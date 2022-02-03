import styled from 'styled-components';

const HomePageStyled = styled.div`
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.poppins};
  overflow-y: auto;
  height: 95vh;
  padding-top: 72px;
`;

const StyledBackground = styled.div`
  background: ${({ theme }) => theme.colors.backgroundGradient};
  z-index: 1;
`;

export { HomePageStyled, StyledBackground };
