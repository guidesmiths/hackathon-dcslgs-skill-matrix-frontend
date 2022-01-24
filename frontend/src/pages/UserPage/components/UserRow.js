/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTour } from '@reactour/tour';

import { RowSkillsWrapper,
  RowSkillsTop,
  RowSkills,
  UserSkillName,
  StyledCheckbox,
  CheckboxWrapper,
  StyledLabel,
  RowCollapsed,
  RowSkillsBottom,
  ArrowButtonStyled,
  ButtonWrapper,
  DescriptionStyled,
  SelectWrapper,
  LevelEditor,
  AjustLevelButtons,
  AdjustButton,
  StyledInput,
  RowSkillTour,
  Tooltip,
} from './UserRow.styled';
import LevelBar from './LevelBar';
import { updateUserSkill } from '../../../redux/user/userSlice';
import Label from '../../../app/commons/Label/Label';

const UserRow = ({ i, skill, idEcosystem, edit }) => {
  const dispatch = useDispatch();
  const { isOpen } = useTour();
  const [isCollapsed, setCollapsed] = useState(true);
  const [subValue, setSubValue] = useState('neutral');
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(false);
  const [showMinus, setShowMinus] = useState(false);
  const [showPlus, setShowPlus] = useState(false);
  const handleCheckBox = () => {
    setCheck(!isChecked);
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, interested: !isChecked },
      }),
    );
  };

  useEffect(() => {
    setCheck(skill.interested || false);
  }, [skill.interested]);

  useEffect(() => {
    if (i === 0 && isOpen) {
      setCollapsed(false);
    }
  }, [isOpen]);

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

  const handleComments = event => {
    const commentsValue = event.target.value;
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, comments: commentsValue },
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

  const getDescription = selectedSkill => {
    const selectedLevel = selectedSkill.levels.find(({ level }) => level === selectedSkill.level);
    return selectedLevel ? selectedLevel.levelDescription : 'Don\'t apply';
  };

  return (
    <RowSkillsWrapper>
      <RowSkillTour data-cy={`skill-${i}`}>
        <RowSkillsTop
          data-cy={`userSkill-${skill.name}`}
          isRowDown={!isCollapsed}
        >
          <RowSkills data-cy={`userSkill-${i}`}>
            <UserSkillName>{skill.name}</UserSkillName>
            <LevelBar skill index={i} level={skill.level} sublevel={skill.sublevel}/>
            <ButtonWrapper>
              <CheckboxWrapper data-cy={'checkbox'}>
                <StyledCheckbox
                  checked={isChecked}
                  disabled={!edit}
                  id={`checkInterested ${skill.name}`}
                  name={`checkInterested ${skill.name}`}
                  type="checkbox"
                  onChange={handleCheckBox}
                />
                <StyledLabel edit={edit} htmlFor={`checkInterested ${skill.name}`} isChecked={isChecked}/>
              </CheckboxWrapper>
              <ArrowButtonStyled data-cy={`userSkillButton-${skill.name}`} type="button" onClick={() => setCollapsed(!isCollapsed)}>
                <span className="material-icons">{arrowButtonIcon}</span>
              </ArrowButtonStyled>
            </ButtonWrapper>
          </RowSkills>
        </RowSkillsTop>
        <RowCollapsed isCollapsed={isCollapsed}>
          <RowSkillsBottom data-cy={`skill-${i}-description-level`}>
            <DescriptionStyled>
              <p>{getDescription(skill)}</p>
              <Label left={25} top={-10} type="description">Description Level</Label>
            </DescriptionStyled>
            {edit && <LevelEditor>
              <SelectWrapper data-cy={'level-selector'}>
                <select data-cy="select-level" value={skill.level || ''} onChange={handleLevel}>
                  <option value={0}>0</option>
                  {skill.levels.map((e, index) => (
                    <option key={index} value={e.level}>
                      {e.level}
                    </option>
                  ))}
                </select>
                <Label left={7} top={-3} weight={700}>Level</Label>
              </SelectWrapper>
              <AjustLevelButtons data-cy={'sublevel-buttons'}>
                <AdjustButton
                  minus
                  clicked={skill.sublevel}
                  icon={'remove'}
                  level={skill.level}
                  width={50}
                  onClick={() => subValueHandler('minus')}
                  onMouseEnter={() => setShowMinus(true)}
                  onMouseLeave={() => setShowMinus(false)}
                />
                {showMinus
                && <Tooltip>When you have some of the abilities within the current skill, but haven&prime;t developed the behaviours needed you achieved goals assigned but overdue,
               due to a lack of prioritising or time management.</Tooltip>
                }

                <AdjustButton
                  clicked={skill.sublevel}
                  icon={'add'}
                  level={skill.level}
                  width={50}
                  onClick={() => subValueHandler('plus')}
                  onMouseEnter={() => setShowPlus(true)}
                  onMouseLeave={() => setShowPlus(false)}
                />
                {showPlus
                && <Tooltip plus>When you have gained certain abilities within the current skill but haven&prime;t yet developed certain behaviours needed to move to the following level.</Tooltip>
                }
              </AjustLevelButtons>
            </LevelEditor>}
          </RowSkillsBottom>
          {edit && <RowSkillsBottom data-cy={'comment-section'} >
            <StyledInput
              placeholder="Write some comments"
              value={skill.comments || ''}
              onChange={handleComments}
            />
            <Label left={60} top={6} type="description">Comment</Label>
          </RowSkillsBottom>}
        </RowCollapsed>
      </RowSkillTour>
    </RowSkillsWrapper>
  );
};

UserRow.propTypes = {
  edit: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
