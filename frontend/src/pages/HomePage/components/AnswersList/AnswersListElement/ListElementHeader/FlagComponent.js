import React from 'react';
import PropTypes from 'prop-types';
import spain from '../../../../../../Assets/Icons/Spain.svg';
import uk from '../../../../../../Assets/Icons/UK.svg';
import ro from '../../../../../../Assets/Icons/ro.svg';
import { StyledImage } from './ListElementHeader.styled';

const FlagComponent = ({ country }) => {
  const map = {
    Spain: spain,
    UK: uk,
    Romania: ro,
  };
  return (
    <StyledImage src={map[country]} />
  );
};

FlagComponent.propTypes = {
  country: PropTypes.string.isRequired,
};

export default FlagComponent;
