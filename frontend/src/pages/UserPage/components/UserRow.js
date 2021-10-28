import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RowSkillsWrapper,
  RowSkillsTop,
  RowSkills,
  UserSkillName,
  StyledCheckbox,
  ChecboxWrapper,
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
} from './UserRow.styled';
import LevelBar from './LevelBar';
import { updateUserSkill } from '../../../redux/user/userSlice';
import Label from '../../../app/commons/Label/Label';

const UserRow = ({ skill, idEcosystem, edit }) => {
  const dispatch = useDispatch();
  const [isCollapsed, setCollapsed] = useState(true);
  const [subValue, setSubValue] = useState('');
  const arrowButtonIcon = `keyboard_arrow_${isCollapsed ? 'down' : 'up'}`;
  const [isChecked, setCheck] = useState(skill?.interested || false);

  const handleCheckBox = () => {
    setCheck(!isChecked);
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, interested: !isChecked },
      }),
    );
  };

  const handleLevel = event => {
    const selectValue = event.target.value;
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
  const subValueHandler = subvalue => {
    if (subValue === subvalue) {
      setSubValue('');
    } else {
      setSubValue(subvalue);
    }
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, skill_subvalue: subvalue },
      }),
    );
  };

  const getDescription = selectedSkill => {
    const selectedLevel = selectedSkill.levels.find(({ level }) => level === selectedSkill.level);
    return selectedLevel ? selectedLevel.levelDescription : 'no level selected yet';
  };

  return (
    <RowSkillsWrapper>
      <RowSkillsTop
        data-cy={`userSkill-${skill.name}`}
        isRowDown={!isCollapsed}
      >
        <RowSkills>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar skill level={skill.level} sublevel={subValue}/>
          <ButtonWrapper>
            <ChecboxWrapper>
              <StyledCheckbox
                checked={isChecked}
                id={`checkInterested ${skill.name}`}
                name={`checkInterested ${skill.name}`}
                type="checkbox"
                onChange={handleCheckBox}
              />
              <StyledLabel htmlFor={`checkInterested ${skill.name}`} isChecked={isChecked}/>
            </ChecboxWrapper>
            <ArrowButtonStyled data-cy={`userSkillButton-${skill.name}`} type="button" onClick={() => setCollapsed(!isCollapsed)}>
              <span className="material-icons">{arrowButtonIcon}</span>
            </ArrowButtonStyled>
          </ButtonWrapper>
        </RowSkills>
      </RowSkillsTop>
      <RowCollapsed isCollapsed={isCollapsed}>
        <RowSkillsBottom>
          <DescriptionStyled>
            <p>{getDescription(skill)}</p>
            <Label left={25} top={-10} type={'description'}>Description Level</Label>
          </DescriptionStyled>
          { edit
          && <LevelEditor>
            <SelectWrapper>
              <select data-cy="select-level" value={skill.level} onChange={handleLevel}>
                {skill.levels.map((e, index) => (
                  <option key={index} value={e.level}>
                    {e.level}
                  </option>
                ))}
              </select>
              <Label left={7} top={-6} weight={700}>Level</Label>
            </SelectWrapper>
            <AjustLevelButtons>
              <AdjustButton clicked={subValue} icon={'remove'} width={50} onClick={() => subValueHandler('minus')}/>
              <AdjustButton clicked={subValue} icon={'add'} width={50} onClick={() => subValueHandler('plus')}/>
            </AjustLevelButtons>
          </LevelEditor>
          }
        </RowSkillsBottom>
        { edit
        && <RowSkillsBottom>
          <StyledInput
            placeholder="Write some comments"
            value={skill.comments}
            onChange={handleComments}
          />
          <Label left={60} top={6} type={'description'}>Comment</Label>
        </RowSkillsBottom>
        }
      </RowCollapsed>
    </RowSkillsWrapper>
  );
};

UserRow.propTypes = {
  edit: PropTypes.bool.isRequired,
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
};

export default UserRow;
