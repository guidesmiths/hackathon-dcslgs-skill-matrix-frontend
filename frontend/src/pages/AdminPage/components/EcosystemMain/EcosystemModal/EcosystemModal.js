import React from 'react';
import PropTypes from 'prop-types';
import { ModalStyledWrapper, HeaderStyled, StyledInfo, StyledInputWrapper, StyledInput, StyledButton } from './EcosystemModal.styled';
import Label from '../../../../../app/commons/Label/Label';
import Icon from '../../../../../app/commons/icon/icon';

const EcosystemModal = ({ show, onCloseClick, subject }) => (
  <ModalStyledWrapper show={show}>
    <HeaderStyled>
        Delete
      <Icon icon="close" onClick={onCloseClick}/>
    </HeaderStyled>
    <StyledInfo>
      The {subject} will no longer be available, and all data in the employees accounts will be permanently deleted.
    </StyledInfo>
    <StyledInputWrapper>
      <StyledInput placeholder="Name"/>
      <Label top={-6} left={10}> Type the {subject} name to confirm: </Label>
    </StyledInputWrapper>
    <StyledButton >Yes, delete</StyledButton>
    <StyledButton onClick={onCloseClick}>Cancel</StyledButton>
  </ModalStyledWrapper>
);

export default EcosystemModal;

EcosystemModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  subject: PropTypes.string.isRequired,
};
