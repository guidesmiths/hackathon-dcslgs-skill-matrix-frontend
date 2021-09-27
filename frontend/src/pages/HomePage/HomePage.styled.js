import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    0% {
      height: 100vh;
    }
    50%{
      height: 50vh;
    }
    75%{
      height: 100vh;
    }
    100%{
      height: 200px;
    }
  `;

const HomePageStyled = styled.div`
    display: block;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.poppins};
`;

const StyledBackground = styled.div`
    background: ${props => props.theme.colors.backgroundGradient};
    position: fixed;
    width: 100%;
    height: 200px;
    z-index: -1;
    animation: ${animation} 3s;
`;

export { HomePageStyled, StyledBackground };
