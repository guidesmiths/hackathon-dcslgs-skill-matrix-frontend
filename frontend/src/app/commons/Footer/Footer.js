import React from 'react';
import PropTypes from 'prop-types';
import FooterStyled from './Footer.styled';

const Footer = ({ children }) => (
  <FooterStyled data-cy={'footer'}>
    {children}
  </FooterStyled>
);

Footer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Footer;
