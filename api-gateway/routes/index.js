const System = require('systemic');
const adminRoutes = require('./admin-routes');
const uiRoutes = require('./ui-routes');
const skillRoutes = require('./skill-routes');
const answerRoutes = require('./answer-routes');
const userRoutes = require('./user-routes');
const suggestionRoutes = require('./suggestion-routes');
const ecosystemRoutes = require('./ecosystem-routes');

const commonDependencies = ['config', 'logger', 'app'];

module.exports = new System({ name: 'routes' })
  .add('routes.admin', adminRoutes())
  .dependsOn(...commonDependencies, 'manifest')
  .add('routes.skills', skillRoutes())
  .dependsOn(...commonDependencies, 'controller')
  .add('routes.answers', answerRoutes())
  .dependsOn(...commonDependencies, 'controller')
  .add('routes.user', userRoutes())
  .dependsOn(...commonDependencies, 'controller')
  .add('routes.ecosystems', ecosystemRoutes())
  .dependsOn(...commonDependencies, 'controller')
  .add('routes.suggestions', suggestionRoutes())
  .dependsOn(...commonDependencies, 'controller')
  .add('routes.ui', uiRoutes())
  .dependsOn(...commonDependencies)
  .add('routes')
  // CAUTION!
  // - 'routes.admin' must be the first dependency, since it makes some configuration
  // - 'routes.ui' must be the last dependency, since it listens to '/*' endpoint
  .dependsOn(
    'routes.admin',
    'routes.skills',
    'routes.answers',
    'routes.user',
    'routes.ecosystems',
    'routes.suggestions',
    'routes.ui',
  );
