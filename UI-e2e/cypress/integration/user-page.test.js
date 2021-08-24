/* eslint-disable no-undef */
describe('User page', () => {
  beforeEach(() => {
    cy.initUser();
  });

  it('should redirect to home page if profile route is wrong', () => {
    cy.url().should('match', new RegExp('/'));
  });

  it('should find Express skill when selecting NodeJs Ecosystem', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userRow"]').contains('React').should('not.exist');
  });

  it('should find React skill when selecting React Ecosystem', () => {
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userRow"]').contains('Express').should('not.exist');
  });

  it('should find user level corresponding to React', () => {
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userSkill-React"]').should('exist');
    cy.get('[data-cy^="userSkill-React"] > button').last().click();
    cy.contains('I can define complex architectures and I can provide optimised solutions').should('exist');
  });

  it('should update level property when selected', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.get('[data-cy^="select-level"]').select('4');
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.contains('I\'m a level 4').should('exist');
  });
});

describe('Suggestion form', () => {
  it('should open and close suggestion modal form', () => {
    cy.get('[data-cy^="icon-add"]').click();
    cy.get('[data-cy^="modal"] > [data-cy^="suggestion-form"]').should('be.visible');
    cy.contains('Cancel').click();
    cy.get('[data-cy^="modal"]').should('be.not.visible');
  });

  it('should be able to select type and type siggestion', () => {
    cy.get('[data-cy^="icon-add"]').click();
    cy.get('#type').select('Skill');
    cy.get('textarea').type('We can add some communications skills');
    cy.contains('Cancel').click();
  });

  it('should be able to send a siggestion', () => {
    cy.get('[data-cy^="icon-add"]').click();
    cy.get('#type').select('Skill');
    cy.get('textarea').type('We can add some communications skills');
    cy.contains('Send').click();
  });
});
