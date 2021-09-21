/* eslint-disable no-undef */
describe('404 page', () => {
  beforeEach(() => {
    cy.init404();
  });
  it('Shoud have 404 title', () => {
    cy.get('[data-cy="title-404"]').should('be.visible');
  });
  it('Should have background image behind the title', () => {
    cy.get('[data-cy="title-wrapper"]').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/wavesGroup.50a13ab5.png")');
  });
  it('Shoud have heading with text', () => {
    cy.get('h3').should('have.text', 'Page does not exist');
  });

  it('Shoud have a redirect button', () => {
    cy.get('[data-cy="redirect-home"]').should('be.visible');
  });
  it('should go to the Home page when the button is clicked', () => {
    cy.get('[data-cy="redirect-home"]').click();
    cy.url().should('match', /\//);
    cy.init404();
  });
});
