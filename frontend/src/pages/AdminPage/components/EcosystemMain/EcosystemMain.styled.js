import styled from 'styled-components';
import Icon from '../../../../app/commons/icon/icon';

const EcosystemContainerStyled = styled.div`
  grid-area: ecosystems-main;
  box-sizing: border-box;
  margin: 20px auto;
  height: 100%;
  width: 95%;
  padding: 10px 0;
  background-color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.poppins};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);
  z-index: 1;
`;

const EcosystemFallbackStyled = styled.div`
  display: flex;
  height: 60%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const EcosystemHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 30px;
  position: relative;
`;

const EcosystemNameStyledInput = styled.input`
  padding: 16px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  border-radius: 4px;
  width: 600px;
  outline:none;
`;

const ButtonsWrapper = styled.div`
  padding: 20px 0;
  margin: 20px 0;
`;

const StyledButton = styled.div`
  background-color: ${props => props.theme.colors.primaryColor};
  color: white;
  font-size: 16px;
  border-radius: 8px;
  padding: 10px 16px;
  width: max-content;
  margin-left: 7%;

  &:hover {
    cursor: pointer;
  }
`;
const StyledDelete = styled.div`
  color: ${props => props.theme.colors.danger};
  margin: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const StyledDeleteIcon = styled(Icon)`
  color: ${props => props.theme.colors.danger};
  border: none;
  padding: 0 20px;
  margin: -10px;
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
