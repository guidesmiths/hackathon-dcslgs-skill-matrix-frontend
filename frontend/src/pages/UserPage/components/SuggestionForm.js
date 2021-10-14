import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { insertSuggestionAsync } from '../../../redux/suggestions/suggestionsSlice';

const SuggestionForm = ({ showModal }) => {
  const dispatch = useDispatch();
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
      dispatch(insertSuggestionAsync({ suggestion, selectedSuggestion }));
      setSuggestion('');
      setSelectedSuggestion('Ecosystem');
      showModal();
    }
  };
  return (
    <FormStyled data-cy="suggestion-form" onSubmit={submitHandler}>
      <StyledTitle>
          Do you want to propose something to us?
        <StyledCancelIcon icon={'close'} onClick={cancelForm}/>
      </StyledTitle>
      <SelectStyled isCollapsed={isCollapsed} onChange={changeHandler} >
        {selectedSuggestion}
        <ArrowButtonStyled id="type" isCollapsed={isCollapsed} type="button" onClick={() => setCollapsed(!isCollapsed)}>
          <span className="material-icons">{arrowButtonIcon}</span>
        </ArrowButtonStyled>
        <Label isCollapsed={isCollapsed} left={20} top={-10} type={ isCollapsed && 'focus' } weight={600}>Options</Label>
        <CustomOptions isCollapsed={isCollapsed} onClick={clickHandler}>
          {suggestionOptions.map((x, index) => <StyledOption key={index} selected={selectedSuggestion === x}>
            {x}
            {selectedSuggestion === x && <StyledIcon icon={'check'}/>}
          </StyledOption>)}
        </CustomOptions>
      </SelectStyled>
      <TextAreaStyled id="content" placeholder="Placeholder..." value={suggestion} onChange={changeHandler}/>
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