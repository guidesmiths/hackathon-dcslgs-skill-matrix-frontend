import styled, { keyframes } from 'styled-components';

const animation2 = ({ theme }) => keyframes`
  0% {
    height: 80vh;
    background: ${theme.colors.backgroundGradient};
  }
  25% {
    height: 30vh;
    background: ${theme.colors.backgroundGradient};
  }
  50% {
    height: 80vh;
    background: ${theme.colors.backgroundGradient};
  }
  75% {
    height: 5vh;
    background: ${theme.colors.backgroundGradient};
  }
  100% {
    height: 1vh;
    background: transparent;
  }
`;

const AnswersListStyled = styled.div`
  z-index: 1;
  position: relative;
  top: 0;
  display: block;
  box-sizing: border-box;
  width: 100%;
  background: transparent;
  background-repeat: no-repeat;
  background-position-y: 50px;
  animation: ${animation2} 5s;
`;

const ScrollWrapper = styled.div`
  z-index: 10;
  position: relative;
  top: -40px;
  width: 95%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 90% 0;
  border-radius: 10px 10px;

`;
const NoAnswers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;
  margin: 100px auto;
`;

export { AnswersListStyled, ScrollWrapper, NoAnswers };
