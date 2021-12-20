/* eslint-disable no-console */
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
import SpinnerLoader from '../../../../app/commons/Spinner/Spinner';

const EcosystemsMain = ({ ecosystem, isNewEcosystem, show, handleNewEcosystemAdmin, onNewEcosystem, noSuggestions, onNewSkill, onRefresh, isThereAnyError }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState();
  const [currentEcosystem, setCurrentEcosystem] = useState(ecosystem);

  // Please, refactor this :)
  const [idToDelete, setIdToDelete] = useState('');
  const [skillToDelete, setSkillToDelete] = useState('');

  useEffect(() => {
    setCurrentEcosystem(ecosystem);
    setSkills(ecosystem?.skills);
    setIsEmpty(ecosystem?.id === 0);
    setIsLoading(ecosystem === null);
  }, [ecosystem]);

  const onDeleteClick = (sub, id, name) => {
    setSubject(sub);
    if (name) {
      setSkillToDelete(name);
    }
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
      dispatch(deleteSkillAsync(idToDelete))
        .then(() => {
          setShowModal(false);
          onRefresh();
        })
        .catch(err => console.error(err));
    }
  };

  const handleNewEcosystem = event => {
    setCurrentEcosystem({ ...currentEcosystem, name: event.target.value });
    handleNewEcosystemAdmin({ ...currentEcosystem, name: event.target.value });
  };

  const handleNewSkills = (skillIndex, skill) => {
    const currentSkills = [...skills];
    currentSkills[skillIndex] = skill;
    setCurrentEcosystem({ ...currentEcosystem, skills: currentSkills });
    handleNewEcosystemAdmin({ ...currentEcosystem, skills: currentSkills });
  };

  return (
    <EcosystemContainerStyled>
      {loading
        ? <EcosystemFallbackStyled data-cy="fallback-text" isNewEcosystem={isNewEcosystem}>
          <SpinnerLoader/>
        </EcosystemFallbackStyled>
        : <>
          <EcosystemHeaderStyled>
            <Label left={40} top={2}>Ecosystem Name</Label>
            <EcosystemNameStyledInput
              data-cy="ecosystem-name-input"
              hasError={currentEcosystem?.name === '' && isThereAnyError}
              id="name"
              placeholder="Ecosystem name"
              readOnly={!show}
              value={currentEcosystem?.name || ''}
              onChange={handleNewEcosystem}
            />
          </EcosystemHeaderStyled>
          {ecosystem?.skills.length > 0
            && <ScrollWrapper height={!show ? 75 : noSuggestions ? 60 : 45}>
              {ecosystem?.skills.map((skill, index) => (
                <EcosystemSkill
                  key={skill?.id}
                  handleNewSkills={handleNewSkills}
                  index={index}
                  isThereAnyError={isThereAnyError}
                  show={show}
                  skill={skill}
                  onDeleteClick={() => onDeleteClick('skill', skill.id, skill.name)}
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
      {showModal && <EcosystemModal handleDelete={handleDelete} nameToDelete={ skillToDelete || ecosystem?.name} subject={subject} onCloseClick={onCloseClick} />}
    </EcosystemContainerStyled>
  );
};

EcosystemsMain.propTypes = {
  noSuggestions: PropTypes.bool.isRequired,
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
  isThereAnyError: false,
  onRefresh: () => { /* empty function */ },
  show: false,
  skills: [],
};

export default EcosystemsMain;
