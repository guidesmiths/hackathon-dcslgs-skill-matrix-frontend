import styled from 'styled-components';

const HomePageStyled = styled.div`
  box-sizing: border-box;
  font-family: ${props => props.theme.fonts.poppins};
  overflow-y: auto;
  height: 95vh;
`;

const StyledBackground = styled.div`
  background: ${props => props.theme.colors.backgroundGradient};
  z-index: 1;
`;

export { HomePageStyled, StyledBackground };
