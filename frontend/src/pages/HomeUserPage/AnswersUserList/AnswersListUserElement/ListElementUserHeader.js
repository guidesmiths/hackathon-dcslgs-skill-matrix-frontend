/* eslint-disable import/no-dynamic-require */
import React from 'react';
import PropTypes from 'prop-types';
import {
  ListElementStyled, UserNameStyled, UserEmailStyled, UserRolStyled, UserWrapperStyled, MoreInfoWrapper, StyledIcon,
} from '../../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';
import FlagComponent from '../../../HomePage/components/AnswersList/AnswersListElement/ListElementHeader/FlagComponent';

const ListElementUserHeader = ({ email, name, seniority, country }) => (
  <ListElementStyled data-cy="list-element-header">
    <UserWrapperStyled>
      <StyledIcon icon={'face'}/>
      <UserNameStyled>{name}</UserNameStyled>
    </UserWrapperStyled>
    <UserEmailStyled>{email}</UserEmailStyled>
    <MoreInfoWrapper>
      <FlagComponent country={country}/>
      <UserRolStyled>{seniority || 'Medior Developer in Development Team'}</UserRolStyled>
      <div></div>
    </MoreInfoWrapper>
  </ListElementStyled>
);

ListElementUserHeader.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  seniority: PropTypes.string.isRequired,
  country: PropTypes.string,
};

ListElementUserHeader.defaultProps = {
  country: '',
};

export default ListElementUserHeader;
