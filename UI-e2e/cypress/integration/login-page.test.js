/* eslint-disable no-undef */
describe('Login page', () => {
  beforeEach(() => {
    cy.initLogin();
  });

  it('Should be visible', () => {
    cy.get('[data-cy="login-page"]').should('be.visible');
  });
  it('Should have title', () => {
    cy.get('[data-cy="login-page"]').within(() => {
      cy.get('h1').should('have.text', 'Skill Matrix');
    });
  });
  it('Should have logo', () => {
    cy.get('[data-cy="login-page"]').within(() => {
      cy.get('img').should('be.visible');
    });
  });
  it('Should have a sign in button', () => {
    cy.get('[data-cy="login-page"]').within(() => {
      cy.get('[data-cy="login-page-button"]').should('be.visible');
      cy.get('[data-cy="login-page-button"]').should('have.text', 'Sign In with Outlook');
    });
  });
});
