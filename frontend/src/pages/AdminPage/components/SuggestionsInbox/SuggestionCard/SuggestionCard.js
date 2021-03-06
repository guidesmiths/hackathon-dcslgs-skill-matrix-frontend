/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteSuggestionAsync } from '../../../../../redux/suggestions/suggestionsSlice';
import { SuggestionModal } from './SuggestionModal';
import { SuggestionCardStyled, UserNameStyled, SubjectStyled, IconsContainerStyled, IconStyled, QuotesStyled } from './SuggestionCard.styled';

export const SuggestionCard = ({ userName, subject, index, description, id }) => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  return (
    <SuggestionCardStyled data-cy={`suggestion-card-${index}`}>
      <UserNameStyled>From <b>{userName}</b></UserNameStyled>
      <SubjectStyled>
        <QuotesStyled>&#x2018;</QuotesStyled>
        <QuotesStyled>&#x2018;</QuotesStyled>
        {subject}</SubjectStyled>
      <IconsContainerStyled>
        <IconStyled icon="delete" onClick={() => dispatch(deleteSuggestionAsync(id))}/>
        <IconStyled color="true" icon="visibility" onClick={() => setModalShow(true)}/>
      </IconsContainerStyled>
      {modalShow && <SuggestionModal
        key={index}
        description={description}
        index={index}
        subject={subject}
        userName={userName}
        onCloseClick={() => setModalShow(false)}
        onDeleteClick={() => dispatch(deleteSuggestionAsync(id))}
      />}
    </SuggestionCardStyled>
  );
};

SuggestionCard.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};
