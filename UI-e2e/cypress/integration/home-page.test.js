/* eslint-disable no-undef */
describe('Home page', () => {
  it('should render home page with "hola mundo"', () => {
    cy.visit('/');
  });

  it('should redirect to home page if route doesn\'t exist', () => {
    cy.visit('/no-exist');
    cy.url().should('match', new RegExp('/'));
  });
});
