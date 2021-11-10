import styled, { keyframes } from 'styled-components';

const animation2 = keyframes`
  0% {
    opacity:0.1;
  }
  25%{
    opacity:0.3;
  }
  50%{
    opacity:0.5;
  }
  75%{
    opacity:0.7;
  }
  100%{
    opacity:1;
  }
`;
const AnswersListElementStyled = styled.div`
  position: relative;
  top:-10px;
  margin: 0 auto;
  padding:15px 0;
  background-color: white;
  animation: ${animation2} 4s;
`;

export default AnswersListElementStyled;
