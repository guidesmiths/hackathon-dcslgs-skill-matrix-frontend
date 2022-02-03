import styled, { keyframes } from 'styled-components';
import Waves from '../../Assets/Images/wavesGroup.png';
import Button from '../../app/commons/Button/Button';

const animation = keyframes`
  0% {
    background-position-y: -50px;
  }
  50% {
    background-position-y: 200px;
  }
  100% {
    background-position-y: -50px;
  }
`;

const StyledPage404 = styled.div`
  font-family: ${props => props.theme.fonts.poppins};
  text-align: center;
  padding-top: 72px;
`;

const StyledTitleWrapper = styled.div`
  background: url(${Waves});
  background-size: cover;
  color: #fff;
  -webkit-text-fill-color: transparent;
  background-clip:text;
  -webkit-background-clip: text;
  background-repeat: no-repeat;
  animation: ${animation} 7s linear infinite;
  height: 450px;
`;

const StyledTitle = styled.h1`
  text-align: center;
  text-shadow: 0 0 1px rgba(0,0,0,0.02);
  font-style: normal;
  font-weight: bold;
  font-size: 350px;
  margin: 0;
`;

const StyledH3 = styled.h3`
  font-size: 24px;
  margin-top: 0;
`;

const StyledP = styled.p`
  width: 45%;
  margin: 0 auto;
  font-size: 16px;
`;

const StyledButton = styled(Button)`
  margin-top: 30px;
  font-size: 16px;
  background-color: ${props => props.theme.colors.primaryColorWithOpacity};
  color: ${props => props.theme.colors.primaryColor};
`;

export { StyledPage404, StyledTitleWrapper, StyledTitle, StyledP, StyledH3, StyledButton };
