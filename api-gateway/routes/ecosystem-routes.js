/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { handleError } = require('../../lib/handlerError');

module.exports = () => {
  const start = ({ app, controller, logger }, cb) => {
    /**
     * GET /ui/ecosystems
     * @route GET /ui/ecosystems
     * @summary Get all the skills by ecosystems
     * @tags Ecosystem
     * @return {array<EcosystemResponse>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"id":1,"name":"React","skills":[{"id":1,"name":"React","type":{"id":2,"name":"Hard"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":1,"levelDescription":"I have a basic knowledge of the framework. Understand the framework principles and can implement solutions defined at the documentation or tutorials"},{"level":2,"levelDescription":"I can modify effectively already working solutions to include new features"},{"level":3,"levelDescription":"I can analyse working solutions and propose refactors and generalization"},{"level":4,"levelDescription":"I can define complex architectures and I can provide optimised solutions"}]},{"id":2,"name":"Next.js","type":{"id":2,"name":"Hard"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":1,"levelDescription":"I understand the framework principles and I can implement solutions defined at the documentation or tutorials"},{"level":2,"levelDescription":"I modify effectively already working solutions to include new features"},{"level":3,"levelDescription":"I can analyse working solutions and I can propose refactors and generalisations"},{"level":4,"levelDescription":"I can define complex architectures and I can provide optimised solutions"}]},{"id":3,"name":"Redux","type":{"id":2,"name":"Hard"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":1,"levelDescription":"I have a basic knowledge of the library. I understand when use redux state and when use the component state."},{"level":2,"levelDescription":"I can separate concepts and I have a proper usage of actions and reducers"},{"level":3,"levelDescription":"I am able to keep a normalised state, using complex reducers in order to guarantee immutability and flatten/efficient structures"},{"level":4,"levelDescription":"I can use the library in combination of others to build complex solutions."}]},{"id":4,"name":"Redux-Sagas","type":{"id":2,"name":"Hard"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":1,"levelDescription":"I can add new sagas into a working project"},{"level":2,"levelDescription":"I can configure from the scratch a new project"},{"level":3,"levelDescription":"I can write both sync and async sagas processes"},{"level":4,"levelDescription":"I can use Sagas to manage the state of all the components such ui (modals/toast) navigation (navigate between screens) and app state"}]},{"id":5,"name":"Gatsby","type":{"id":2,"name":"Hard"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":null,"levelDescription":null}]}]},{"id":2,"name":"NodeJS","skills":[{"id":6,"name":"Express","type":{"id":2,"name":"Hard"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":null,"levelDescription":null}]}]}]

     * @security jwtAuth
     */
    app.get('/ui/ecosystems',
      async (req, res) => controller.ecosystems.fetchEcosystems({
        headers: { Authorization: req.headers.authorization },
      })
        .then(({ data }) => res.json(data))
        .catch(handleError(res, logger)));

    /**
     * POST /ui/ecosystem
     * @route POST /ui/ecosystem
     * @summary Create a new ecosystem
     * @tags Ecosystem
     * @param {EcosystemRequest} request.body.required - Ecosystem + Skill + Levels
     * @return {object} 200 - Ecosystem response
     * @example response - 200 - success response example
     * {"id":3,"name":"Testingg","skills":[{"id":7,"name":"Cypress","type":{"id":1,"name":"Soft"},"roles":[{"id":1,"name":"Frontend"}],"description":"","levels":[{"level":1,"levelDescription":"I work effectively modifying existing solutions implemented with it."},{"level":2,"levelDescription":"I can develop new solutions that use it. I am able to implement a not so basic text suite with its related fixtures."},{"level":3,"levelDescription":"I can design new solutions that use it, in order to optimize response time, processing cost, managing a huge amount test specs. I can handle the cy-data anchors in an efficient way. I can implement custom commands."},{"level":4,"levelDescription":"I deeply understand the library in order to get the most out of it. I understand the API integration that cypress provides and I am able to work with it in CI/CD process"}]}]}

    * @security jwtAuth
    */
    app.post('/ui/ecosystem',
      async (req, res) => {
        const { body } = req;
        return controller.ecosystems.insertEcosystem({
          headers: { Authorization: req.headers.authorization },
          body,
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    /**
     * DELETE /ui/ecosystem/{id}
     * @route DELETE /ui/ecosystem/{id}
     * @summary Delete a ecosystem by id
     * @tags Ecosystem
     * @param {number} id.required - Ecosystem id

     * @security jwtAuth
     */
    app.delete('/ui/ecosystem/:id',
      async (req, res) => {
        const { params } = req;
        const { id } = params;
        return controller.ecosystems.deleteEcosystem({
          headers: { Authorization: req.headers.authorization },
          urlParams: { id },
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    cb();
  };
  return { start };
};
