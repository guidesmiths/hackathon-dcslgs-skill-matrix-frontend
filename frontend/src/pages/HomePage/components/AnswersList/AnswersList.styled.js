import styled, { keyframes } from 'styled-components';

const animation2 = keyframes`
    0% {
      height: 80vh;
      background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
    }
    25%{
      height: 30vh;
      background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
    }
    50%{
      height: 100vh;
      background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
    }
    75%{
      height: 5vh;
      background: linear-gradient(90deg, #BF3088 0%, rgba(191, 48, 136, 0.58) 100%);
    }
    100%{
      height: 1vh;
      background:transparent;
    }
`;

export default styled.div`
  display: block;
  position: relative;
  z-index: 1;
  padding-top: 20px;
  box-sizing: border-box;
  width: 100%;
  animation: ${animation2} 7s;
  background: transparent;
`;
