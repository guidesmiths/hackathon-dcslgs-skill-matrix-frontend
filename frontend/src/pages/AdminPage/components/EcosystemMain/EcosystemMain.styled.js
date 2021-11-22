import styled from 'styled-components';
import Icon from '../../../../app/commons/icon/icon';

const EcosystemContainerStyled = styled.div`
  z-index: 1;
  grid-area: ecosystems-main;
  box-sizing: border-box;
  height: 100%;
  width: 95%;
  padding: 10px 0;
  margin: 20px auto;
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.poppins};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
`;

const EcosystemFallbackStyled = styled.div`
  display: flex;
  height: 45vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (min-height: 700px){
    height: 55vh;
  }
  @media (min-height: 800px){
    height: 60vh;
  }
  @media (min-height: 900px){
    height: 65vh;
  }
  @media (min-height: 1060px){
    height: 70vh;
  }
`;

const EcosystemHeaderStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 30px;
`;

const EcosystemNameStyledInput = styled.input`
  width: 600px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #efefef;
  outline: none;
`;

const ButtonsWrapper = styled.div`
  padding: 20px 0;
  margin: 20px 0;
`;

const StyledButton = styled.div`
  width: max-content;
  margin-left: 7%;
  padding: 10px 16px;
  font-size: 16px;
  color: white;
  background-color: ${props => props.theme.colors.primaryColor};
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledDelete = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  font-weight: bold;
  font-size: 14px;
  color: ${props => props.theme.colors.danger};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledDeleteIcon = styled(Icon)`
  padding: 0 20px;
  margin: -10px;
  color: ${props => props.theme.colors.danger};
  border: none;
`;

export {
  EcosystemContainerStyled,
  EcosystemFallbackStyled,
  EcosystemHeaderStyled,
  EcosystemNameStyledInput,
  ButtonsWrapper,
  StyledButton,
  StyledDelete,
  StyledDeleteIcon,
};
