import styled from 'styled-components';
import Icon from '../icon/icon';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  background: transparent;
  opacity: 0.2;
`;

const PopUpStyled = styled.div`
  position: fixed;
  bottom: 80px;
  right:40px;
  max-width: 600px;
  background-color: ${props => (props.isSuccess ? '#73D13D' : '#C5292A')};
  z-index: 2;
`;

const PopUpStyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`;

const PopUpStyledTitle = styled.h5`
  max-width: 424px;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: white;
  color: ${props => (props.isSuccess ? 'black' : 'white')};
  white-space: break-spaces;
  margin: 0 20px;
`;

const PopUpStyledIcon = styled(Icon)`
  width:auto;
  height: auto;
  background-color: transparent;
  color: black;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

const PopUpStyledIconWarning = styled(Icon)`
  width:auto;
  height: auto;
  color: #D15455;
  position: relative;
  background-color: transparent;
  align-self: flex-start;

  &:before{
    content: '';
    background-color: white;
    width: 8px;
    height: 10px;
    top: 10px;
    position: absolute;
    z-index: -1;
  }
`;

const PopUpStyledCloseIcon = styled(Icon)`
  width:auto;
  height: auto;
  background-color: transparent;
  color: white;
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
