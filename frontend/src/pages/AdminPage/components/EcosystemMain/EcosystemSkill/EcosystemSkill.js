import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import {
  SkillContainerStyled, SkillNameInputStyled, SkillHeaderStyled, IconsGroupStyled, IconStyled, LevelContainerStyled, LevelStyled,
} from './EcosystemSkill.styled';

const EcosystemSkill = ({ skill, index: skillIndex, isNewEcosystem }) => {
  const [isCollapsed, setIsCollapsed] = useState(null);

  useLayoutEffect(() => {
    setIsCollapsed(!isNewEcosystem);
  }, [isNewEcosystem]);

  return (
    <SkillContainerStyled data-cy={`skill-container-${skillIndex}`}>
      <SkillHeaderStyled>
        <SkillNameInputStyled
          key={`${skill.id}`}
          data-cy={`skill-name-input-${skillIndex}`}
          id={`skill-${skillIndex}`}
          placeholder="Skill name"
          value={skill.name}
        />
        <IconsGroupStyled>
          <IconStyled icon="delete_outline" />
          <IconStyled icon={isCollapsed ? 'expand_more' : 'expand_less'} onClick={() => setIsCollapsed(!isCollapsed)}/>
        </IconsGroupStyled>
      </SkillHeaderStyled>
      {skill.levels.map((level, levelIndex) => (
        <LevelContainerStyled
          key={levelIndex}
          data-cy={`skill-level-container-${levelIndex}`}
          show={!isCollapsed}
        >
          <LevelStyled
            data-cy={`skill-level-textarea-${levelIndex}`}
            placeholder={`Level ${level.level} description`}
            rows="3"
            value={level.description}
          />
        </LevelContainerStyled>
      ))}
    </SkillContainerStyled>
  );
};

EcosystemSkill.propTypes = {
  index: PropTypes.number.isRequired,
  isNewEcosystem: PropTypes.bool.isRequired,
  skill: PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    levels: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string.isRequired,
      level: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

export default EcosystemSkill;
