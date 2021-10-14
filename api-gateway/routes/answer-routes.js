/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    /**
     * POST /ui/answers
     * @route POST /ui/answers
     * @summary Get user answers filtered by name, skill and level
     * @tags Answers
     * @param {FilterAnswers} request.body - Filter by name, skill id & level
     * @return {array<AnswersResponse>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"id":"asldka12311sdkasnd","email":"rachelFern@guidesmiths.com","name":"Raquel Fernandez","ecosystems":[{"id":1,"name":"React","average":3,"skills":[{"id":1,"name":"React","level":4,"sublevel":"plus","interested":false,"comments":""},{"id":2,"name":"Next.js","level":2,"sublevel":"neutral","interested":false,"comments":""}]}]},{"id":"asldka12312sdkasnd","email":"janedoe@guidesmiths.com","name":"Jane Doe","ecosystems":[{"id":1,"name":"React","average":3,"skills":[{"id":1,"name":"React","level":3,"sublevel":"neutral","interested":true,"comments":""}]},{"id":2,"name":"NodeJS","average":1,"skills":[{"id":6,"name":"Express","level":1,"sublevel":"neutral","interested":false,"comments":""}]}]},{"id":"asldka12345sdkasnd","email":"jennygo@guidesmiths.com","name":"Jenny Goijman","ecosystems":[{"id":1,"name":"React","average":1.75,"skills":[{"id":1,"name":"React","level":1,"sublevel":"neutral","interested":false,"comments":""},{"id":2,"name":"Next.js","level":1,"sublevel":"neutral","interested":false,"comments":""},{"id":3,"name":"Redux","level":3,"sublevel":"neutral","interested":false,"comments":""},{"id":4,"name":"Redux-Sagas","level":2,"sublevel":"minus","interested":false,"comments":""}]}]},{"id":"asldka12367sdkasnd","email":"danicolas@guidesmiths.com","name":"Daniel Colas","ecosystems":[{"id":1,"name":"React","average":2,"skills":[{"id":1,"name":"React","level":2,"sublevel":"neutral","interested":true,"comments":""},{"id":2,"name":"Next.js","level":1,"sublevel":"plus","interested":true,"comments":""},{"id":4,"name":"Redux-Sagas","level":3,"sublevel":"neutral","interested":true,"comments":""}]}]},{"id":"asldka12387sdkasnd","email":"ssanchez@guidesmiths.com","name":"Sofia Sanchez","ecosystems":[{"id":1,"name":"React","average":2.5,"skills":[{"id":2,"name":"Next.js","level":3,"sublevel":"minus","interested":true,"comments":""},{"id":4,"name":"Redux-Sagas","level":2,"sublevel":"neutral","interested":true,"comments":""}]}]},{"id":"asldka12389sdkasnd","email":"dyusta@guidesmiths.com","name":"David Yusta","ecosystems":[{"id":1,"name":"React","average":4,"skills":[{"id":2,"name":"Next.js","level":4,"sublevel":"plus","interested":false,"comments":""},{"id":3,"name":"Redux","level":4,"sublevel":"minus","interested":true,"comments":""}]}]},{"id":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","name":"John Doe","ecosystems":[{"id":1,"name":"React","average":3,"skills":[{"id":1,"name":"React","level":4,"sublevel":"minus","interested":true,"comments":""},{"id":2,"name":"Next.js","level":2,"sublevel":"neutral","interested":false,"comments":""},{"id":4,"name":"Redux-Sagas","level":3,"sublevel":"plus","interested":true,"comments":""}]},{"id":2,"name":"NodeJS","average":1,"skills":[{"id":6,"name":"Express","level":1,"sublevel":"plus","interested":true,"comments":""}]}]}]

     * @security jwtAuth
     */
    app.post('/ui/answers',
      async (req, res) => {
        const { body: filters } = req;
        return controller.answers.fetchAnswers(filters)
          .then(({ data }) => res.json(data))
          .catch(error => console.error(error));
      });

    /**
     * GET /ui/user/{id}/answers
     * @route GET /ui/user/{id}/answers
     * @summary Get answers filtered by user id
     * @tags Answers
     * @param {number} id.params.required - User id
     * @return {AnswersResponse} 200 - Answers response
     * @example response - 200 - success response example
     * {"id":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","name":"John Doe","ecosystems":[{"id":1,"name":"React","average":3,"skills":[{"id":1,"name":"React","level":4,"sublevel":"minus","interested":true,"comments":""},{"id":2,"name":"Next.js","level":2,"sublevel":"neutral","interested":false,"comments":""},{"id":4,"name":"Redux-Sagas","level":3,"sublevel":"plus","interested":true,"comments":""}]},{"id":2,"name":"NodeJS","average":1,"skills":[{"id":6,"name":"Express","level":1,"sublevel":"plus","interested":true,"comments":""}]}]}

     * @security jwtAuth
     */
    app.get('/ui/user/:id/answers',
      async (req, res) => {
        const { params } = req;
        const { id } = params;
        return controller.answers.fetchAnswersByUser({
          urlParams: { id },
        })
          .then(({ data }) => res.json(data))
          .catch(error => console.error(error));
      });

    /**
     * POST /ui/user/{id}/answers
     * @route POST /ui/user/{id}/answers
     * @summary Create, update or delete answers
     * @tags Answers
     * @param {array<AnswerRequest>} request.body.required - Answers data (without user_id)
     * @return {AnswersResponse} 200 - Answers response
     * @example response - 200 - success response example
     * {"id":"asldka12312sdkasnd","email":"janedoe@guidesmiths.com","name":"Jane Doe","ecosystems":[{"id":1,"name":"React","average":3,"skills":[{"id":1,"name":"React","level":3,"sublevel":"neutral","interested":true,"comments":""},{"id":2,"name":"Next.js","level":2,"sublevel":"plus","interested":true,"comments":"This is my second comment"},{"id":3,"name":"Redux","level":4,"sublevel":"minus","interested":true,"comments":"This is my comment"}]},{"id":2,"name":"NodeJS","average":1,"skills":[{"id":6,"name":"Express","level":1,"sublevel":"neutral","interested":false,"comments":""}]}]}
     *
     * @security jwtAuth
     */
    app.post('/ui/user/:id/answers',
      async (req, res) => {
        const { body: payload, params } = req;
        const { id } = params;

        return controller.answers.insertAnswers({
          urlParams: { id },
          body: payload,
        })
          .then(({ data }) => res.json(data))
          .catch(error => console.error(error));
      });

    cb();
  };
  return { start };
};
