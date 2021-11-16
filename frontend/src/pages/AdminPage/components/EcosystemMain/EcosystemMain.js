import React, { Fragment, useState, useEffect } from 'react';
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
import ScrollWrapper from '../../../../app/commons/ScrollWrapper/ScrollWrapper';
import { deleteEcosystemAsync, deleteSkillAsync } from '../../../../redux/ecosystems/ecosystemsSlice';

const EcosystemsMain = ({ ecosystem, isNewEcosystem, show, handleNewEcosystemAdmin, onNewEcosystem, onRefresh }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);
  const [skills, setSkills] = useState();

  // Please, refactor this :)
  const [idToDelete, setIdToDelete] = useState('');
  const [newEcosystem, setNewEcosystem] = useState();

  useEffect(() => {
    setSkills(ecosystem?.skills);
  }, [ecosystem]);

  const onDeleteClick = (sub, id) => {
    setSubject(sub);
    setIdToDelete(id);
    setShowModal(true);
  };

  const onCloseClick = () => setShowModal(false);

  const handleDelete = () => {
    if (subject === 'ecosystem') {
      dispatch(deleteEcosystemAsync(idToDelete));
      setShowModal(false);
      onRefresh();
    }
    if (subject === 'skill') {
      dispatch(deleteSkillAsync(idToDelete));
      setShowModal(false);
      onRefresh();
    }
  };

  useEffect(() => {
    setIsEmpty(ecosystem?.id === 0);
  }, [ecosystem]);

  const handleNewEcosystem = event => {
    setNewEcosystem({ ...newEcosystem, name: event.target.value });
    handleNewEcosystemAdmin({ ...newEcosystem, name: event.target.value });
  };

  const handleNewSkills = (skillIndex, skill) => {
    skills[skillIndex] = skill;
    setNewEcosystem({ ...newEcosystem, skills });
    handleNewEcosystemAdmin({ ...newEcosystem, skills });
  };

  return (<EcosystemContainerStyled>
    {isEmpty
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
              value={isNewEcosystem ? newEcosystem?.name : ecosystem?.name}
              onChange={handleNewEcosystem}
            />
          </EcosystemHeaderStyled>
          {ecosystem?.skills.length && <ScrollWrapper height={!show ? 65 : 50}>
            {ecosystem?.skills.map((skill, index) => (
              <EcosystemSkill
                key={index}
                handleNewSkills={handleNewSkills}
                index={index}
                isNewEcosystem={isNewEcosystem}
                skill={skill}
                onDeleteClick={() => onDeleteClick('skill', skill.id)}
              />
            ))}
          </ScrollWrapper>}
        </Fragment>
      )}
    {show || isEmpty ? <ButtonsWrapper>
      <StyledButton onClick={onNewEcosystem}>{isEmpty ? 'Add new ecosystem' : 'Add new skill'}</StyledButton>
      <StyledDelete onClick={() => onDeleteClick('ecosystem', ecosystem.id)}>
        <StyledDeleteIcon icon="delete" />
         Delete ecosystem
      </StyledDelete>
    </ButtonsWrapper>
      : null
    }
    <EcosystemModal handleDelete={handleDelete} nameToDelete={ecosystem?.name} show={showModal} subject={subject} onCloseClick={onCloseClick} />
  </EcosystemContainerStyled>
  );
};

EcosystemsMain.propTypes = {
  onNewEcosystem: PropTypes.func.isRequired,
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
  handleNewEcosystemAdmin: PropTypes.func,
  isNewEcosystem: PropTypes.bool,
  show: PropTypes.bool,
  skills: PropTypes.array,
  onRefresh: PropTypes.func,
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
  handleNewEcosystemAdmin: () => { /* empty function */ },
  isNewEcosystem: null,
  onRefresh: () => { /* empty function */ },
  show: false,
  skills: [],
};

export default EcosystemsMain;
