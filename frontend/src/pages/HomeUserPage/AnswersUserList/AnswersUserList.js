import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import AnswersListUserElement from './AnswersListUserElement/AnswersListUserElement';
import { selectAllAnswers } from '../../../redux/answers/answersSlice';
import { AnswersListStyled, ScrollWrapper } from '../../HomePage/components/AnswersList/AnswersList.styled';
import { selectUserData } from '../../../redux/user/userSlice';
import Pagination from '../../../app/commons/Pagination/Pagination';

const AnswersUserList = ({ currentPage, numberOfPages, handlePagination }) => {
  const answers = useSelector(selectAllAnswers);
  const userData = useSelector(selectUserData);

  return (
    <AnswersListStyled data-cy={'answer-list'}>
      <ScrollWrapper>
        {answers
          .filter(answer => answer.id !== userData.user_id)
          .map((answer, index) => {
            const { id, name, email, userRole, ecosystems, country, seniority } = answer;
            return (
              <AnswersListUserElement
                key={`answers-${id}`}
                country={country}
                email={email}
                index={index}
                name={name}
                role={userRole}
                seniority={seniority}
                skills={ecosystems?.flatMap(ecosystem => ecosystem.skills)}
                userId={id}
              />);
          })
        }
        {answers.length > 0
      && <Pagination currentPage={currentPage > numberOfPages ? numberOfPages : currentPage} numberOfPages={numberOfPages} shape={'rounded'} size={'16px'} onChange={handlePagination} />}
      </ScrollWrapper>
    </AnswersListStyled>
  );
};
AnswersUserList.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handlePagination: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
};
export default AnswersUserList;
