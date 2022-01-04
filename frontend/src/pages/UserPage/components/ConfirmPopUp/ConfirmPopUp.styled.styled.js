import styled from 'styled-components';
import { Buttons, ButtonWrapperStyled } from '../SuggestionForm.styled';

const StyledPopUp = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;
  font-family: ${props => props.theme.fonts.poppins};
  background-color: ${props => props.theme.colors.white};
`;

const ButtonWrapper = styled(ButtonWrapperStyled)`
  margin: 20px 0 0;
`;

const StyledButtons = styled(Buttons)`
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;
const StyledText = styled.div`
  font-size: 18px;
  line-height: 32px;
  font-weight: 400;
  margin: 25px 0;
`;

export {
  StyledPopUp, ButtonWrapper, StyledButtons, StyledText };
