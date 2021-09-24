import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalContent,
  UserNameStyled,
  ButtonsGroups,
  ButtonStyled,
  SuggestionStyled,
  DescriptionStyled,
  SuggestionContentStyled,
  StyledIcon,
  TitileStyled,
} from './SuggestionModal.styled';
import Modal from '../../../../../../app/commons/Modal/Modal';

const SuggestionModal = ({ userName, subject, description, show, onCloseClick, onDeleteClick }) => (
  <Modal show={show} onCloseClick={onCloseClick}>
    <ModalContent>
      <TitileStyled>
        <UserNameStyled>{userName} has a proposal</UserNameStyled>
        <StyledIcon icon="close" onClick={onCloseClick}/>
      </TitileStyled>
      <SuggestionContentStyled>
        <SuggestionStyled>#{subject}</SuggestionStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
      </SuggestionContentStyled>
      <ButtonsGroups>
        <ButtonStyled dataCy="modal-button-delete" onClick={onDeleteClick}>Delete</ButtonStyled>
        <ButtonStyled dataCy="modal-button-close" onClick={onCloseClick}>Close</ButtonStyled>
      </ButtonsGroups>
    </ModalContent>
  </Modal>
);

SuggestionModal.propTypes = {
  description: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  subject: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default SuggestionModal;
