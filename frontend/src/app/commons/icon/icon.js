import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon }) => (
  (
    <Fragment>
      <span className="material-icons">
        {icon}
      </span>
    </Fragment>
  )
);

Icon.defaultProps = {
  icon: '',
};

Icon.propTypes = {
  icon: PropTypes.string,
};

export default Icon;
