import styled from 'styled-components';
import Button from '../../../../../app/commons/Button/Button';
import Modal from '../../../../../app/commons/Modal/Modal';

const ModalStyledWrapper = styled(Modal)`
  padding: 20px;
`;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  text-transform: capitalize;
  line-height: 32px;
  margin: 0 10px;
`;

const StyledInfo = styled.div`
  color: ${props => props.theme.colors.textColor};
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 24px;
`;

const StyledInputWrapper = styled.div`
  position: relative;
  height: 48px;
  margin-left: 20px;
`;

const StyledInput = styled.input`
  height: 48px;
  border-radius: 4px;
  border: 1px solid #EFEFEF;
  box-sizing: border-box;
  width: 60%;
  padding: 0 10px;
  outline: ${props => props.theme.colors.primaryColor};
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  pointer-events: ${props => !props.enabled && 'none'};
  opacity: ${props => !props.enabled && 0.6};

  &:last-child{
    background: rgba(192, 48, 137, 0.1);
    color: ${props => props.theme.colors.primaryColor};
  }
`;

export { ModalStyledWrapper, HeaderStyled, StyledInfo, StyledInputWrapper, StyledInput, StyledButton };
