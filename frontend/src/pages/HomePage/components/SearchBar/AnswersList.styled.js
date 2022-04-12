import styled, { keyframes } from 'styled-components';

const animation2 = keyframes`
  0% {
    opacity:0.1;
    position: absolute;
  }
  25% {
    opacity:0.3;
    position: absolute;
  }
  50% {
    opacity:0.5;
    position: absolute;
  }
  75% {
    opacity:0.9;
    position: absolute;
  }
  100% {
    opacity:1;
    position: relative;
  }
`;

export default styled.div`
  z-index: 999;
  position: fixed;
  top: 20%;
  display: block;
  width: 95%;
  box-sizing: border-box;
  margin: -20px auto 0;
  padding: 0;
  animation: ${animation2} 3s;
`;
