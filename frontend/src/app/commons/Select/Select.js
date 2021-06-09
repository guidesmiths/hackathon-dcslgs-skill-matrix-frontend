import React from 'react';
import PropTypes from 'prop-types';
import { SelectStyled, OptionStyled } from './Select.styled';

const Select = ({ options, onChange }) => {
  const getDefaultValue = () => {
    const selectedOption = options.find(({ selected }) => selected);
    return selectedOption ? selectedOption.value : options[0].value;
  };

  return (<SelectStyled id="skill" name="skill" value={getDefaultValue()} onChange={onChange}>
    {options.map((option, index) => (
      <OptionStyled
        key={index}
        value={option.value}
      >{option.value}
      </OptionStyled>
    ))}
  </SelectStyled>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array,
};

Select.defaultProps = {
  options: [],
};

export default Select;
