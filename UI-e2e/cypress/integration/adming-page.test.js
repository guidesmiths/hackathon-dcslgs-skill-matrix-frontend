/* eslint-disable no-undef */
import suggestions from '../fixtures/suggestions.json';

describe('Admin page', () => {
  beforeEach(() => {
    cy.initAdmin();
  });

  describe('For the suggestions inbox', () => {
    it('should render the correct number of elements when entering the page', () => {
      cy.get('[data-cy^="suggestion-card-"]').should('have.length', 3);
    });

    it('should display the same elements when clicking on the back button if the displayed elements are the first in the suggestions list', () => {
      cy.get('[data-cy="suggestions-inbox"] > div:first').click();
      cy.get('[data-cy^="suggestion-card-0"] > p:first').should('have.text', suggestions[0].userName);
      cy.get('[data-cy^="suggestion-card-1"] > p:first').should('have.text', suggestions[1].userName);
      cy.get('[data-cy^="suggestion-card-2"] > p:first').should('have.text', suggestions[2].userName);
    });

    it('should display the next element is the suggestions list when clicking on the next button', () => {
      cy.get('[data-cy="suggestions-inbox"] > div:last').click();
      cy.get('[data-cy^="suggestion-card-0"] > p:first').should('have.text', suggestions[3].userName);
      cy.get('[data-cy^="suggestion-card-1"] > p:first').should('have.text', suggestions[4].userName);
      cy.get('[data-cy^="suggestion-card-2"] > p:first').should('have.text', suggestions[5].userName);
    });

    it('should display the same elements when clicking on the next button if the displayed elements are the last in the suggestions list', () => {
      cy.get('[data-cy="suggestions-inbox"] > div:last').click();
      cy.get('[data-cy="suggestions-inbox"] > div:last').click();
      cy.get('[data-cy^="suggestion-card-0"] > p:first').should('have.text', suggestions[3].userName);
      cy.get('[data-cy^="suggestion-card-1"] > p:first').should('have.text', suggestions[4].userName);
      cy.get('[data-cy^="suggestion-card-2"] > p:first').should('have.text', suggestions[5].userName);
    });
  });
});
