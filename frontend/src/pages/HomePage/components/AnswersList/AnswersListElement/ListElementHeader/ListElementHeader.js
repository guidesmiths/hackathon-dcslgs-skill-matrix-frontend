import React from 'react';
import PropTypes from 'prop-types';
import {
  ListElementStyled, UserNameStyled, UserEmailStyled, UserRolStyled,
} from './ListElementHeader.styled';
import { ArrowButton } from '../../../../../../app/commons/ArrowButton/arrowButton.styled';

const ListElementHeader = ({ email, name, setCollapsed, isCollapsed }) => {
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <ListElementStyled data-cy="list-element-header">
      <UserNameStyled>{name}</UserNameStyled>
      <UserEmailStyled>{email}</UserEmailStyled>
      <UserRolStyled>Junior</UserRolStyled>
      <ArrowButton onClick={setCollapsed}>
        <span className="material-icons">
          {arrowButtonIcon}
        </span>
      </ArrowButton>
    </ListElementStyled>
  );
};

ListElementHeader.propTypes = {
  email: PropTypes.string.isRequired,
  isCollapsed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default ListElementHeader;
