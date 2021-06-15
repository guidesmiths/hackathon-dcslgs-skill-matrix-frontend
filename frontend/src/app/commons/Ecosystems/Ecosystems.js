import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ButtonStyled, EcosystemColumn, TitleColumn } from './Ecosystems.styled';
import { selectAllEcosystems } from '../../../redux/ecosystems/ecosystemsSlice';

const Ecosystem = ({ handleEcosystem }) => {
  const ecosystems = useSelector(selectAllEcosystems);

  return (
    <Fragment>
      <EcosystemColumn>
        <TitleColumn>Ecosystem</TitleColumn>
        {ecosystems?.map((e, index) => (
          <ButtonStyled key={index} onClick={() => handleEcosystem(e)}>
            {e.name}
          </ButtonStyled>
        ))}
      </EcosystemColumn>
    </Fragment>
  );
};

Ecosystem.propTypes = {
  handleEcosystem: PropTypes.func.isRequired,
};

export default Ecosystem;
