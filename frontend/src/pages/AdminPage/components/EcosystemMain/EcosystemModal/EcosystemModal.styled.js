import styled from 'styled-components';
import { Button } from '../../../../../app/commons/Button';
import { Modal } from '../../../../../app/commons/Modal';

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
  color: ${({ theme }) => theme.colors.grey1};
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
  border: 1px solid ${({ theme }) => theme.colors.grey3};
  box-sizing: border-box;
  width: 60%;
  padding: 0 10px;
  outline: ${({ theme }) => theme.colors.primaryColor};
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  pointer-events: ${({ enabled }) => !enabled && 'none'};
  opacity: ${({ enabled }) => !enabled && 0.6};

  &:last-child{
    background: rgba(192, 48, 137, 0.1);
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export { ModalStyledWrapper, HeaderStyled, StyledInfo, StyledInputWrapper, StyledInput, StyledButton };
