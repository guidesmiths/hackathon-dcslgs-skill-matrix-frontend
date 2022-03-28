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

Cypress.Commands.add('getMyUser', ({ url }) => {
  cy.intercept({
    url: '/ui/user/me',
    method: 'get',
  }, {
    fixture: 'user',
  }).as('getUser');

  cy.visit(url);

  cy.wait(['@getUser']);
});

Cypress.Commands.add('initDirectory', () => {
  cy.getMyUser({ url: '/directory' });

  cy.intercept({
    url: '/ui/skills',
    method: 'get',
  }, {
    fixture: 'skills',
  }).as('getAllSkills');

  cy.intercept({
    url: '/ui/usersFiltered?page=1',
    method: 'post',
  }, {
    fixture: 'usersFiltered',
  }).as('getUsersFiltered');

  cy.visit('/directory');

  cy.wait(['@getAllSkills', '@getUsersFiltered']);
});

Cypress.Commands.add('initUser', () => {
  cy.getMyUser({ url: '/profile' });

  cy.intercept({
    url: '/ui/ecosystems',
    method: 'get',
  }, {
    fixture: 'ecosystems',
  }).as('getEcosystems');

  cy.visit('/profile');

  cy.wait(['@getEcosystems']);
});

Cypress.Commands.add('initAdmin', () => {
  cy.getMyUser({ url: '/ecosystem' });

  cy.intercept({
    url: '/ui/suggestions',
    method: 'get',
  }, {
    fixture: 'suggestions',
  }).as('getAllSuggestions');

  cy.intercept({
    url: '/ui/ecosystems',
    method: 'get',
  }, {
    fixture: 'ecosystems',
  }).as('getAllEcosystems');

  cy.intercept({
    url: '/ui/suggestion/:id',
    method: 'delete',
    status: 204,
    response: '',
  }).as('deleteSuggestion');

  cy.visit('/ecosystem');

  cy.wait(['@getUser', '@getAllSuggestions', '@getAllEcosystems']);
});

Cypress.Commands.add('initLogin', () => {
  cy.visit('/login');
});

Cypress.Commands.add('init404', () => {
  cy.getMyUser({ url: '/404' });
});

Cypress.Commands.add('getEcosystemSkills', ({ id, url }) => {
  cy.intercept({
    url: `/ui/ecosystem/${id}`,
    method: 'get',
  }, {
    fixture: `ecosystem/${id}`,
  }).as('getEcosystem');

  cy.visit(url);

  cy.wait(['@getEcosystem']);
});

Cypress.Commands.add('getSkillsAndAnswersByEcosystem', ({ id, url }) => {
  cy.getEcosystemSkills({ id, url });

  cy.intercept({
    url: `/ui/user/ecosystem/${id}/answers`,
    method: 'get',
  }, {
    fixture: `user/ecosystem/${id}/answers`,
  }).as('getAnswerByEcoAndUser');

  cy.visit(`/profile/ecosystem/${id}`);

  cy.wait(['@getAnswerByEcoAndUser']);
});
