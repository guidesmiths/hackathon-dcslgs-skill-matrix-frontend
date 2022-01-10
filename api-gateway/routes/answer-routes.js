/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { handleError } = require('../../lib/handlerError');

module.exports = () => {
  const start = ({ app, controller, logger }, cb) => {
    /**
     * POST /api/v1/usersFiltered
     * @route POST /api/v1/usersFiltered
     * @summary Get users filtered by name, skill and level
     * @tags Answers
     * @param {FilterAnswers} request.body - Filter by name, skill id & level
     * @return {array<User>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"userName":"Raquel Fernandez","userId":"asldka12311sdkasnd","email":"rachelFern@guidesmiths.com","userRole":"user","country":null,"seniority":null},{"userName":"Jane Doe","userId":"asldka12312sdkasnd","email":"janedoe@guidesmiths.com","userRole":"user","country":null,"seniority":null},{"userName":"Daniel Colas","userId":"asldka12367sdkasnd","email":"danicolas@guidesmiths.com","userRole":"user","country":null,"seniority":null},{"userName":"John Doe","userId":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","userRole":"user","country":null,"seniority":null}]

     * @security jwtAuth
     */
    app.post('/ui/usersFiltered',
      async (req, res) => {
        const { body } = req;

        return controller.answers.fetchUsersFiltered({
          body,
          headers: { Authorization: req.headers.authorization },
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    /**
     * POST /ui/answersByUser/{id}
     * @route POST /ui/answersByUser/{id}
     * @summary Get user answers by user
     * @tags Answers
     * @param {number} id.params.required - User id
     * @return {array<AnswersResponse>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"id":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","name":"John Doe","ecosystems":[{"id":1,"name":"React","average":3,"skills":[{"id":1,"name":"React","level":4,"levelDescription":"I can define complex architectures and I can provide optimised solutions","sublevel":"minus","interested":true,"comments":""},{"id":2,"name":"Next.js","level":2,"levelDescription":"I modify effectively already working solutions to include new features","sublevel":"neutral","interested":false,"comments":""},{"id":4,"name":"Redux-Sagas","level":3,"levelDescription":"I can write both sync and async sagas processes","sublevel":"plus","interested":true,"comments":""}]},{"id":2,"name":"NodeJS","average":1.33,"skills":[{"id":6,"name":"Express","level":1,"levelDescription":"I know http verbs (at least POST, GET), REST basics, URL routing and how to handle basics http error codes and responses","sublevel":"plus","interested":true,"comments":""}]}],"userRole":"user"}]

     * @security jwtAuth
     */
    app.post('/ui/answersByUser/:id',
      async (req, res) => {
        const { params: { id } } = req;

        return controller.answers.fetchAnswersByUser({
          urlParams: { id },
          headers: { Authorization: req.headers.authorization },
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    /**
     * GET /ui/user/{userId}/ecosystem/{ecoId}/answers
     * @route GET /ui/user/{userId}/ecosystem/{ecoId}/answers
     * @summary Get answers filtered by user id & ecosystem id
     * @tags Answers
     * @param {number} userId.params.required - User id
     * @param {number} ecoId.params.required - Ecosystem id
     * @return {AnswersResponse} 200 - Answers response
     * @example response - 200 - success response example
     * {"id":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","name":"John Doe","ecosystems":[{"id":1,"name":"React","average":1.8,"skills":[{"id":1,"name":"React","level":4,"sublevel":"minus","interested":true,"comments":""},{"id":4,"name":"Redux-Sagas","level":3,"sublevel":"plus","interested":true,"comments":""},{"id":2,"name":"Next.js","level":2,"sublevel":"neutral","interested":false,"comments":""},{"id":5,"name":"Gatsby","level":0,"sublevel":"neutral","interested":null,"comments":null},{"id":3,"name":"Redux","level":0,"sublevel":"neutral","interested":null,"comments":null}]}],"userRole":"user","country":null,"seniority":null}

     * @security jwtAuth
     */
    app.get('/ui/user/:userId/ecosystem/:ecoId/answers',
      async (req, res) => {
        const { params: { userId, ecoId } } = req;

        return controller.answers.fetchAnswersByUserAndEcosystem({
          urlParams: { userId, ecoId },
          headers: { Authorization: req.headers.authorization },
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    /**
     * POST /ui/user/{id}/answers
     * @route POST /ui/user/{id}/answers
     * @summary Create, update or delete answers
     * @tags Answers
     * @param {array<AnswerRequest>} request.body.required - Answers data (without user_id)
     * @return {AnswersResponse} 200 - Answers response
     * @example response - 200 - success response example
     * {"id":"asldka12312sdkasnd","email":"janedoe@guidesmiths.com","name":"Jane Doe","ecosystems":[{"id":1,"name":"React","average":1.8,"skills":[{"id":1,"name":"React","level":3,"sublevel":"neutral","interested":true,"comments":""},{"id":2,"name":"Next.js","level":2,"sublevel":"plus","interested":true,"comments":"This is my second comment"},{"id":3,"name":"Redux","level":4,"sublevel":"minus","interested":true,"comments":"This is my comment"},{"id":5,"name":"Gatsby","level":0,"sublevel":"neutral","interested":null,"comments":null},{"id":4,"name":"Redux-Sagas","level":0,"sublevel":"neutral","interested":null,"comments":null}]}],"userRole":"user","country":null,"seniority":null}
     *
     * @security jwtAuth
     */
    app.post('/ui/user/:id/answers',
      async (req, res) => {
        const { body, params: { id } } = req;

        return controller.answers.insertAnswers({
          urlParams: { id },
          body,
          headers: { Authorization: req.headers.authorization },
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    cb();
  };
  return { start };
};
