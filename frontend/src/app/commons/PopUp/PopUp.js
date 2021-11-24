import React from 'react';
import PropTypes from 'prop-types';
import {
  OverlayStyled,
  PopUpStyled,
  PopUpStyledTitleWrapper,
  PopUpStyledTitle,
  PopUpStyledIcon,
  PopUpStyledIconWarning,
  PopUpStyledCloseIcon,
  StyledListElement,
} from './PopUp.styled';

const PopUp = ({ onCloseClick, isSuccess, input }) => (
  <>
    <PopUpStyled isSuccess={isSuccess} onClick={onCloseClick}>
      <PopUpStyledTitleWrapper>
        {isSuccess
          ? <PopUpStyledIcon icon={'checkCircle'}/>
          : <PopUpStyledIconWarning icon={'warning'}/>
        }
        <PopUpStyledTitle isSuccess={isSuccess}>
          { isSuccess
            ? 'Your changes have been saved'
            : 'It seems like you forgot to complete some inputs'
          }
        </PopUpStyledTitle>
        {!isSuccess && <PopUpStyledCloseIcon icon={'close'}/>}
      </PopUpStyledTitleWrapper>
      <StyledListElement>{input.split(' id:')[0]}</StyledListElement>
    </PopUpStyled>
    <OverlayStyled onClick={onCloseClick} />
  </>
);

PopUp.propTypes = {
  input: PropTypes.string.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func,
};

PopUp.defaultProps = {
  input: [],
  onCloseClick: () => { /* empty function */ },
};
export default PopUp;
