import React from 'react';
import PropTypes from 'prop-types';
import { SelectStyled, OptionStyled } from './Select.styled';

const Select = ({ options, onChange, selected, disabled }) => (
  <SelectStyled disabled={disabled} id="skill" name="skill" value={selected} onChange={onChange}>
    {options.map((option, index) => (
      <OptionStyled key={index} value={option.value}>
        {option.value}
      </OptionStyled>
    ))}
  </SelectStyled>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  selected: PropTypes.number,
};

Select.defaultProps = {
  disabled: false,
  options: [],
  selected: 1,
};

export default Select;
