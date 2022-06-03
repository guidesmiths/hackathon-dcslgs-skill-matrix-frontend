/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTour } from '@reactour/tour';

import { RowSkillsTop, RowSkills, UserSkillName, StyledCheckbox, CheckboxWrapper, StyledLabel,
  ArrowButtonStyled, ButtonWrapper, RowSkillTour } from './UserRow.styled';
import { LevelBar } from '../LevelBar';
import { updateUserSkill } from '../../../../redux/user/userSlice';

import { Icon } from '../../../../app/commons/Icon';
import { DescriptionLevels } from '../DescriptionLevels';

export const UserRow = ({ i, skill, idEcosystem, edit }) => {
  const dispatch = useDispatch();
  const { isOpen } = useTour();
  const [isCollapsed, setCollapsed] = useState(true);
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(false);

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

  return (
    <RowSkillTour data-cy={`skill-${i}`}>
      <RowSkillsTop
        data-cy={`userSkill-${skill.name}`}
        isCollapsed={isCollapsed}
        onClick={() => setCollapsed(!isCollapsed)}
      >
        <RowSkills data-cy={`userSkill-${i}`}>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar skill index={i} level={skill.level} sublevel={skill.sublevel}/>
          <ButtonWrapper>
            <CheckboxWrapper data-cy="checkbox">
              {edit
                ? <>
                  <StyledCheckbox
                    checked={isChecked}
                    disabled={!edit}
                    id={`checkInterested ${skill.name}`}
                    name={`checkInterested ${skill.name}`}
                    type="checkbox"
                    onChange={handleCheckBox}
                  />
                  <StyledLabel edit={edit} htmlFor={`checkInterested ${skill.name}`} isChecked={isChecked}/>
                </>
                : <Icon className="check-box" icon="check" show={isChecked}/>
              }
            </CheckboxWrapper>
            <ArrowButtonStyled data-cy={`userSkillButton-${skill.name}`} type="button" onClick={() => setCollapsed(!isCollapsed)}>
              <span className="material-icons">{arrowButtonIcon}</span>
            </ArrowButtonStyled>
          </ButtonWrapper>
        </RowSkills>
      </RowSkillsTop>
      {!isCollapsed && <DescriptionLevels edit={edit} i={i} idEcosystem={idEcosystem} skill={skill} />}
    </RowSkillTour>
  );
};

UserRow.propTypes = {
  edit: PropTypes.bool.isRequired,
  i: PropTypes.number.isRequired,
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
};
