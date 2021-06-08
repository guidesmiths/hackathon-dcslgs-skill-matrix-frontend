import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { EcosystemColumn } from './Ecosystems.styled';

const Ecosystem = ({ ecosystem, handleEcosystem }) => (
  <Fragment>
    <EcosystemColumn>
      <h5>Ecosystem</h5>
      {ecosystem?.map((e, index) => (
        <button key={index} onClick={() => handleEcosystem(e)}>
          {e}
        </button>
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
