/* eslint-disable no-undef */
describe('Suggestion form', () => {
  beforeEach(() => {
    cy.initUser();
  });
  it('should open and close suggestion modal form', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="icon-add"]').click();
    cy.get('[data-cy^="modal"] > [data-cy^="suggestion-form"]').should('be.visible');
    cy.contains('Cancel').click();
    cy.get('[data-cy^="modal"]').should('be.not.visible');
  });

  it('should be able to select type and type siggestion', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="icon-add"]').click();
    cy.get('#type').select('Skill');
    cy.get('textarea').type('We can add some communications skills');
    cy.contains('Cancel').click();
  });

  it('should be able to send a siggestion', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="icon-add"]').click();
    cy.get('#type').select('Skill');
    cy.get('textarea').type('We can add some communications skills');
    cy.contains('Send').click();
  });
});
