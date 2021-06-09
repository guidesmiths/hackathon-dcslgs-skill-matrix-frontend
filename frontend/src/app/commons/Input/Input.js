import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InputStyled from './Input.styled';

const Input = ({ input, optionsList, onChangeInput }) => (
  (
    <Fragment>
      <InputStyled
        list={input}
        type="text"
        value={input}
        onChange={e => onChangeInput(e)}
      />
      <datalist id={input}>
        {optionsList.length > 0 && optionsList.map(skill => <option key={skill.id}>{skill.name}</option>)}
      </datalist>
    </Fragment>
  )
);

Input.defaultProps = {
  input: '',
};

Input.propTypes = {
  optionsList: PropTypes.array.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  input: PropTypes.string,
};

export default Input;
