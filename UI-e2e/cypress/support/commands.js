/* eslint-disable no-undef */
Cypress.Commands.add('fetchSkills', () => {
  cy.visit('/');
  cy.server();
  cy.route({
    url: '/ui/skills/catalog',
    method: 'get',
    response: 'fixture:skills.json',
  }).as('getAllSkills');
  cy.wait('@getAllSkills');
});
