import React from 'react';
import PropTypes from 'prop-types';

import { Country, Label, Image, RadioButton, RadioButtonLabel, Item } from './CountryRadioButton.styled';

import Spain from '../../../Assets/Icons/Spain.svg';
import UK from '../../../Assets/Icons/UK.svg';
import Romania from '../../../Assets/Icons/Romania.svg';
import Hungary from '../../../Assets/Icons/Hungary.png';

const flags = {
  Romania,
  Spain,
  UK,
  Hungary,
};

export const CountryRadioButton = ({ country, select, handleSelectChange }) => (
  <Country>
    <Item>
      <RadioButton
        checked={select === country}
        name="radio"
        type="radio"
        value={country}
        onChange={handleSelectChange}
      />
      <RadioButtonLabel />
      <Label>{country}</Label>
      <Image src={flags[country]}/>
    </Item>
  </Country>
);

CountryRadioButton.propTypes = {
  country: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  select: PropTypes.string.isRequired,
};
