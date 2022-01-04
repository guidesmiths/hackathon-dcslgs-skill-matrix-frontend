import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledPopUp, ButtonWrapper, StyledButtons, StyledText } from './ConfirmPopUp.styled.styled';
import { StyledTitle, StyledCancelIcon } from '../SuggestionForm.styled';

const ConfirmPopUp = ({ onCloseClick, setConfirmed }) => {
  const cancelForm = confirm => {
    setConfirmed(confirm);
    onCloseClick();
  };

  return (
    <StyledPopUp>
      <StyledTitle>
        Do you want to save the changes?
        <StyledCancelIcon icon={'close'} onClick={cancelForm}/>
      </StyledTitle>
      <StyledText>
        Changes made may not be saved
      </StyledText>
      <ButtonWrapper>
        <StyledButtons onClick={() => cancelForm(false)}>Save</StyledButtons>
        <StyledButtons type="button" onClick={() => cancelForm(true)}>Leave</StyledButtons>
      </ButtonWrapper>
    </StyledPopUp>
  );
};

ConfirmPopUp.propTypes = {
  setConfirmed: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default ConfirmPopUp;
