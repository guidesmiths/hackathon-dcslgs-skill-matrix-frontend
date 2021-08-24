import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormStyled, SelectStyled, TextAreaStyled, ButtonWrapperStyled, Buttons } from './SuggestionForm.styled';

const SuggestionForm = ({ showModal }) => {
  const [suggestion, setSuggestion] = useState({
    type: '',
    content: '',
  });

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
      console.log(suggestion);
      setSuggestion({ type: '', content: '' });
      showModal();
    }
  };
  return (
    <FormStyled onSubmit={submitHandler} data-cy="suggestion-form">
      <h3>Do you want to propose something to us?</h3>
      <SelectStyled id="type" onChange={changeHandler} value={suggestion.type}>
        <option value="" selected disabled hidden>Choose option</option>
        <option value="ecosystem">Ecosystem</option>
        <option value="skill">Skill</option>
        <option value="other">Other</option>
      </SelectStyled>
      <TextAreaStyled id="content" onChange={changeHandler} value={suggestion.content} />
      <ButtonWrapperStyled>
        <Buttons type="button" onClick={cancelForm} >Cancel</Buttons>
        <Buttons>Send</Buttons>
      </ButtonWrapperStyled>
    </FormStyled>
  );
};

SuggestionForm.propTypes = {
  showModal: PropTypes.func.isRequired,
};


export default SuggestionForm;
