import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormStyled,
  SelectStyled,
  CustomOptions,
  StyledOption,
  ArrowButtonStyled,
  StyledIcon,
  TextAreaStyled,
  ButtonWrapperStyled,
  Buttons,
  StyledTitle,
  StyledCancelIcon,
} from './SuggestionForm.styled';
import Label from '../../../app/commons/Label/Label';

const SuggestionForm = ({ showModal }) => {
  const [isCollapsed, setCollapsed] = useState(false);
  const arrowButtonIcon = `keyboard_arrow_${!isCollapsed ? 'down' : 'up'}`;
  const [suggestion, setSuggestion] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState('Ecosystem');
  const suggestionOptions = ['Ecosystem', 'Skill', 'Other'];

  const clickHandler = e => {
    setSelectedSuggestion(e.target.textContent);
    setCollapsed(false);
  };
  const changeHandler = e => {
    setSuggestion(e.target.value);
  };
  const cancelForm = () => {
    setSuggestion('');
    setSelectedSuggestion('Ecosystem');
    showModal();
  };
  const submitHandler = e => {
    e.preventDefault();
    if (suggestion && selectedSuggestion) {
      setSuggestion('');
      setSelectedSuggestion('Ecosystem');
      showModal();
    }
  };
  return (
    <FormStyled onSubmit={submitHandler} data-cy="suggestion-form">
      <StyledTitle>
          Do you want to propose something to us?
        <StyledCancelIcon icon={'close'} onClick={cancelForm}/>
      </StyledTitle>
      <SelectStyled onChange={changeHandler} isCollapsed={isCollapsed} >
        {selectedSuggestion}
        <ArrowButtonStyled id="type" type="button" isCollapsed={isCollapsed} onClick={() => setCollapsed(!isCollapsed)}>
          <span className="material-icons">{arrowButtonIcon}</span>
        </ArrowButtonStyled>
        <Label top={-10} left={20} isCollapsed={isCollapsed} type={ isCollapsed && 'focus' } weight={600}>Options</Label>
        <CustomOptions onClick={clickHandler} isCollapsed={isCollapsed}>
          {suggestionOptions.map((x, index) =>
            <StyledOption key={index} selected={selectedSuggestion === x}>
              {x}
              {selectedSuggestion === x && <StyledIcon icon={'check'}/>}
            </StyledOption>,
          )}
        </CustomOptions>
      </SelectStyled>
      <TextAreaStyled id="content" onChange={changeHandler} value={suggestion} placeholder="Placeholder..."/>
      <ButtonWrapperStyled>
        <Buttons>Send</Buttons>
        <Buttons type="button" onClick={cancelForm}>Cancel</Buttons>
      </ButtonWrapperStyled>
    </FormStyled>
  );
};

SuggestionForm.propTypes = {
  showModal: PropTypes.func.isRequired,
};

export default SuggestionForm;
