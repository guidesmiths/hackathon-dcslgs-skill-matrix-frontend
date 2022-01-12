import React from 'react';
import PropTypes from 'prop-types';
import { EcosystemBarStyled, EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled, EcosystemScroller } from './EcosystemsSideBar.styled';
import Icon from '../../../../app/commons/icon/icon';
import SkeletonWrapper from '../../../../app/commons/Skeleton/SkeletonWrapper';

const EcosystemsSideBar = ({ ecosystems, onNewEcosystem, show, noSuggestions, selected }) => (
  <EcosystemsSideBarStyled>
    <EcosystemBarStyled data-cy="ecosystems-sidebar">
      <EcosystemHeaderStyled>Ecosystem
        {show && <Icon icon="add" onClick={onNewEcosystem}/>}
      </EcosystemHeaderStyled>
      <EcosystemScroller height={noSuggestions ? 80 : 65}>
        {!ecosystems.length
          ? <SkeletonWrapper/>
          : ecosystems.map(({ name, id }, index) => (
            <EcosystemElementStyled key={index}
              data-cy={`ecosystems-element-${index}`}
              id={id}
              selected={selected === id}
              to={location => ({ ...location, pathname: `/ecosystem/${id}` })}
            >
              {name}
            </EcosystemElementStyled>
          ))}
      </EcosystemScroller>
    </EcosystemBarStyled>
  </EcosystemsSideBarStyled>
);
export default EcosystemsSideBar;

EcosystemsSideBar.propTypes = {
  ecosystems: PropTypes.array.isRequired,
  noSuggestions: PropTypes.bool.isRequired,
  onNewEcosystem: PropTypes.func.isRequired,
  selected: PropTypes.number,
  show: PropTypes.bool,
};

EcosystemsSideBar.defaultProps = {
  selected: 1,
  show: false,
};
