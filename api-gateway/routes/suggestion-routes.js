/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
module.exports = () => {
  const start = ({ app, controller }, cb) => {
    /**
     * GET /ui/suggestions
     * @route GET /ui/suggestions
     * @summary Get all the suggestions
     * @tags Suggestions
     * @return {array<SuggestionResponse>} 200 - Successful operation
     * @example response - 200 - success response example
     * [{"id":1,"description":"This is a suggestion related to the skill Next.js.","subject":"Skills","userId":"asldkan21ansdkasnd","userName":"John Doe","createdOn":"2021-08-20T20:46:32.141Z","updatedOn":"2021-08-20T20:46:32.141Z"},{"id":2,"description":"This is an other suggestion related to the skill Next.js.","subject":"Skills","userId":"asldka12312sdkasnd","userName":"Jane Doe","createdOn":"2021-08-20T20:46:32.141Z","updatedOn":"2021-08-20T20:46:32.141Z"},{"id":3,"description":"I would like to add \"Chinese\" as a new skill","subject":"Skills","userId":"asldka12345sdkasnd","userName":"Jenny Goijman","createdOn":"2021-08-20T20:46:32.141Z","updatedOn":"2021-08-20T20:46:32.141Z"},{"id":4,"description":"This is a suggestion","subject":"Others","userId":"asldka12367sdkasnd","userName":"Daniel Colas","createdOn":"2021-08-20T20:46:32.141Z","updatedOn":"2021-08-20T20:46:32.141Z"}]

     * @security jwtAuth
     */
    app.get('/ui/suggestions',
      async (req, res) => controller.suggestions.fetchSuggestions({
        headers: { Authorization: req.headers.authorization },
      })
        .then(({ data }) => res.json(data))
        .catch(error => console.error(error)));

    /**
     * POST /ui/suggestion
     * @route POST /ui/suggestion
     * @summary Create a new suggestion
     * @tags Suggestions
     * @param {SuggestionRequest} request.body.required - Suggestion info
     * @return {object} 200 - Suggestion response
     * @example response - 200 - success response example
     * {"id":5,"description":"This is a new suggestion.","subject":"Others","user_id":"asldka12367sdkasnd","created_on":"2021-08-20T20:46:32.309Z","updated_on":"2021-08-20T20:46:32.309Z"}

     * @security jwtAuth
     */
    app.post('/ui/suggestion',
      async (req, res) => {
        const { body } = req;
        return controller.suggestions.insertSuggestion({
          body,
          headers: { Authorization: req.headers.authorization },
        })
          .then(({ data }) => res.json(data))
          .catch(error => console.error(error));
      });

    /**
     * DELETE /ui/suggestion/{id}
     * @route DELETE /ui/suggestion/{id}
     * @summary Delete a suggestion by id
     * @tags Suggestions
     * @param {number} id.required - Suggestion id

    * @security jwtAuth
    */
    app.delete('/ui/suggestion/:id',
      async (req, res) => {
        const { params } = req;
        const { id } = params;
        return controller.suggestions.deleteSuggestion({
          headers: { Authorization: req.headers.authorization },
          urlParams: { id },
        })
          .then(({ data }) => res.json(data))
          .catch(error => console.error(error));
      });

    cb();
  };
  return { start };
};
