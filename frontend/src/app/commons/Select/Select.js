import React from 'react';
import PropTypes from 'prop-types';
import { SelectStyled, OptionStyled } from './Select.styled';

const Select = ({ options, onChange, selected }) => (
  <SelectStyled id="skill" name="skill" value={selected} onChange={onChange}>
    {options.map((option, index) => (
      <OptionStyled key={index} value={option.value}>
        {option.value}
      </OptionStyled>
    ))}
  </SelectStyled>
);

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
  selected: PropTypes.number,
};

Select.defaultProps = {
  options: [],
  selected: 1,
};

export default Select;
