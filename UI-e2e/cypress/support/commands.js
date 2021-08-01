/* eslint-disable no-undef */
Cypress.Commands.add('initHome', () => {
  cy.server();
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
  cy.visit('/');
  cy.wait(['@getAllSkills', '@getAllAnswers']);
});

Cypress.Commands.add('initUser', () => {
  cy.server();
  cy.route({
    url: '/ui/users/:id/answers',
    method: 'get',
    response: 'fixture:user.json',
  }).as('getUser');
  cy.route({
    url: '/ui/ecosystems/answers',
    method: 'get',
    response: 'fixture:ecosystems.json',
  }).as('getEcosystems');
  cy.visit('/profile');
  cy.wait(['@getUser', '@getEcosystems']);
});

Cypress.Commands.add('initAdmin', () => {
  cy.server();
  cy.route({
    url: '/ui/suggestions',
    method: 'get',
    response: 'fixture:suggestions',
  }).as('getAllSuggestions');
  cy.visit('/admin');
  cy.wait(['@getAllSuggestions']);
});
