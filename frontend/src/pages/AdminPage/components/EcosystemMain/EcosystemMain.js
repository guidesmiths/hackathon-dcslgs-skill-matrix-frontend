import React, { Fragment, useState } from 'react';
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

const EcosystemsMain = ({ ecosystem, isNewEcosystem, show }) => {
  const [showModal, setShowModal] = useState(false);
  const [subject, setSubject] = useState('');

  const onDeleteClick = sub => {
    setSubject(sub);
    setShowModal(true);
  };

  const onCloseClick = () => {
    setShowModal(false);
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
            <Label top={2} left={40}>Ecosystem Name</Label>
            <EcosystemNameStyledInput
              data-cy="ecosystem-name-input"
              id="name"
              placeholder="Ecosystem name"
              value={ecosystem.name}
            />
          </EcosystemHeaderStyled>
          {ecosystem.skills.map((skill, index) => (
            <EcosystemSkill
              key={index}
              index={index}
              isNewEcosystem={isNewEcosystem}
              skill={skill}
              onDeleteClick={() => onDeleteClick('skill')}
            />
          ))}
        </Fragment>
      )}
    {show || !ecosystem ? <ButtonsWrapper>
      <StyledButton>Add new skill</StyledButton>
      <StyledDelete onClick={() => onDeleteClick('ecosystem')}>
        <StyledDeleteIcon icon="delete"/>
         Delete ecosystem
      </StyledDelete>
    </ButtonsWrapper>
      : null
    }
    <EcosystemModal show={showModal} onCloseClick={onCloseClick} subject={subject}/>
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
