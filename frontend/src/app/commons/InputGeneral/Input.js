import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import InputStyled from './Input.styled';

const Input = ({ placeholder, input, onChangeInput }) => (
  <Fragment>
    <InputStyled
      list={input}
      placeholder={placeholder}
      type="text"
      value={input}
      onChange={onChangeInput}
    />
  </Fragment>
);

Input.defaultProps = {
  input: '',
  placeholder: '',
};

Input.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  input: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
