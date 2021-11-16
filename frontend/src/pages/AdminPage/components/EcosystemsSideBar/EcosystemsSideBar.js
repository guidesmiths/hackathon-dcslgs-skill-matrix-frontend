import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled } from './EcosystemsSideBar.styled';
import Icon from '../../../../app/commons/icon/icon';
import ScrollWrapper from '../../../../app/commons/ScrollWrapper/ScrollWrapper';

const EcosystemsSideBar = ({ ecosystems, onEcosystemSelected, onNewEcosystem, show, noSuggestions }) => {
  const [selected, isSelected] = useState();

  useEffect(() => {
    isSelected(0);
  }, []);

  return (
    <EcosystemsSideBarStyled data-cy="ecosystems-sidebar">
      <EcosystemHeaderStyled>Ecosystem
        {show && <Icon icon="add" onClick={onNewEcosystem}/>}
      </EcosystemHeaderStyled>
      <ScrollWrapper height={noSuggestions ? 75 : 65}>
        {ecosystems.map(({ name, id }, index) => (
          <EcosystemElementStyled key={index}
            data-cy={`ecosystems-element-${index}`}
            id={id}
            selected={selected}
            onClick={() => { onEcosystemSelected(id); isSelected(id); }}
          >
            {name}
          </EcosystemElementStyled>
        ))}
      </ScrollWrapper>
    </EcosystemsSideBarStyled>
  );
};
export default EcosystemsSideBar;

EcosystemsSideBar.propTypes = {
  ecosystems: PropTypes.array.isRequired,
  noSuggestions: PropTypes.bool.isRequired,
  onEcosystemSelected: PropTypes.func.isRequired,
  onNewEcosystem: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

EcosystemsSideBar.defaultProps = {
  show: false,
};
