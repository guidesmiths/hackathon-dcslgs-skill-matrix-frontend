const { handleError } = require('../../lib/handlerError');

/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller, logger }, cb) => {
    app.post('/ui/users/:id/answers', (req, res) => ({}));

    /**
     * POST /api/v1/user
     * @route POST /api/v1/user
     * @summary Create user
     * @tags Users
     * @param {User} request.body.required - User info
     * @return {User} 200 - Suggestion response
     * [{"user_id":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","img_url":null,"name":"John Doe","domain":null,"role":"user"}]
     * @security jwtAuth
     */
    app.post('/ui/user',
      async (req, res) => controller.users.insertUser({
        headers: { Authorization: req.headers.authorization },
      })
        .then(({ data }) => res.json(data))
        .catch(error => console.error(error)));

    /**
     * GET /api/v1/user/me
     * @route GET /api/v1/user/me
     * @summary Get user by id
     * @tags Users
     * @return {User} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"user_id":"asldkan21ansdkasnd","email":"johndoe@guidesmiths.com","img_url":null,"name":"John Doe","domain":null,"role":"user"}]
     * @security jwtAuth
     */
    app.get('/ui/user/me',
      async (req, res) => controller.users.fetchUserInfo({ headers: { Authorization: req.headers.authorization } })
        .then(({ data }) => res.json(data))
        .catch(handleError(res, logger)));

    cb();
  };

  return { start };
};
