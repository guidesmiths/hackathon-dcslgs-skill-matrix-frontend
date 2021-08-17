import React, { Fragment, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import EcosystemSkill from './EcosystemSkill/EcosystemSkill';
import {
  EcosystemContainerStyled,
  EcosystemFallbackStyled,
  EcosystemNameInputStyled,
  EcosystemHeaderStyled,
  IconsGroupStyled,
  IconStyled,
} from './EcosystemMain.styled';

const EcosystemsMain = ({ ecosystem, isNewEcosystem }) => {
  const [isOnEditableMode, setIsOnEditableMode] = useState(null);

  useLayoutEffect(() => {
    setIsOnEditableMode(!!isNewEcosystem);
  }, [isNewEcosystem]);

  return (
    <EcosystemContainerStyled>
      {!ecosystem
        ? (
          <EcosystemFallbackStyled data-cy="fallback-text">
          Select one Ecosystem or add a new one
          </EcosystemFallbackStyled>
        )
        : (
          <Fragment>
            <EcosystemHeaderStyled>
              <EcosystemNameInputStyled
                data-cy="ecosystem-name-input"
                id="name"
                placeholder="Ecosystem name"
                value={ecosystem.name}
              />
              <IconsGroupStyled>
                <IconStyled icon="create" show={!isOnEditableMode} onClick={() => setIsOnEditableMode(true)}/>
                <IconStyled icon="cancel" show={isOnEditableMode} onClick={() => setIsOnEditableMode(false)}/>
                <IconStyled icon="check_circle" show={isOnEditableMode}/>
              </IconsGroupStyled>
            </EcosystemHeaderStyled>
            {ecosystem.skills.map((skill, index) => (
              <EcosystemSkill
                key={index}
                index={index}
                isNewEcosystem={isNewEcosystem}
                skill={skill}
              />
            ))}
          </Fragment>
        )
      }</EcosystemContainerStyled>
  );
};

EcosystemsMain.propTypes = {
  ecosystem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      levels: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        level: PropTypes.number,
      })),
      name: PropTypes.string,
    })),
  }),
  isNewEcosystem: PropTypes.bool,
};

EcosystemsMain.defaultProps = {
  ecosystem: {
    id: 0,
    name: '',
    skills: [{
      id: 0,
      name: '',
      description: '',
      levels: [
        { level: 1, description: '' },
        { level: 2, description: '' },
        { level: 3, description: '' },
        { level: 4, description: '' },
      ],
    }],
  },
  isNewEcosystem: null,
};

export default EcosystemsMain;
