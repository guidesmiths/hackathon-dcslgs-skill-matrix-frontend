import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import SuggestionModal from './SuggestionModal/SuggestionModal';
import { deleteSuggestionAsync } from '../../../../../redux/suggestions/suggestionsSlice';
import {
  SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled, IconStyled,
} from './SuggestionCard.styled';

const SuggestionCard = ({ userName, subject, index, description, id }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  return (
    <SuggestionCardStyled data-cy={`suggestion-card-${index}`}>
      <UserNameStyled>From {userName}</UserNameStyled>
      <SubjectStyled>{subject}</SubjectStyled>
      <IconsContainerStyled>
        <IconStyled icon="visibility" onClick={() => setModalShow(true)}/>
        <IconStyled icon="delete_outline" onClick={() => dispatch(deleteSuggestionAsync(id))}/>
      </IconsContainerStyled>
      <SuggestionModal key={index}
        description={description}
        index={index}
        show={modalShow}
        subject={subject}
        userName={userName}
        onCloseClick={() => setModalShow(false)}
        onDeleteClick={() => dispatch(deleteSuggestionAsync(id))}
      />
    </SuggestionCardStyled>
  );
};

SuggestionCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

export default SuggestionCard;
