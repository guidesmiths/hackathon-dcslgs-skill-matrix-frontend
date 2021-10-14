import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import EcosystemSkill from './EcosystemSkill/EcosystemSkill';
import EcosystemModal from './EcosystemModal/EcosystemModal';
import {
  EcosystemContainerStyled,
  EcosystemFallbackStyled,
  EcosystemNameStyledInput,
  EcosystemHeaderStyled,
  ButtonsWrapper,
  StyledButton,
  StyledDelete,
  StyledDeleteIcon,
} from './EcosystemMain.styled';
import Label from '../../../../app/commons/Label/Label';
import { deleteEcosystemAsync } from '../../../../redux/ecosystems/ecosystemsSlice';
import { deleteSkillAsync } from '../../../../redux/skills/skillsSlice';

const EcosystemsMain = ({ ecosystem, isNewEcosystem, show, handleNewEcosystemAdmin }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  // Please, refactor this :)
  const [idToDelete, setIdToDelete] = useState('');
  const [newEcosystem, setNewEcosystem] = useState();

  const onDeleteClick = (sub, id) => {
    setSubject(sub);
    setIdToDelete(id);
    setShowModal(true);
  };

  const onCloseClick = () => setShowModal(false);

  const handleDelete = () => {
    if (subject === 'ecosystem') { dispatch(deleteEcosystemAsync(idToDelete)); }
    // TODO: When I delete a skill, the modal is still open and the ecosystem's skills don't refresh
    if (subject === 'skill') { dispatch(deleteSkillAsync(idToDelete)); }
  };

  const handleNewEcosystem = e => {
    setNewEcosystem({ ...newEcosystem, name: e.target.value });
    handleNewEcosystemAdmin({ ...newEcosystem, name: e.target.value });
  };
  const handleNewSkills = skills => {
    setNewEcosystem({ ...newEcosystem, skills });
    handleNewEcosystemAdmin({ ...newEcosystem, skills });
  };

  return (<EcosystemContainerStyled>
    {!ecosystem
      ? (
        <EcosystemFallbackStyled data-cy="fallback-text">
        Select one Ecosystem or add a new one
        </EcosystemFallbackStyled>
      )
      : (
        <Fragment>
          <EcosystemHeaderStyled>
            <Label left={40} top={2}>Ecosystem Name</Label>
            <EcosystemNameStyledInput
              data-cy="ecosystem-name-input"
              id="name"
              placeholder="Ecosystem name"
              value={isNewEcosystem ? newEcosystem?.name : ecosystem.name}
              onChange={handleNewEcosystem}
            />
          </EcosystemHeaderStyled>
          {ecosystem.skills.map((skill, index) => (
            <EcosystemSkill
              key={index}
              handleNewSkills={handleNewSkills}
              index={index}
              isNewEcosystem={isNewEcosystem}
              skill={skill}
              onDeleteClick={() => onDeleteClick('skill', skill.id)}
            />
          ))}
        </Fragment>
      )}
    {show || !ecosystem ? <ButtonsWrapper>
      <StyledButton>Add new skill</StyledButton> {/* TODO: Show new skill/levels fields */}
      <StyledDelete onClick={() => onDeleteClick('ecosystem', ecosystem.id)}>
        <StyledDeleteIcon icon="delete" />
         Delete ecosystem
      </StyledDelete>
    </ButtonsWrapper>
      : null
    }
    <EcosystemModal handleDelete={handleDelete} show={showModal} subject={subject} onCloseClick={onCloseClick} />
  </EcosystemContainerStyled>
  );
};
EcosystemsMain.propTypes = {
  ecosystem: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.number,
      levels: PropTypes.arrayOf(PropTypes.shape({
        description: PropTypes.string,
        level: PropTypes.number,
      })),
      name: PropTypes.string,
    })),
  }),
  isNewEcosystem: PropTypes.bool,
  show: PropTypes.bool,
  handleNewEcosystemAdmin: PropTypes.func.isRequired, // It is not required
};

EcosystemsMain.defaultProps = {
  ecosystem: {
    id: 0,
    name: '',
    skills: [{
      id: 0,
      name: '',
      description: '',
      levels: [
        { level: 1, description: '' },
        { level: 2, description: '' },
        { level: 3, description: '' },
        { level: 4, description: '' },
      ],
    }],
  },
  isNewEcosystem: null,
  show: false,
};

export default EcosystemsMain;
