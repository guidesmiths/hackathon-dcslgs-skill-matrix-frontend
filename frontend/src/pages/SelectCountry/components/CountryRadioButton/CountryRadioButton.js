import React from 'react';
import PropTypes from 'prop-types';

import { Country, Label, Image, RadioButton, RadioButtonLabel, Item } from './CountryRadioButton.styled';

import spain from '../../../../Assets/Icons/Spain.svg';
import uk from '../../../../Assets/Icons/UK.svg';
import ro from '../../../../Assets/Icons/ro.svg';

const flags = {
  Romania: ro,
  Spain: spain,
  UK: uk,
};

const CountryRadioButton = ({ country, select, handleSelectChange }) => (
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

export default CountryRadioButton;
