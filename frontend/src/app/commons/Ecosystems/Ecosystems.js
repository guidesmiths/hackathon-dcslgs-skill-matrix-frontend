import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  ButtonStyled,
  EcosystemColumn,
  TitleColumn,
} from './Ecosystems.styled';
import { selectAllEcosystems, selectSkillsPerSystem } from '../../../redux/ecosystems/ecosystemsSlice';

const Ecosystem = ({ selectEcosystem, systemSelected }) => {
  const ecosystems = useSelector(selectAllEcosystems);
  const mySkills = useSelector(selectSkillsPerSystem(systemSelected));
  console.log(mySkills);
  return (
    <Fragment>
      <EcosystemColumn>
        <TitleColumn>Ecosystem</TitleColumn>
        {ecosystems?.map(e => (
          <ButtonStyled key={e.id} onClick={() => selectEcosystem(e.id - 1)}>
            {e.name}
          </ButtonStyled>
        ))}
      </EcosystemColumn>
    </Fragment>
  );
};

Ecosystem.propTypes = {
  selectEcosystem: PropTypes.func.isRequired,
  systemSelected: PropTypes.array.isRequired,
};

export default Ecosystem;
