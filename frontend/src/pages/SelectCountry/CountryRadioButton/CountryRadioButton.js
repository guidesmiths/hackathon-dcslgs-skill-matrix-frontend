import React from 'react';
import PropTypes from 'prop-types';

import { Country, Image } from './CountryRadioButton.styled';
import { Item, Label, RadioButtonMarker, RadioButton } from '../../../app/commons/RadioButton/RadioButton.styled';

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
        name="country"
        type="radio"
        value={country}
        onChange={handleSelectChange}
      />
      <RadioButtonMarker />
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
