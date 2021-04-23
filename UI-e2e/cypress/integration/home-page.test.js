/* eslint-disable no-undef */
describe('Home page', () => {
  beforeEach(() => {
    cy.fetchSkills();
  });

  it('should render home page"', () => {
    cy.visit('/');
  });

  it('should redirect to home page if route doesn\'t exist', () => {
    cy.visit('/no-exist');
    cy.url().should('match', new RegExp('/'));
  });

  it('should find React option when filling in skill input', () => {
    cy.get('input').last().type('re');
    cy.get('option').contains('React');
    cy.get('select').select('3');
  });
});
