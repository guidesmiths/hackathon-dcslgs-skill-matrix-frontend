import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled, SelectStyled, TextAreaStyled, ButtonWrapperStyled, Buttons } from './SuggestionForm.styled';

const SuggestionForm = ({ showModal }) => {
  const [suggestion, setSuggestion] = useState({
    type: '',
    content: '',
  });
  const suggestionTypes = [
    { value: '', label: 'Choose option' },
    { value: 'ecosystem', label: 'Ecosystem' },
    { value: 'skill', label: 'Skill' },
    { value: 'other', label: 'Other' },
  ];
  const changeHandler = e => {
    setSuggestion({
      ...suggestion,
      [e.target.id]: e.target.value,
    });
  };
  const cancelForm = () => {
    setSuggestion({ type: '', content: '' });
    showModal();
  };
  const submitHandler = e => {
    e.preventDefault();
    if (suggestion.content && suggestion.type) {
      setSuggestion({ type: '', content: '' });
      showModal();
    }
  };
  return (
    <FormStyled onSubmit={submitHandler} data-cy="suggestion-form">
      <h3>Do you want to propose something to us?</h3>
      <SelectStyled id="type" onChange={changeHandler} value={suggestion.type}>
        {suggestionTypes.map((item, index) =>
          (index === 0
            ? <option selected disabled hidden value={item.value}>{item.label}</option>
            : <option value={item.value}>{item.label}</option>
          ))}
      </SelectStyled>
      <TextAreaStyled id="content" onChange={changeHandler} value={suggestion.content} />
      <ButtonWrapperStyled>
        <Buttons type="button" onClick={cancelForm}>Cancel</Buttons>
        <Buttons>Send</Buttons>
      </ButtonWrapperStyled>
    </FormStyled>
  );
};

SuggestionForm.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default SuggestionForm;
