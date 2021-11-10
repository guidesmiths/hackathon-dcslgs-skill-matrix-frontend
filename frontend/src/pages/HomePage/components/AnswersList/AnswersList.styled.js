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
    height: 100vh;
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
  height: 70vh;
  margin: 0 auto;
  overflow-y: scroll;
  background-repeat: no-repeat;
  background-size: 90% 0;
  border-radius: 10px 10px;
  scrollbar-width: none;

  &::-webkit-scrollbar{
    display: none;
  }
`;

export { AnswersListStyled, ScrollWrapper };
