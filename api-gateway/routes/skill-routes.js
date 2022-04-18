/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const { handleError } = require('../../lib/handlerError');
const { limiter } = require('../../lib/rate-limiter');

module.exports = () => {
  const start = ({ app, controller, logger }, cb) => {
    /**
     * GET /ui/skills
     * @route GET /ui/skills
     * @summary Get all the skills
     * @tags Skills
     * @return {array<SkillResponse>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"skillId":1,"skillName":"React","ecosystemName":"React"},{"skillId":2,"skillName":"Next.js","ecosystemName":"React"},{"skillId":3,"skillName":"Redux","ecosystemName":"React"},{"skillId":4,"skillName":"Redux-Sagas","ecosystemName":"React"},{"skillId":5,"skillName":"Gatsby","ecosystemName":"React"},{"skillId":6,"skillName":"Express","ecosystemName":"React"}]

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

    app.post('/ui/skill', limiter,
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
    app.delete('/ui/skill/:id', limiter,
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
