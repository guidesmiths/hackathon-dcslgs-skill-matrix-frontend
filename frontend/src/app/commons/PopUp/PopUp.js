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
} from './PopUp.styled';

const PopUp = ({ onCloseClick, isSuccess }) => (
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
    </PopUpStyled>
    <OverlayStyled onClick={onCloseClick} />
  </>
);

PopUp.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func,
};

PopUp.defaultProps = {
  input: [],
  onCloseClick: () => { /* empty function */ },
};
export default PopUp;
