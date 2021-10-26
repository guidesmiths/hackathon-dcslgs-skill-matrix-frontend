import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ButtonStyled,
  EcosystemColumn,
  TitleColumn,
  EcosystemScroller,
} from './Ecosystems.styled';
import { selectAllEcosystems } from '../../../redux/ecosystems/ecosystemsSlice';

const Ecosystem = ({ selectEcosystem }) => {
  const ecosystems = useSelector(selectAllEcosystems);
  return (
    <Fragment>
      <EcosystemColumn data-cy={'ecosystems'}>
        <TitleColumn>Ecosystem</TitleColumn>
        <EcosystemScroller height={75}>
          {ecosystems?.map(e => (
            <ButtonStyled key={e.id} onClick={() => selectEcosystem(e.id - 1)}>
              {e.name}
            </ButtonStyled>
          ))}
        </EcosystemScroller>
      </EcosystemColumn>
    </Fragment>
  );
};

Ecosystem.propTypes = {
  selectEcosystem: PropTypes.func.isRequired,
};

export default Ecosystem;
