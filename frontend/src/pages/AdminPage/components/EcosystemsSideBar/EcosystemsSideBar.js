import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { EcosystemsSideBarStyled, EcosystemHeaderStyled, EcosystemElementStyled, EcosystemScroller } from './EcosystemsSideBar.styled';
import Icon from '../../../../app/commons/icon/icon';

const EcosystemsSideBar = ({ ecosystems, onNewEcosystem, show, noSuggestions, selected }) => {
  const { url } = useRouteMatch();
  const getUrl = id => ({ pathname: `${url}`, search: `ecosystem=${id}` });
  return (
    <EcosystemsSideBarStyled data-cy="ecosystems-sidebar">
      <EcosystemHeaderStyled>Ecosystem
        {show && <Icon icon="add" onClick={onNewEcosystem}/>}
      </EcosystemHeaderStyled>
      <EcosystemScroller height={noSuggestions ? 80 : 65}>
        {ecosystems.map(({ name, id }, index) => (
          <EcosystemElementStyled key={index}
            data-cy={`ecosystems-element-${index}`}
            id={id}
            selected={selected === id}
            to={() => getUrl(id)}
          >
            {name}
          </EcosystemElementStyled>
        ))}
      </EcosystemScroller>
    </EcosystemsSideBarStyled>
  );
};
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
