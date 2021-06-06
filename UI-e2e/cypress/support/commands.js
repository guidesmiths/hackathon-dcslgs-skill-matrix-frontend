/* eslint-disable no-undef */
Cypress.Commands.add('initHome', () => {
  cy.server();
  cy.visit('/');
  cy.route({
    url: '/ui/skills/catalog',
    method: 'get',
    response: 'fixture:skills.json',
  }).as('getAllSkills');
  cy.route({
    url: '/ui/answers',
    method: 'get',
    response: 'fixture:answers.json',
  }).as('getAllAnswers');
  cy.wait(['@getAllSkills', '@getAllAnswers']);
});

Cypress.Commands.add('initUser', () => {
  cy.server();
  cy.visit('/profile');
  cy.route({
    url: '/ui/users/:id/answers',
    method: 'get',
    response: 'fixture:user.json',
  }).as('getUser');
  cy.wait('@getUser');
});
