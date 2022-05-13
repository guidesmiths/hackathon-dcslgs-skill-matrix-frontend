import React from 'react';
import PropTypes from 'prop-types';
import { PopUpStyled, PopUpStyledTitleWrapper, PopUpStyledTitle, PopUpStyledIcon, PopUpStyledIconWarning, PopUpStyledCloseIcon } from './PopUp.styled';

export const PopUp = ({ isSuccess }) => (
  <PopUpStyled isSuccess={isSuccess}>
    <PopUpStyledTitleWrapper>
      {isSuccess
        ? <PopUpStyledIcon icon="checkCircle" />
        : <PopUpStyledIconWarning icon="warning" />
      }
      <PopUpStyledTitle isSuccess={isSuccess}>
        { isSuccess
          ? 'Your changes have been saved'
          : 'It seems like you forgot to complete some inputs'
        }
      </PopUpStyledTitle>
      {!isSuccess && <PopUpStyledCloseIcon icon="close" />}
    </PopUpStyledTitleWrapper>
  </PopUpStyled>
);

PopUp.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
};
