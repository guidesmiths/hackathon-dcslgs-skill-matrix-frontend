import styled, { keyframes } from 'styled-components';

const animation2 = keyframes`
  0% {
    height: 80vh;
    background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
  }
  25% {
    height: 30vh;
    background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
  }
  50% {
    height: 80vh;
    background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
  }
  75% {
    height: 5vh;
    background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
  }
  100% {
    height: 1vh;
    background: transparent;
  }
`;

const AnswersListStyled = styled.div`
  position: relative;
  top: 0;
  z-index: 1;
  display: block;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  background-repeat: no-repeat;
  background-position-y: 50px;
  animation: ${animation2} 5s;
`;

const ScrollWrapper = styled.div`
  position: relative;
  top: -40px;
  z-index: 10;
  width: 95%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 90% 0;
  border-radius: 10px 10px;
  
`;

export { AnswersListStyled, ScrollWrapper };
