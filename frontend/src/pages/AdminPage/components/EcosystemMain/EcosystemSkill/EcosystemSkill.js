import React, { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import Label from '../../../../../app/commons/Label/Label';
import {
  SkillContainerStyled,
  SkillNameStyledInput,
  SkillHeaderStyled,
  IconsGroupStyled,
  IconStyled,
  LevelContainerStyled,
  LevelStyled,
  StyledLabel,
} from './EcosystemSkill.styled';

const EcosystemSkill = ({ skill, index: skillIndex, isNewEcosystem, onDeleteClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(null);

  useLayoutEffect(() => {
    setIsCollapsed(!isNewEcosystem);
  }, [isNewEcosystem]);

  return (
    <SkillContainerStyled data-cy={`skill-container-${skillIndex}`}>
      <SkillHeaderStyled>
        <SkillNameStyledInput
          key={`${skill.id}`}
          data-cy={`skill-name-input-${skillIndex}`}
          id={`skill-${skillIndex}`}
          placeholder="Skill name"
          value={skill.name}
        />
        <Label top={-10} left={15}>Skill Name</Label>
        <IconsGroupStyled>
          <IconStyled icon="delete" onClick={onDeleteClick}/>
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
            rows="2"
            value={level.description}
          />
          <StyledLabel top={13} left={60}>Level {level.level}</StyledLabel>
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
  onDeleteClick: PropTypes.func.isRequired,
};

export default EcosystemSkill;
