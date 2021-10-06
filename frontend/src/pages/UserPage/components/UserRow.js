import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RowSkillsTop,
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
    const selectValue = event.target.value;
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
    return selectedLevel ? selectedLevel.description : 'no level selected yet';
  };

  return (
    <div>
      <RowSkillsTop
        data-cy={`userSkill-${skill.name}`}
        isRowDown={!isCollapsed}
      >
        <RowSkills>
          <UserSkillName>{skill.name}</UserSkillName>
          <LevelBar level={skill.level} skill/>
          <ButtonWrapper>
            <ChecboxWrapper>
              <StyledCheckbox
                checked={isChecked}
                name={`checkInterested ${skill.name}`}
                type="checkbox"
                onChange={handleCheckBox}
                id={`checkInterested ${skill.name}`}
              />
              <StyledLabel htmlFor={`checkInterested ${skill.name}`} isChecked={isChecked}/>
            </ChecboxWrapper>
            <ArrowButtonStyled type="button" onClick={() => setCollapsed(!isCollapsed)} data-cy={`userSkillButton-${skill.name}`}>
              <span className="material-icons">{arrowButtonIcon}</span>
            </ArrowButtonStyled>
          </ButtonWrapper>
        </RowSkills>
      </RowSkillsTop>
      <RowCollapsed isCollapsed={isCollapsed}>
        <RowSkillsBottom>
          <DescriptionStyled>
            <p>{getDescription(skill)}</p>
            <Label top={-10} left={25} type={'description'}>Description Level</Label>
          </DescriptionStyled>
          { edit
          && <LevelEditor>
            <SelectWrapper>
              <select value={skill.level} data-cy="select-level" onChange={handleLevel}>
                {skill.levels.map((e, index) => (
                  <option key={index} value={e.level}>
                    {e.level}
                  </option>
                ))}
              </select>
              <Label top={-6} left={7} weight={700}>Level</Label>
            </SelectWrapper>
            <AjustLevelButtons>
              <AdjustButton icon={'remove'} width={50} clicked={clicked} onClick={() => handleClick('remove')}/>
              <AdjustButton icon={'add'} width={50} clicked={clicked} onClick={() => handleClick('add')}/>
            </AjustLevelButtons>
          </LevelEditor>
          }
        </RowSkillsBottom>
        { edit
        && <RowSkillsBottom>
          <StyledInput
            value={skill.comments}
            placeholder="Write some comments"
            onChange={handleComments}
          />
          <Label top={6} left={60} type={'description'}>Comment</Label>
        </RowSkillsBottom>
        }
      </RowCollapsed>
    </div>
  );
};

UserRow.propTypes = {
  idEcosystem: PropTypes.number.isRequired,
  skill: PropTypes.object.isRequired,
  edit: PropTypes.bool.isRequired,
};

export default UserRow;
