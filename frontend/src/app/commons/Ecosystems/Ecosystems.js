import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ButtonStyled,
  EcosystemColumn,
  TitleColumn,
} from './Ecosystems.styled';
import { selectAllEcosystems } from '../../../redux/ecosystems/ecosystemsSlice';

const Ecosystem = ({ selectEcosystem }) => {
  const ecosystems = useSelector(selectAllEcosystems);

  return (
    <Fragment>
      <EcosystemColumn>
        <TitleColumn>Ecosystem</TitleColumn>
        {ecosystems?.map(e => (
          <ButtonStyled key={e.id} onClick={() => selectEcosystem(e.id)}>
            {e.name}
          </ButtonStyled>
        ))}
      </EcosystemColumn>
    </Fragment>
  );
};

Ecosystem.propTypes = {
  selectEcosystem: PropTypes.func.isRequired,
};

export default Ecosystem;
