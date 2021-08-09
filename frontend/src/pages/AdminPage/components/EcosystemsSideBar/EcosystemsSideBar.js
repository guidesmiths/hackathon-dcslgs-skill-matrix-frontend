import React from 'react';
import PropTypes from 'prop-types';

import { EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled, PlusIconStyled } from './EcosystemsSideBar.styled';

const EcosystemsSideBar = ({ ecosystems, onEcosystemSelected, onNewEcosystem }) => (
  <EcosystemsSideBarStyled data-cy="ecosystems-sidebar">
    <EcosystemHeaderStyled>Ecosystem
      <PlusIconStyled icon="add" onClick={onNewEcosystem}/>
    </EcosystemHeaderStyled>
    {ecosystems.map(({ name, id }, index) => (
      <EcosystemElementStyled key={index} data-cy={`ecosystems-element-${index}`} onClick={() => onEcosystemSelected(id)}>
        {name}
      </EcosystemElementStyled>
    ))}
  </EcosystemsSideBarStyled>
);

EcosystemsSideBar.propTypes = {
  ecosystems: PropTypes.array.isRequired,
  onEcosystemSelected: PropTypes.func.isRequired,
  onNewEcosystem: PropTypes.func.isRequired,
};

export default EcosystemsSideBar;
