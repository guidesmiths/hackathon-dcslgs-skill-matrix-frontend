/* eslint-disable no-undef */
Cypress.Commands.add('init', () => {
  cy.server();
  cy.visit('/');
  cy.route({
    url: '/ui/skills/catalog',
    method: 'get',
    response: 'fixture:skills',
  }).as('getAllSkills');
  cy.route({
    url: '/ui/answers',
    method: 'get',
    response: 'fixture:answers',
  }).as('getAllAnswers');
  cy.wait(['@getAllSkills', '@getAllAnswers']);
});
