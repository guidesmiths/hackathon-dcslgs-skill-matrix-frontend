import React from 'react';
import PropTypes from 'prop-types';
import InputStyled from './Input.styled';

const Input = ({ input, width, optionsList, onChangeInput }) => (
  <>
    <InputStyled
      list={input}
      type="text"
      value={input}
      width={width}
      onChange={onChangeInput}
    />
    <datalist id={input}>
      {optionsList.length > 0
        && optionsList.map(skill => (
          <option key={skill.id}>{skill.name}</option>
        ))}
    </datalist>
  </>
);

Input.defaultProps = {
  input: '',
  width: 500,
};

Input.propTypes = {
  optionsList: PropTypes.array.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  input: PropTypes.string,
  width: PropTypes.number,
};

export default Input;
