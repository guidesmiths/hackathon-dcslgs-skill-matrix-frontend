/* eslint-disable no-undef */
import { user } from '../../users';

describe('Suggestion form', () => {
  beforeEach(() => {
    cy.login(user, '/');
    cy.initUser();
  });
  it('should open and close suggestion modal form', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="icon-email"]').click();
    cy.get('[data-cy^="modal"] > [data-cy^="suggestion-form"]').should('be.visible');
    cy.contains('Cancel').click();
    cy.get('[data-cy^="modal"]').should('be.not.visible');
  });

  it('should be able to select type and type siggestion', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="icon-email"]').click();
    cy.get('#type').click();
    cy.contains('Other').click();
    cy.get('#content').type('We can add some communications skills');
    cy.contains('Cancel').click();
  });

  it('should be able to send a siggestion', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="icon-email"]').click();
    cy.get('#type').click();
    cy.contains('Other').click();
    cy.get('#content').type('We can add some communications skills');
    cy.contains('Send').click();
  });
});
