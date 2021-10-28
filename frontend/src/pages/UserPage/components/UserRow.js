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
  const [clicked, isClicked] = useState('');
  const [selectedValue, setSelectedValue] = useState(skill.level);
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
    const selectValue = parseInt(event.target.value, 10);
    setSelectedValue(selectValue);
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

  const handleClick = click => {
    isClicked(click);
    let updatedValue = selectedValue;
    if (click === 'add' && updatedValue + 1 <= 4) {
      updatedValue += 1;
    }
    if (click === 'remove' && updatedValue - 1 >= 0) {
      updatedValue -= 1;
    }
    dispatch(
      updateUserSkill({
        idEcosystem,
        skill: { ...skill, level: updatedValue },
      }),
    );
    setSelectedValue(updatedValue);
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
          <LevelBar skill level={skill.level} />
          <ButtonWrapper>
            <ChecboxWrapper>
              <StyledCheckbox
                checked={isChecked}
                id={`checkInterested ${skill.name}`}
                name={`checkInterested ${skill.name}`}
                type="checkbox"
                onChange={handleCheckBox}
                disabled={!edit}
              />
              <StyledLabel htmlFor={`checkInterested ${skill.name}`} isChecked={isChecked} edit={edit}/>
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
              <AdjustButton clicked={clicked} icon={'remove'} width={50} onClick={() => handleClick('remove')}/>
              <AdjustButton clicked={clicked} icon={'add'} width={50} onClick={() => handleClick('add')}/>
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
