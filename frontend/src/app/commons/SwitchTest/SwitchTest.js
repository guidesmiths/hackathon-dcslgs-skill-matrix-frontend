import React from 'react';
import PropTypes from 'prop-types';
import { SwitchTestButton, SwitchTestInput, SwitchTestSlider } from './SwitchTest.styled';

export const SwitchTest = ({ checked, handleChange }) => (
  <SwitchTestButton>
    <SwitchTestInput checked={checked} type="checkbox" onChange={handleChange} />
    <SwitchTestSlider/>
  </SwitchTestButton>
);

SwitchTest.propTypes = {
  checked: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
