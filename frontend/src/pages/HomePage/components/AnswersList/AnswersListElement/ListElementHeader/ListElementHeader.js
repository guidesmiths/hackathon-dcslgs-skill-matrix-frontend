import React from 'react';
import PropTypes from 'prop-types';
import { IconFlagES } from 'material-ui-flags';
import {
  ListElementStyled, UserNameStyled, UserEmailStyled, UserRolStyled, UserWrapperStyled, ArrowButtonStyled, MoreInfoWrapper,
} from './ListElementHeader.styled';
import Icon from '../../../../../../app/commons/icon/icon';

const ListElementHeader = ({ email, name, setCollapsed, isCollapsed }) => {
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;

  return (
    <ListElementStyled data-cy="list-element-header">
      <UserWrapperStyled>
        <Icon icon={'face'}/>
        <UserNameStyled>{name}</UserNameStyled>
      </UserWrapperStyled>
      <UserEmailStyled>{email}</UserEmailStyled>
      <MoreInfoWrapper>
        <IconFlagES/>
        <UserRolStyled>Medior Developer in Development Team</UserRolStyled>
        <ArrowButtonStyled onClick={setCollapsed}>
          <span className="material-icons">
            {arrowButtonIcon}
          </span>
        </ArrowButtonStyled>
      </MoreInfoWrapper>

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
