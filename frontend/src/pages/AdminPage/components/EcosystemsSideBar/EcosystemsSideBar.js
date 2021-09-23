import React from 'react';
import PropTypes from 'prop-types';
import { EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled } from './EcosystemsSideBar.styled';
import Icon from '../../../../app/commons/icon/icon';

const EcosystemsSideBar = ({ ecosystems, onEcosystemSelected, onNewEcosystem, show }) => (
  <EcosystemsSideBarStyled data-cy="ecosystems-sidebar">
    <EcosystemHeaderStyled>Ecosystem
      {show && <Icon icon="add" onClick={onNewEcosystem}/>}
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
  show: PropTypes.bool.isRequired,
};

export default EcosystemsSideBar;
