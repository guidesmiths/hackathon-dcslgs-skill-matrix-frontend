import styled, { keyframes } from 'styled-components';

const animation2 = keyframes`
    0% {
    opacity:0.1
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

export default styled.div`
    display: block;
    box-sizing: border-box;
    margin: -20px auto 0;
    padding: 0px;
    width: 95%;
    animation: ${animation2} 3.5s;
`;
