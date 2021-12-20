/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { handleError } = require('../../lib/handlerError');

module.exports = () => {
  const start = ({ app, controller, logger }, cb) => {
    /**
     * GET /ui/skills
     * @route GET /ui/skills
     * @summary Get all the skills
     * @tags Skills
     * @return {array<SkillResponse>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"id":1,"name":"React"},{"id":2,"name":"Next.js"},{"id":3,"name":"Redux"},{"id":4,"name":"Redux-Sagas"},{"id":5,"name":"Gatsby"},{"id":6,"name":"Express"}]

     * @security jwtAuth
     */
    app.get('/ui/skills',
      async (req, res) => controller.skills.fetchSkills({ headers: { Authorization: req.headers.authorization } })
        .then(({ data }) => res.json(data))
        .catch(handleError(res, logger)));

    /**
     * POST /ui/skill
     * @route POST /ui/skill
     * @summary Create a new skill
     * @tags Skills
     * @param {SkillRequest} request.body.required - Skill info
     * @return {object} 200 - Skill response
     * @example response - 200 - success response example
     * {"id":7,"name":"ReactCssTransition","type":2,"ecosystem":1,"roles":[1],"description":"","created_on":"2021-08-20T21:03:15.504Z","updated_on":"2021-08-20T21:03:15.504Z"}

     * @security jwtAuth
     */

    app.post('/ui/skill',
      async (req, res) => {
        const { body } = req;
        return controller.skills.upsertSkill({
          headers: { Authorization: req.headers.authorization },
          body,
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    /**
     * DELETE /ui/skill/{id}
     * @route DELETE /ui/skill/{id}
     * @summary Delete a skill by id
     * @tags Skills
     * @param {number} id.required - Skill id

    * @security jwtAuth
    */
    app.delete('/ui/skill/:id',
      async (req, res) => {
        const { params: { id } } = req;
        return controller.skills.deleteSkill({
          urlParams: { id },
          headers: { Authorization: req.headers.authorization },
        })
          .then(({ data }) => res.json(data))
          .catch(handleError(res, logger));
      });

    cb();
  };
  return { start };
};
