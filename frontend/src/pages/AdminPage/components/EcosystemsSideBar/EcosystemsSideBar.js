import React from 'react';
import PropTypes from 'prop-types';
import { EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled } from './EcosystemsSideBar.styled';
import Icon from '../../../../app/commons/icon/icon';
import ScrollWrapper from '../../../../app/commons/ScrollWrapper/ScrollWrapper';

const EcosystemsSideBar = ({ ecosystems, onEcosystemSelected, onNewEcosystem, show }) => (
  <EcosystemsSideBarStyled data-cy="ecosystems-sidebar">
    <EcosystemHeaderStyled>Ecosystem
      {show && <Icon icon="add" onClick={onNewEcosystem}/>}
    </EcosystemHeaderStyled>
    <ScrollWrapper height={65}>
      {ecosystems.map(({ name, id }, index) => (
        <EcosystemElementStyled key={index} data-cy={`ecosystems-element-${index}`} onClick={() => onEcosystemSelected(id)}>
          {name}
        </EcosystemElementStyled>
      ))}
    </ScrollWrapper>
  </EcosystemsSideBarStyled>
);

EcosystemsSideBar.propTypes = {
  ecosystems: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  onEcosystemSelected: PropTypes.func.isRequired,
  onNewEcosystem: PropTypes.func.isRequired,
};

export default EcosystemsSideBar;
