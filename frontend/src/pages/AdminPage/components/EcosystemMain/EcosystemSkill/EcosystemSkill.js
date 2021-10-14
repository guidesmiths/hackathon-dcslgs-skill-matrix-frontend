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

const EcosystemSkill = ({ skill, index: skillIndex, isNewEcosystem, onDeleteClick, handleNewSkills }) => {
  const [isCollapsed, setIsCollapsed] = useState(null);

  useLayoutEffect(() => {
    setIsCollapsed(!isNewEcosystem);
  }, [isNewEcosystem]);

  const [newSkill, setNewSkill] = useState();
  const [newLevel, setNewLevel] = useState();

  const handleNewSkillName = e => {
    // TODO: When I was creating a new ecosystem, I couldn't find where to add the skill type, the skill roles and the skill description.
    // Please, delete the mocked type, roles and description when this is fixed.
    const type = 1;
    const roles = [1, 3];
    const description = 'Testing description';
    setNewSkill({ ...newSkill, name: e.target.value, type, roles, description });
    handleNewSkills({ ...newSkill, name: e.target.value, type, roles, description });
  };

  const handleNewLevel = (e, index) => {
    setNewLevel({ ...newLevel, [index + 1]: e.target.value });
    const levels = newLevel && Object.entries(newLevel).map(([key, value]) => ({ level: key, description: value }));
    setNewSkill({ ...newSkill, levels });
    handleNewSkills({ ...newSkill, levels });
  };

  return (
    <SkillContainerStyled data-cy={`skill-container-${skillIndex}`}>
      <SkillHeaderStyled>
        <SkillNameStyledInput
          key={`${skill.id}`}
          data-cy={`skill-name-input-${skillIndex}`}
          id={`skill-${skillIndex}`}
          placeholder="Skill name"
          value={isNewEcosystem ? newSkill?.name : skill.name}
          onChange={handleNewSkillName}
        />
        <Label left={15} top={-10}>Skill Name</Label>
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
            value={isNewEcosystem ? newLevel?.[levelIndex + 1] : level.levelDescription}
            onChange={e => handleNewLevel(e, levelIndex)}
          />
          <StyledLabel left={60} top={13}>Level {level.level}</StyledLabel>
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
  handleNewSkills: PropTypes.func.isRequired, // It is not required
};

export default EcosystemSkill;
