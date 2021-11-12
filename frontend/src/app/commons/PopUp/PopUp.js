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

const PopUp = ({ show, onCloseClick, isSuccess, input }) => (
  <>
    <PopUpStyled isSuccess={isSuccess} show={show} onClick={onCloseClick}>
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
      {input && input.map((x, i) => <StyledListElement key={i}>- {x}</StyledListElement>)}
    </PopUpStyled>
    <OverlayStyled show={show} onClick={onCloseClick} />
  </>
);

PopUp.propTypes = {
  input: PropTypes.array.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func,
};

PopUp.defaultProps = {
  input: [],
  onCloseClick: () => { /* empty function */ },
};
export default PopUp;
