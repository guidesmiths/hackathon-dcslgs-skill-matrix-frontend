import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import getEnvConfig from '../../../configuration/environment';

/**
 *  This component can be used to wrap part of a view and show it only when the
 * current environment is not listed under the "excludedEnvironments" array. If
 * the selected environment is in this exclusion list, then the wrapped content
 * will not be rendered.
 *
 * @param {*} children - JSX with the view components to render (or not)
 * @param {string} environment - Currently active environment
 * @param {string} excludedEnvironments - List of environments for which the
 *  wrapped view shall not be displayed
 */
const EnvironmentComponent = ({ children, environment, excludedEnvironments }) => {
  if (excludedEnvironments.includes(environment)) {
    return null;
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

EnvironmentComponent.defaultProps = {
  environment: getEnvConfig().environment,
  excludedEnvironments: [],
};

EnvironmentComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  environment: PropTypes.string,
  excludedEnvironments: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(['development', 'production', 'local'])),
  ),
};

export default EnvironmentComponent;
