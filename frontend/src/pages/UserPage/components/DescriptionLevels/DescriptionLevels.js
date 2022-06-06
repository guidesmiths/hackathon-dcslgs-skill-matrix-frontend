import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUserSkill } from '../../../../redux/user/userSlice';

import { Label } from '../../../../app/commons/Label';

import { RowCollapsed, RowSkillsBottom, DescriptionStyled, StyledInput, LevelDescription, LevelSelectionContainer, Level, SubLevelSelectionContainer, SubLevel } from './DescriptionLevels.styled';
import { RadioButtonMarker, RadioButton } from '../../../../app/commons/RadioButton/RadioButton.styled';

const subLevelsDescription = {
  plus: 'Exceeds Expectations - When you has gained certain abilities within the current skill but hasn\'t yet developed certain behaviours needed to move to the following level.',
  neutral: 'Meets Expectations - Consistently meets expectations, achieves a majority of core goals for the skill',
  minus: 'Needs development - Hasn\'t developed the behaviours needed you achieved goals assigned but overdue, due to a lack of prioritising or time management.',
};

const SubLevelDescription = ({ subLevel }) => {
  const splitDescription = subLevelsDescription[subLevel].split('-');
  return (
    <>
      <span className={`subLevel-${subLevel}-title`}>{splitDescription[0]}</span>
      <span>{` - ${splitDescription[1]}`}</span>
    </>
  );
};

const SubLevels = ({ skill, subLevelHandler, level }) => {
  const subLevelsToShow = level === 4
    ? { neutral: subLevelsDescription.neutral, minus: subLevelsDescription.minus }
    : subLevelsDescription;

  return (
    <SubLevelSelectionContainer>
      <p>To be more precise, please fill with an honest answer:</p>
      {Object.keys(subLevelsToShow).map((subLevel, idx) => (
        <SubLevel key={idx} sublevel={subLevel}>
          <Level>
            <RadioButton
              checked={subLevel === skill.sublevel}
              id={`${skill.id}-${subLevel}`}
              name={`${skill.id}-subLevel`}
              type="radio"
              value={subLevel}
              onChange={() => subLevelHandler(subLevel)}
            />
            <RadioButtonMarker isSelected={subLevel === skill.sublevel} />
            <LevelDescription htmlFor={`${skill.id}-${subLevel}`}>
              <SubLevelDescription subLevel={subLevel} />
            </LevelDescription>
          </Level>
        </SubLevel>
      ))}
    </SubLevelSelectionContainer>
  );
};

const Descriptions = ({ skill, selectedLevel, handleLevel, subLevelHandler }) => skill.levels.map(level => {
  const isSelected = selectedLevel(skill)?.level === level.level;

  return (
    <LevelSelectionContainer key={`${skill.id}-${level.level}`} level={level.level}>
      <Level>
        <RadioButton
          checked={isSelected}
          id={`${skill.id}-${level.level}`}
          name={skill.id}
          type="radio"
          value={level.level}
          onChange={handleLevel}
        />
        <RadioButtonMarker isSelected={isSelected} />
        <LevelDescription htmlFor={`${skill.id}-${level.level}`} id={`${skill.id}-${level.level}`} isSelected={isSelected}>{level.levelDescription}</LevelDescription>
      </Level>
      {isSelected && <SubLevels level={level.level} skill={skill} subLevelHandler={subLevelHandler} />}
    </LevelSelectionContainer>
  );
});

const SelectedDescription = ({ skill, selectedLevel }) => (
  <p style={{ marginTop: '25px' }}>{selectedLevel(skill)?.levelDescription || 'Doesn\'t apply'}</p>
);

export const DescriptionLevels = ({ edit, i, idEcosystem, skill }) => {
  const dispatch = useDispatch();
  const [currentSubLevel, setcurrentSubLevel] = useState('neutral');

  useEffect(() => {
    if (skill.sublevel) {
      setcurrentSubLevel(skill.sublevel);
    }
  }, [skill.sublevel]);

  const handleLevel = event => {
    const selectValue = Number(event.target.id.split('-')[1]);
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, level: selectValue, sublevel: 'neutral' },
      }),
    );
  };

  const subLevelHandler = value => {
    let currentValue = value;
    if (currentSubLevel === value) {
      setcurrentSubLevel('neutral');
      currentValue = 'neutral';
    } else if ((skill.level === 4 && value === 'plus') || (skill.level === 0 && value === 'minus')) {
      return;
    } else {
      setcurrentSubLevel(value);
    }
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, sublevel: currentValue },
      }),
    );
  };

  const handleComments = event => {
    const commentsValue = event.target.value;
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, comments: commentsValue },
      }),
    );
  };

  const selectedLevel = selectedSkill => selectedSkill.levels.find(({ level }) => level === selectedSkill.level);

  return (
    <RowCollapsed>
      <RowSkillsBottom data-cy={`skill-${i}-description-level`}>
        <DescriptionStyled>
          <Label left={25} top={0}>Level description</Label>
          {edit
            ? <Descriptions handleLevel={handleLevel} selectedLevel={selectedLevel} skill={skill} subLevelHandler={subLevelHandler} />
            : <SelectedDescription selectedLevel={selectedLevel} skill={skill} />
          }
        </DescriptionStyled>
      </RowSkillsBottom>
      {edit && (
        <RowSkillsBottom data-cy="comment-section">
          <StyledInput
            placeholder="Write some comments"
            value={skill.comments || ''}
            onChange={handleComments}
          />
          <Label left={60} top={6} type="description">Comment</Label>
        </RowSkillsBottom>
      )}
    </RowCollapsed>
  );
};

DescriptionLevels.propTypes = {
  edit: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
};

SelectedDescription.propTypes = {
  selectedLevel: PropTypes.func.isRequired,
  skill: PropTypes.object.isRequired,
};

SubLevels.propTypes = {
  level: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
  subLevelHandler: PropTypes.func.isRequired,
};

SubLevelDescription.propTypes = {
  subLevel: PropTypes.string.isRequired,
};
