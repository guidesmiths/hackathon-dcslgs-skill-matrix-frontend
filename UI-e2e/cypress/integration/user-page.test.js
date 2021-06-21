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

  it('should find user level corresponding to React', () => {
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userSkill-React"]').should('exist');
    cy.get('[data-cy^="userSkill-React"] > button').last().click();
    cy.contains('level 4').should('exist');
  });

  it('should update toLearn property when checked', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.get('select').select('4');
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.contains('level 4').should('exist');
  });
});
