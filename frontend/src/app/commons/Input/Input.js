import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

export const Input = ({ input, width, optionsList, onChangeInput, placeholder }) => (
  <>
    <InputStyled
      list={input}
      placeholder={placeholder}
      type="text"
      value={input}
      width={width}
      onChange={onChangeInput}
    />
    <datalist id={input}>
      {optionsList.length > 0
        && optionsList.map(skill => (
          <option key={skill.skillId}>{skill.ecosystemName || ''} - {skill.skillName}</option>
        ))}
    </datalist>
  </>
);

Input.defaultProps = {
  input: '',
  placeholder: '',
  width: 500,
};

Input.propTypes = {
  optionsList: PropTypes.array.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  input: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.number,
};
