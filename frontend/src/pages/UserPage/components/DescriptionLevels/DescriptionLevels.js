import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateUserSkill } from '../../../../redux/user/userSlice';

import { Label } from '../../../../app/commons/Label/Label';

import { RowCollapsed, RowSkillsBottom, DescriptionStyled, LevelEditor, AjustLevelButtons, AdjustButton, StyledInput,
  Tooltip, LevelDescription, LevelSelectionContainer } from './DescriptionLevels.styled';
import { RadioButtonMarker, RadioButton } from '../../../../app/commons/RadioButton/RadioButton.styled';

export const DescriptionLevels = ({ edit, i, idEcosystem, skill }) => {
  const dispatch = useDispatch();
  const [showMinus, setShowMinus] = useState(false);
  const [showPlus, setShowPlus] = useState(false);
  const [subValue, setSubValue] = useState('neutral');

  useEffect(() => {
    if (skill.sublevel) {
      setSubValue(skill.sublevel);
    }
  }, [skill.sublevel]);

  const handleLevel = event => {
    const selectValue = Number(event.target.value);
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, level: selectValue },
      }),
    );
  };

  const subValueHandler = value => {
    let currentValue = value;
    if (subValue === value) {
      setSubValue('neutral');
      currentValue = 'neutral';
    } else if ((skill.level === 4 && value === 'plus') || (skill.level === 0 && value === 'minus')) {
      return;
    } else {
      setSubValue(value);
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

  const getDescriptions = selectedSkill => skill.levels.map(level => {
    const isSelected = selectedLevel(selectedSkill)?.level === level.level;
    return (
      <LevelSelectionContainer key={`${skill.id}-${level.level}`} level={level.level}>
        <RadioButton
          checked={isSelected}
          id={level.level}
          name="skill level"
          type="radio"
          value={level.level}
          onChange={handleLevel}
        />
        <RadioButtonMarker />
        <LevelDescription htmlFor={level.level} isSelected={isSelected}>{level.levelDescription}</LevelDescription>
      </LevelSelectionContainer>
    );
  });

  const getSelectedDescription = selectedSkill => <p style={{ marginTop: '25px' }}>{selectedLevel(selectedSkill)?.levelDescription || 'Doesn\'t apply'}</p>;

  return (
    <RowCollapsed>
      <RowSkillsBottom data-cy={`skill-${i}-description-level`}>
        <DescriptionStyled>
          <Label left={25}>Level description</Label>
          {edit ? getDescriptions(skill) : getSelectedDescription(skill)}
        </DescriptionStyled>
        {edit && (
          <LevelEditor>
            <AjustLevelButtons data-cy="sublevel-buttons">
              <AdjustButton
                minus
                clicked={skill.sublevel}
                icon="remove"
                level={skill.level}
                width={50}
                onClick={() => subValueHandler('minus')}
                onMouseEnter={() => setShowMinus(true)}
                onMouseLeave={() => setShowMinus(false)}
              />
              {showMinus && (
                <Tooltip>
                    When you have some of the abilities within the current skill, but haven&prime;t developed the behaviours
                    needed you achieved goals assigned but overdue, due to a lack of prioritising or time management.
                </Tooltip>
              )}
              <AdjustButton
                clicked={skill.sublevel}
                icon="add"
                level={skill.level}
                width={50}
                onClick={() => subValueHandler('plus')}
                onMouseEnter={() => setShowPlus(true)}
                onMouseLeave={() => setShowPlus(false)}
              />
              {showPlus && (
                <Tooltip plus>
                  When you have gained certain abilities within the current skill but haven&prime;t yet developed certain
                  behaviours needed to move to the following level.
                </Tooltip>
              )}
            </AjustLevelButtons>
          </LevelEditor>)}
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
