import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, EcosystemColumn, TitleColumn } from './Ecosystems.styled';

const Ecosystem = ({ ecosystem, handleEcosystem }) => (
  <Fragment>
    <EcosystemColumn>
      <TitleColumn>Ecosystem</TitleColumn>
      {ecosystem?.map((e, index) => (
        <ButtonStyled key={index} onClick={() => handleEcosystem(e)}>
          {e}
        </ButtonStyled>
      ))}
    </EcosystemColumn>
  </Fragment>
);

Ecosystem.defaultProps = {
  ecosystem: [],
};

Ecosystem.propTypes = {
  ecosystem: PropTypes.array.isRequired,
  handleEcosystem: PropTypes.func.isRequired,
};

export default Ecosystem;
