import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAllEcosystems,
} from '../../../../redux/ecosystems/ecosystemsSlice';

import { EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled, PlusIconStyled } from './EcosystemsSideBar.styled';

const EcosystemsSideBar = () => {
  const ecosystems = useSelector(selectAllEcosystems);

  return (
    <EcosystemsSideBarStyled data-cy="ecosystems-sidebar">
      <EcosystemHeaderStyled>Ecosystem
        <PlusIconStyled icon="add"/>
      </EcosystemHeaderStyled>
      {ecosystems.map(({ name }, index) => (
        <EcosystemElementStyled key={index} data-cy={`ecosystems-element-${index}`}>
          {name}
        </EcosystemElementStyled>
      ))}
    </EcosystemsSideBarStyled>
  );
};

export default EcosystemsSideBar;
