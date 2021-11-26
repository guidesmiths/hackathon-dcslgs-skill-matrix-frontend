import React, { useState, useEffect } from 'react';
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

const EcosystemsMain = ({ ecosystem, isNewEcosystem, show, handleNewEcosystemAdmin, onNewEcosystem, onNewSkill, onRefresh, isThereAnyError }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [isEmpty, setIsEmpty] = useState(null);
  const [skills, setSkills] = useState();
  const [currentEcosystem, setCurrentEcosystem] = useState(ecosystem);

  // Please, refactor this :)
  const [idToDelete, setIdToDelete] = useState('');

  useEffect(() => {
    setSkills(ecosystem?.skills);
    setIsEmpty(ecosystem?.id === 0);
    setCurrentEcosystem(ecosystem);
  }, [ecosystem]);

  const onDeleteClick = (sub, id) => {
    setSubject(sub);
    setIdToDelete(id);
    setShowModal(true);
  };

  const handleAdd = () => (isEmpty ? onNewEcosystem() : onNewSkill());

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

  const handleNewEcosystem = event => {
    setCurrentEcosystem({ ...currentEcosystem, name: event.target.value });
    handleNewEcosystemAdmin({ ...currentEcosystem, name: event.target.value });
  };

  const handleNewSkills = (skillIndex, skill) => {
    skills[skillIndex] = skill;
    setCurrentEcosystem({ ...currentEcosystem, skills });
    handleNewEcosystemAdmin({ ...currentEcosystem, skills });
  };

  return (
    <EcosystemContainerStyled>
      {isEmpty
        ? <EcosystemFallbackStyled data-cy="fallback-text">
            Select one Ecosystem or add a new one
        </EcosystemFallbackStyled>
        : <>
          <EcosystemHeaderStyled>
            <Label left={40} top={2}>Ecosystem Name</Label>
            <EcosystemNameStyledInput
              data-cy="ecosystem-name-input"
              hasError={currentEcosystem?.name === '' && isThereAnyError}
              id="name"
              placeholder="Ecosystem name"
              value={currentEcosystem?.name || ''}
              onChange={handleNewEcosystem}
            />
          </EcosystemHeaderStyled>
          {ecosystem?.skills.length
            && <ScrollWrapper height={!show ? 75 : 65}>
              {ecosystem?.skills.map((skill, index) => (
                <EcosystemSkill
                  key={index}
                  handleNewSkills={handleNewSkills}
                  index={index}
                  isNewEcosystem={isNewEcosystem}
                  isThereAnyError={isThereAnyError}
                  skill={skill}
                  onDeleteClick={() => onDeleteClick('skill', skill.id)}
                />
              ))}
            </ScrollWrapper>}
        </>
      }
      {(show || isEmpty) && <ButtonsWrapper>
        <StyledButton onClick={handleAdd}>{isEmpty ? 'Add new ecosystem' : 'Add new skill'}</StyledButton>
        {!isEmpty && <StyledDelete onClick={() => onDeleteClick('ecosystem', ecosystem.id)}>
          <StyledDeleteIcon icon="delete" />
          Delete ecosystem
        </StyledDelete>}
      </ButtonsWrapper>}
      {showModal && <EcosystemModal handleDelete={handleDelete} nameToDelete={ecosystem?.name} subject={subject} onCloseClick={onCloseClick} />}
    </EcosystemContainerStyled>
  );
};

EcosystemsMain.propTypes = {
  onNewEcosystem: PropTypes.func.isRequired,
  onNewSkill: PropTypes.func.isRequired,
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
  isThereAnyError: PropTypes.bool,
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
        { level: 1, levelDescription: '' },
        { level: 2, levelDescription: '' },
        { level: 3, levelDescription: '' },
        { level: 4, levelDescription: '' },
      ],
    }],
  },
  handleNewEcosystemAdmin: () => { /* empty function */ },
  isNewEcosystem: null,
  onRefresh: () => { /* empty function */ },
  show: false,
  skills: [],
  isThereAnyError: false,
};

export default EcosystemsMain;
