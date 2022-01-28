/* eslint-disable no-undef */
import { user } from '../users';

describe('User page', () => {
  beforeEach(() => {
    cy.login(user, '/');
    cy.initUser();
  });

  it('should redirect to home page if profile route is wrong', () => {
    cy.url().should('match', new RegExp('/'));
  });

  it('should find Express skill when selecting NodeJs Ecosystem', () => {
    cy.get('[data-cy^="ecosystems"] > div > a').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userRow"]').contains('React').should('not.exist');
  });

  it('should find React skill when selecting React Ecosystem', () => {
    cy.get('[data-cy^="ecosystems"] > div > a').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userRow"]').contains('Express').should('not.exist');
  });

  it('should find user level corresponding to React', () => {
    cy.get('[data-cy^="ecosystems"] > div > a').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userSkill-React"]').first().should('exist');
    cy.get('[data-cy^="userSkillButton-React"]').first().click();
    cy.contains('I can define complex architectures and I can provide optimised solutions').should('exist');
  });

  it('should update level property when selected', () => {
    cy.get('[data-cy^="ecosystems"] > div > a').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkillButton-Express"]').click();
    cy.get('[data-cy^="editUser"]').click();
    cy.get('[data-cy^="select-level"]').eq(7).select('4');
    cy.get('[data-cy="saveUser"]').click();
    cy.get('[data-cy^="ecosystems"] > div > a').first().click();
    cy.get('[data-cy^="ecosystems"] > div > a').last().click();
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkillButton-Express"]').click({ force: true });
    cy.contains('I can write generic middleware and integrate Express with another frameworks/libraries').should('exist');
  });
});
