/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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
import { deleteEcosystemAsync, deleteSkillAsync, selectAllEcosystems, fetchEcosystemsAsync } from '../../../../redux/ecosystems/ecosystemsSlice';
import SpinnerLoader from '../../../../app/commons/Spinner/Spinner';
import PopUp from '../../../../app/commons/PopUp/PopUp';
import StateComponent from '../../../../app/commons/StateComponent/StateComponent';

const EcosystemsMain = ({ deleteNewSkill, ecosystem, isNewEcosystem, show, handleNewEcosystemAdmin, onNewEcosystem, noSuggestions, onNewSkill, isThereAnyError, emptyState }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const ecosystems = useSelector(selectAllEcosystems);
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const [skills, setSkills] = useState();
  const [currentEcosystem, setCurrentEcosystem] = useState(ecosystem);
  const [confirmed, setConfirmed] = useState(false);
  // Please, refactor this :)
  const [idToDelete, setIdToDelete] = useState('');
  const [nameToDelete, setNameToDelete] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    setCurrentEcosystem(ecosystem);
    setSkills(ecosystem?.skills);
    setIsEmpty(ecosystem?.id === 0);
    setIsLoading(currentEcosystem === null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ecosystem]);

  const onDeleteClick = (sub, id, name, index) => {
    if (id === 0) {
      const newEco = { ...currentEcosystem, skills: skills.filter((_, idx) => idx !== index) };
      setCurrentEcosystem(newEco);
      setSkills(newEco?.skills);
      deleteNewSkill(newEco);
    } else {
      setSubject(sub);
      setNameToDelete(name);
      setIdToDelete(id);
      setShowModal(true);
    }
  };

  const handleAdd = () => (isEmpty ? onNewEcosystem() : onNewSkill());

  const onCloseClick = () => setShowModal(false);

  const triggerDeleteEcosystem = id => {
    dispatch(deleteEcosystemAsync(id))
      .then(() => {
        dispatch(fetchEcosystemsAsync());
        setConfirmed(true);
        setShowModal(false);
        history.push(`/ecosystem/${ecosystems[0]?.id}`);
      })
      .catch(err => console.log(err));
  };

  const handleDelete = () => {
    if (subject === 'ecosystem') {
      triggerDeleteEcosystem(idToDelete);
    }
    if (subject === 'skill') {
      if (currentEcosystem?.skills?.length === 1) {
        triggerDeleteEcosystem(currentEcosystem?.id);
      }
      dispatch(deleteSkillAsync(idToDelete))
        .then(() => {
          dispatch(fetchEcosystemsAsync());
          setShowModal(false);
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

  useEffect(() => {
    if (!currentEcosystem?.name && show) {
      ref.current.focus();
    }
  }, [currentEcosystem, show]);

  return (
    <EcosystemContainerStyled data-cy={'ecosystem-info'}>
      {loading
        ? <EcosystemFallbackStyled data-cy="fallback-text" isNewEcosystem={isNewEcosystem}>
          {emptyState
            ? <StateComponent/>
            : <SpinnerLoader/>
          }
        </EcosystemFallbackStyled>
        : !emptyState
          ? <>
            <EcosystemHeaderStyled>
              <Label left={40} top={2}>Ecosystem Name</Label>
              <EcosystemNameStyledInput
                ref={ref}
                data-cy="ecosystem-name-input"
                hasError={currentEcosystem?.name === '' && isThereAnyError}
                id="name"
                placeholder="Ecosystem name"
                readOnly={!show}
                value={currentEcosystem?.name || ''}
                onChange={handleNewEcosystem}
              />
            </EcosystemHeaderStyled>
            {currentEcosystem?.skills?.length > 0
            && <ScrollWrapper height={!show ? 75 : noSuggestions ? 60 : 45}>
              {currentEcosystem?.skills.map((skill, index) => (
                <EcosystemSkill
                  key={skill?.id}
                  handleNewSkills={handleNewSkills}
                  index={index}
                  isThereAnyError={isThereAnyError}
                  show={show}
                  skill={skill}
                  onDeleteClick={() => onDeleteClick('skill', skill.id, skill.name, index)}
                />
              ))}
            </ScrollWrapper>}
          </>
          : <EcosystemFallbackStyled>
            <StateComponent/>
          </EcosystemFallbackStyled>
      }
      {confirmed && <PopUp isSuccess onCloseClick={() => setConfirmed(false)} />}
      {show && <ButtonsWrapper>
        <StyledButton data-cy={'add-skill'} onClick={handleAdd}>{isEmpty ? 'Add new ecosystem' : 'Add new skill'}</StyledButton>
        {!isEmpty && show && <StyledDelete data-cy={'delete-ecosystem-button'} onClick={() => onDeleteClick('ecosystem', ecosystem.id, ecosystem.name)}>
          <StyledDeleteIcon icon="delete" />
          Delete ecosystem
        </StyledDelete>}
      </ButtonsWrapper>}
      {showModal && <EcosystemModal handleDelete={handleDelete} nameToDelete={ nameToDelete} subject={subject} onCloseClick={onCloseClick} />}
    </EcosystemContainerStyled>
  );
};

EcosystemsMain.propTypes = {
  deleteNewSkill: PropTypes.func.isRequired,
  emptyState: PropTypes.bool.isRequired,
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
  show: false,
  skills: [],
};

export default EcosystemsMain;
