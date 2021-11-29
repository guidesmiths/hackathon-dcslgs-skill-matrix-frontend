import React, { useState, useEffect } from 'react';
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

const EcosystemSkill = ({ skill, index: skillIndex, show, isNewEcosystem, onDeleteClick, handleNewSkills, isThereAnyError }) => {
  const [isCollapsed, setIsCollapsed] = useState(null);
  const [currentSkill, setCurrentSkill] = useState(skill);

  useEffect(() => {
    setIsCollapsed(!isNewEcosystem);
  }, [isNewEcosystem]);

  useEffect(() => {
    setCurrentSkill(skill);
  }, [skill]);

  const handleNewSkillName = event => {
    // TODO: When I was creating a new ecosystem, I couldn't find where to add the skill type, the skill roles and the skill description.
    // Please, delete the mocked type, roles and description when this is fixed.
    const type = 1;
    const roles = [1, 3];
    const description = 'Testing description';
    setCurrentSkill({ ...currentSkill, name: event.target.value, type, roles, description, levels: currentSkill.levels });
    handleNewSkills(skillIndex, { ...currentSkill, name: event.target.value, type, roles, description, levels: currentSkill.levels });
  };

  const handleNewLevel = (event, index) => {
    currentSkill.levels[index].levelDescription = event.target.value;
    handleNewSkills(skillIndex, { ...currentSkill, levels: currentSkill.levels });
  };

  return (
    <SkillContainerStyled data-cy={`skill-container-${skillIndex}`}>
      <SkillHeaderStyled>
        <SkillNameStyledInput
          key={`${skill.id}`}
          data-cy={`skill-name-input-${skillIndex}`}
          hasError={currentSkill.name === '' && isThereAnyError}
          id={`skill-${skillIndex}`}
          placeholder="Skill name"
          readOnly={!show}
          value={currentSkill.name || ''}
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
            hasError={currentSkill.levels[levelIndex].levelDescription === '' && isThereAnyError}
            placeholder={`Level ${level.level} description`}
            readOnly={!show}
            rows="2"
            value={currentSkill.levels[levelIndex].levelDescription}
            onChange={e => handleNewLevel(e, levelIndex)}
          />
          <StyledLabel left={60} top={13}>Level {level.level}</StyledLabel>
        </LevelContainerStyled>
      ))}
    </SkillContainerStyled>
  );
};

EcosystemSkill.propTypes = {
  handleNewSkills: PropTypes.func.isRequired, // It is not required
  index: PropTypes.number.isRequired,
  isNewEcosystem: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
  skill: PropTypes.shape({
    description: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    levels: PropTypes.arrayOf(PropTypes.shape({
      level: PropTypes.number,
      levelDescription: PropTypes.string,
    })),
  }).isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  isThereAnyError: PropTypes.bool,
};

EcosystemSkill.defaultProps = {
  isThereAnyError: false,
};

export default EcosystemSkill;
