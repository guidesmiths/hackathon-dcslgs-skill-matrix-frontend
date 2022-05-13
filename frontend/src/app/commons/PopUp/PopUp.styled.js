import styled from 'styled-components';
import { Icon } from '../Icon';

const OverlayStyled = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  opacity: 0.2;
`;

const PopUpStyled = styled.div`
  z-index: 2;
  position: fixed;
  bottom: 80px;
  right:0;
  left: 0;
  width: fit-content;
  max-width: 600px;
  margin: auto;
  background-color: ${({ isSuccess, theme }) => (isSuccess ? theme.colors.success : theme.colors.error)};
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`;

const PopUpStyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const PopUpStyledTitle = styled.h5`
  max-width: 424px;
  font-weight: 500;
  font-size: 12px;
  line-height: 32px;
  color: ${({ isSuccess }) => (isSuccess ? 'black' : 'white')};
  white-space: break-spaces;
  margin: 0 20px;
`;

const PopUpStyledIcon = styled(Icon)`
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.colors.black}
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PopUpStyledIconWarning = styled(Icon)`
  position: relative;
  width: auto;
  height: auto;
  color: ${({ theme }) => theme.colors.error};
  background-color: transparent;
  align-self: flex-start;

  &:before{
    content: '';
    z-index: -1;
    position: absolute;
    top: 10px;
    width: 8px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.white}
  }
`;

const PopUpStyledCloseIcon = styled(Icon)`
  width: auto;
  height: auto;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white}
  align-self: flex-start;
`;

export {
  OverlayStyled,
  PopUpStyled,
  PopUpStyledTitleWrapper,
  PopUpStyledTitle,
  PopUpStyledIcon,
  PopUpStyledIconWarning,
  PopUpStyledCloseIcon,
};
