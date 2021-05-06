import React from 'react';
import { useSelector } from 'react-redux';
import AnswersListStyled from './AnswersList.styled';
import AnswersListElement from './AnswersListElement/AnswersListElement';
import { selectAllAnswers } from '../../../../redux/answers/answersSlice';

const AnswersList = () => {
  const answers = useSelector(selectAllAnswers);

  return (
    <AnswersListStyled>
      {answers.map((anwser, index) => {
        const { user_id: userId, name, email, skills } = anwser;
        return (
          <AnswersListElement
            key={userId}
            email={email}
            index={index}
            name={name}
            skills={skills}
          />);
      })}
    </AnswersListStyled>
  );
};

export default AnswersList;
