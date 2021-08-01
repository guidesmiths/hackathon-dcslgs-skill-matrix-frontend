import React, { useState } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import Icon from '../../../../../app/commons/Icon/Icon';
import SuggestionModal from './SuggestionModal/SuggestionModal';

import {
  SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled,
} from './SuggestionCard.styled';

const SuggestionCard = ({ userName, subject, index, description }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <SuggestionCardStyled data-cy={`suggestion-card-${index}`}>
      <UserNameStyled>{userName}</UserNameStyled>
      <SubjectStyled>{subject}</SubjectStyled>
      <IconsContainerStyled>
        <Icon height={20} icon="visibility" marginRight={5} width={20} onClick={() => setModalShow(true)}/>
        <Icon height={20} icon="delete_outline" width={20}/>
      </IconsContainerStyled>
      <SuggestionModal key={index}
        description={description}
        index={index}
        show={modalShow}
        subject={subject}
        userName={userName}
        onCloseClick={() => setModalShow(false)}
      />
    </SuggestionCardStyled>
  );
};

SuggestionCard.propTypes = {
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default SuggestionCard;
