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
} from './Pop-up.styled';

const PopUp = ({ show, onCloseClick, isSuccess, input }) => (
  <>
    <PopUpStyled show={show} onClick={onCloseClick} isSuccess={isSuccess}>
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
  show: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  input: PropTypes.array.isRequired,
};

PopUp.defaultProps = {
  input: [],
};
export default PopUp;
