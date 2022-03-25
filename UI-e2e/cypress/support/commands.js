/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
const { sign } = require('jsonwebtoken');

Cypress.Commands.add('setLocalStorage', (key, value) => {
  cy.get('html').then(() => {
    window.localStorage.setItem(key, value);
  });
});

Cypress.Commands.add('login', (user, path = '/') => {
  const { jwtSecret } = Cypress.env();
  const testToken = sign(user, jwtSecret);
  cy.setLocalStorage('token', testToken);
  cy.visit(path);
});

Cypress.Commands.add('initHome', () => {
  cy.server();
  cy.route({
    url: '/ui/skills',
    method: 'get',
    response: 'fixture:skills',
  }).as('getAllSkills');
  cy.visit('/directory');
  cy.wait(['@getAllSkills']);
});

Cypress.Commands.add('initUser', () => {
  cy.intercept({
    url: '/ui/user/me',
    method: 'get',
  }, {
    fixture: 'user',
  }).as('getUser');
  cy.intercept({
    url: '/ui/ecosystems',
    method: 'get',
  }, {
    fixture: 'ecosystems',
  }).as('getEcosystems');
  cy.visit('/profile');
  cy.wait(['@getUser', '@getEcosystems']);
});

Cypress.Commands.add('initAdmin', () => {
  cy.server();
  cy.route({
    url: '/ui/user/me',
    method: 'get',
    response: 'fixture:user.json',
  }).as('getUser');
  cy.route({
    url: '/ui/suggestions',
    method: 'get',
    response: 'fixture:suggestions',
  }).as('getAllSuggestions');
  cy.route({
    url: '/ui/ecosystems',
    method: 'get',
    response: 'fixture:ecosystems',
  }).as('getAllEcosystems');
  cy.route({
    url: '/ui/suggestion/:id',
    method: 'delete',
    status: 204,
    response: '',
  }).as('deleteSuggestion');
  cy.visit('/ecosystem');
  cy.wait(['@getUser', '@getAllSuggestions', '@getAllEcosystems']);
});

Cypress.Commands.add('initLogin', () => {
  cy.server();
  cy.visit('/login');
});

Cypress.Commands.add('init404', () => {
  cy.server();
  cy.route({
    url: '/ui/user/me',
    method: 'get',
    response: 'fixture:user.json',
  }).as('getUser');
  cy.visit('/404');
  cy.wait(['@getUser']);
});

Cypress.Commands.add('getSkillsAndAnswersByEcosystem', id => {
  cy.intercept(
    {
      url: `/ui/ecosystem/${id}`,
      method: 'get',
    }, {
      fixture: `ecosystem/${id}`,
    },
  ).as('getEcosystem');

  cy.intercept(
    {
      url: `/ui/user/ecosystem/${id}/answers`,
      method: 'get',
    }, {
      fixture: `user/ecosystem/${id}/answers`,
    },
  ).as('getAnswerByEcoAndUser');

  cy.visit(`/profile/ecosystem/${id}`);

  cy.wait(['@getEcosystem', '@getAnswerByEcoAndUser']);
});
