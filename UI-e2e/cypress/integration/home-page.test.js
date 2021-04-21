/* eslint-disable no-undef */
describe('Home page', () => {
  it('should render home page with "hola mundo"', () => {
    cy.visit('/');
  });

  it('should redirect to home page if route doesn\'t exist', () => {
    cy.visit('/no-exist');
    cy.url().should('match', new RegExp('/'));
  });

  it('should fetch the initial State', () => {
    cy.server();
    cy.route({
      url: '/ui/skills/catalog',
      method: 'get',
      response: 'fixture:skills.json',
    }).as('getAllSkills');
    cy.wait('@getAllSkills');
  });
});
