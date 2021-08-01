import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalContent,
  UserNameStyled,
  ButtonsGroups,
  ButtonStyled,
  SuggestionStyled,
  DescriptionStyled,
  SuggestionModalStyled,
} from './SuggestionModal.styled';

const SuggestionModal = ({ userName, subject, description, show, onCloseClick }) => (
  <SuggestionModalStyled show={show} onCloseClick={onCloseClick}>
    <ModalContent>
      <UserNameStyled>{userName} has a proposal</UserNameStyled>
      <SuggestionStyled>{subject}</SuggestionStyled>
      <DescriptionStyled>{description}</DescriptionStyled>
      <ButtonsGroups>
        <ButtonStyled>Delete</ButtonStyled>
        <ButtonStyled dataCy="modal-button-close" onClick={onCloseClick}>Close</ButtonStyled>
      </ButtonsGroups>
    </ModalContent>
  </SuggestionModalStyled>
);

SuggestionModal.propTypes = {
  description: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  subject: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default SuggestionModal;
