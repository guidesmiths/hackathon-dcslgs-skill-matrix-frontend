/* eslint-disable no-undef */
import suggestions from '../fixtures/suggestions.json';
import ecosystems from '../fixtures/ecosystems.json';

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
      cy.get('[data-cy^="suggestion-card-0"] > p:first').contains(suggestions[0].userName);
      cy.get('[data-cy^="suggestion-card-1"] > p:first').contains(suggestions[1].userName);
      cy.get('[data-cy^="suggestion-card-2"] > p:first').contains(suggestions[2].userName);
    });

    it('should display the next element is the suggestions list when clicking on the next button', () => {
      cy.get('[data-cy="icon-arrow_forward_ios"]').click();
      cy.get('[data-cy^="suggestion-card-0"] > p:first').contains(suggestions[3].userName);
      cy.get('[data-cy^="suggestion-card-1"] > p:first').contains(suggestions[4].userName);
      cy.get('[data-cy^="suggestion-card-2"] > p:first').contains(suggestions[5].userName);
    });

    it('should not display the back button when the elements belong to the first page', () => {
      cy.get('[data-cy="icon-arrow_back_ios"]').should('not.exist');
    });

    it('should display the back button when moving away from the first page', () => {
      cy.get('[data-cy="icon-arrow_forward_ios"]').click();
      cy.get('[data-cy="icon-arrow_back_ios"]').should('exist');
    });

    it('should not display the forward button when the elements belong to the last page', () => {
      cy.get('[data-cy="icon-arrow_forward_ios"]').click();
      cy.get('[data-cy="icon-arrow_forward_ios"]').should('not.exist');
    });

    it('should delete the suggestion card when clicking on the delete icon', () => {
      cy.get('[data-cy="suggestion-card-0"]').within(() => {
        cy.get('[data-cy="icon-delete_outline"]').click();
        cy.wait('@deleteSuggestion');
        cy.get('[data-cy="suggestion-card-0"]').should('not.exist');
      });
    });

    describe('For the suggestion modal', () => {
      it('should not display the modal by default', () => {
        cy.get('[data-cy="modal"]').should('not.be.visible');
      });

      it('should display the modal when clicking on the display button', () => {
        cy.get('[data-cy="suggestion-card-0"]').within(() => {
          cy.get('[data-cy="icon-visibility"]').click();
          cy.get('[data-cy="modal"]').should('be.visible');
        });
      });

      it('should close the modal when clicking on the close button', () => {
        cy.get('[data-cy="suggestion-card-0"]').within(() => {
          cy.get('[data-cy="icon-visibility"]').click();
          cy.get('[data-cy="modal"]').should('be.visible');
          cy.get('[data-cy="modal-button-close"]').click();
          cy.get('[data-cy="modal"]').should('not.be.visible');
        });
      });

      it('should close the modal when clicking on the overlay', () => {
        cy.get('[data-cy="suggestion-card-0"]').within(() => {
          cy.get('[data-cy="icon-visibility"]').click();
          cy.get('[data-cy="modal"]').should('be.visible');
          cy.get('[data-cy="modal-overlay"]').click({ force: true });
          cy.get('[data-cy="modal"]').should('not.be.visible');
        });
      });

      it('should delete the suggestion card and close the modal when clicking on the modal\'s delete button', () => {
        cy.get('[data-cy="suggestion-card-0"]').within(() => {
          cy.get('[data-cy="icon-visibility"]').click();
          cy.get('[data-cy="modal-button-delete"]').click();
          cy.wait('@deleteSuggestion');
          cy.get('[data-cy="suggestion-card-0"]').should('not.exist');
        });
        cy.get('[data-cy="modal"]').should('not.be.visible');
      });
    });
  });

  describe('For the ecosystems sidebar', () => {
    it('should display all the ecosystems when entering the page', () => {
      cy.get('[data-cy="ecosystems-sidebar"]').within(() => {
        cy.get('[data-cy^="ecosystems-element-"]').should('have.length', ecosystems.length);
      });
    });
  });
});
