import React from 'react';
import PropTypes from 'prop-types';
import spain from '../../../../../../Assets/Icons/Spain.svg';
import uk from '../../../../../../Assets/Icons/UK.svg';
import { StyledImage } from './ListElementHeader.styled';

const FlagComponent = ({ country }) => {
  const map = {
    Spain: spain,
    UK: uk,
  };

  return (
    <StyledImage src={map[country || 'UK']} />
  );
};

FlagComponent.propTypes = {
  country: PropTypes.string.isRequired,
};

export default FlagComponent;
