import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalStyledWrapper, HeaderStyled, StyledInfo, StyledInputWrapper, StyledInput, StyledButton } from './EcosystemModal.styled';
import { Label } from '../../../../../app/commons/Label';
import { Icon } from '../../../../../app/commons/Icon';

export const EcosystemModal = ({ onCloseClick, subject, handleDelete, nameToDelete }) => {
  const [nameTyped, setNameTyped] = useState();

  return (
    <ModalStyledWrapper>
      <HeaderStyled>
        Delete {nameToDelete}
        <Icon icon="close" onClick={onCloseClick}/>
      </HeaderStyled>
      <StyledInfo>
        The {subject} will no longer be available, and all data in the employees accounts will be permanently deleted.
      </StyledInfo>
      {subject === 'ecosystem' && nameToDelete && (
        <StyledInputWrapper>
          <StyledInput placeholder="Name" onChange={event => setNameTyped(event.target.value)} />
          <Label left={10} top={-6}>{`Type the ${subject} name to confirm:`}</Label>
        </StyledInputWrapper>
      )}
      <StyledButton enabled={nameToDelete === nameTyped || subject === 'skill' || !nameToDelete} onClick={handleDelete} >Yes, delete</StyledButton>
      <StyledButton enabled onClick={onCloseClick}>Cancel</StyledButton>
    </ModalStyledWrapper>
  );
};

EcosystemModal.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  nameToDelete: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};
