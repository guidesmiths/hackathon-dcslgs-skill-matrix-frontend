import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from '../../../pages/HomePage/components/AnswersList/AnswersListElement/ListElementHeader/ListElementHeader.styled';

import Spain from '../../../Assets/Icons/Spain.svg';
import UK from '../../../Assets/Icons/UK.svg';
import Romania from '../../../Assets/Icons/Romania.svg';
import Hungary from '../../../Assets/Icons/Hungary.png';

export const FlagComponent = ({ country }) => {
  const map = {
    Spain,
    UK,
    Romania,
    Hungary,
  };
  return (
    <StyledImage src={map[country]} />
  );
};

FlagComponent.propTypes = {
  country: PropTypes.string,
};

FlagComponent.defaultProps = {
  country: '',
};
