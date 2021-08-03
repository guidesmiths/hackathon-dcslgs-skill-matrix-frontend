import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from '../../../../../app/commons/Icon/icon';
import SuggestionModal from './SuggestionModal/SuggestionModal';
import { deleteSuggestionAsync } from '../../../../../redux/suggestions/suggestionsSlice';
import {
  SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled,
} from './SuggestionCard.styled';

const SuggestionCard = ({ userName, subject, index, description, id }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  return (
    <SuggestionCardStyled data-cy={`suggestion-card-${index}`}>
      <UserNameStyled>{userName}</UserNameStyled>
      <SubjectStyled>{subject}</SubjectStyled>
      <IconsContainerStyled>
        <Icon height={20} icon="visibility" marginRight={5} width={20} onClick={() => setModalShow(true)}/>
        <Icon height={20} icon="delete_outline" width={20} onClick={() => dispatch(deleteSuggestionAsync(id))}/>
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
