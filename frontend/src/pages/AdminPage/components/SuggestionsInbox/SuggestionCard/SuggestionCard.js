import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../../../app/commons/Icon/Icon';

import {
  SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled,
} from './SuggestionCard.styled';

const SuggestionCard = ({ userName, subject, index }) => (
  <SuggestionCardStyled data-cy={`suggestion-card-${index}`}>
    <UserNameStyled>{userName}</UserNameStyled>
    <SubjectStyled>{subject}</SubjectStyled>
    <IconsContainerStyled>
      <Icon height={20} icon="visibility" marginRight={5} width={20}/>
      <Icon height={20} icon="delete_outline" width={20}/>
    </IconsContainerStyled>
  </SuggestionCardStyled>
);

SuggestionCard.propTypes = {
  index: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default SuggestionCard;
