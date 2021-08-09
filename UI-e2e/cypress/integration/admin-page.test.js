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

  describe('For the main content', () => {
    it('should display a fallback value when entering the page before selecting anything', () => {
      cy.get('[data-cy="fallback-text"]').contains('Select one Ecosystem or add a new one');
    });

    describe('When clicking on add a new ecosystem', () => {
      beforeEach(() => {
        cy.get('[data-cy="icon-add"]').click();
      });

      it('should display the ecosystem form with only one skill by default', () => {
        cy.get('[data-cy^="skill-container-"]').should('have.length', 1);
      });

      it('should display the ecosystem form with the levels for the skill expanded by default', () => {
        cy.get('[data-cy^="skill-level-container-"]').should('have.length', 4);
      });

      it('should display the cancel and accept icons by default and not the edit one (in editable mode)', () => {
        cy.get('[data-cy="icon-create"]').should('not.be.visible');
        cy.get('[data-cy="icon-cancel"]').should('be.visible');
        cy.get('[data-cy="icon-check_circle"]').should('be.visible');
      });

      it('should display all the input fields with no value by default', () => {
        cy.get('[data-cy="ecosystem-name-input"]').should('have.attr', 'value', '');
        cy.get('[data-cy="ecosystem-name-input"]').should('have.attr', 'placeholder', 'Ecosystem name');
        cy.get('[data-cy="skill-name-input-0"]').should('have.attr', 'value', '');
        cy.get('[data-cy="skill-name-input-0"]').should('have.attr', 'placeholder', 'Skill name');
        cy.get('[data-cy="skill-level-textarea-0"]').should('have.text', '');
        cy.get('[data-cy="skill-level-textarea-0"]').should('have.attr', 'placeholder', 'Level 1 description');
        cy.get('[data-cy="skill-level-textarea-1"]').should('have.text', '');
        cy.get('[data-cy="skill-level-textarea-1"]').should('have.attr', 'placeholder', 'Level 2 description');
        cy.get('[data-cy="skill-level-textarea-2"]').should('have.text', '');
        cy.get('[data-cy="skill-level-textarea-2"]').should('have.attr', 'placeholder', 'Level 3 description');
        cy.get('[data-cy="skill-level-textarea-3"]').should('have.text', '');
        cy.get('[data-cy="skill-level-textarea-3"]').should('have.attr', 'placeholder', 'Level 4 description');
      });

      it('should hide the skill levels when clicking on the expand button when the levels are displayed', () => {
        cy.get('[data-cy="icon-expand_less"]').click();
        cy.get('[data-cy^="skill-level-container-"]').should('not.be.visible');
      });

      it('should show back the skill levels when clicking on the expand button when the levels are hidden', () => {
        cy.get('[data-cy="icon-expand_less"]').click();
        cy.get('[data-cy="icon-expand_more"]').click();
        cy.get('[data-cy^="skill-level-container-"]').should('be.visible');
      });
    });

    describe('When clicking on an existent ecosystem', () => {
      beforeEach(() => {
        cy.get('[data-cy="ecosystems-element-0"]').click();
      });

      it('should display the ecosystem form with all its skills pre-populated', () => {
        cy.get('[data-cy^="skill-container-"]').should('have.length', 4);
        cy.get('[data-cy="skill-name-input-0"]').should('have.attr', 'value', 'React');
        cy.get('[data-cy="skill-name-input-1"]').should('have.attr', 'value', 'Next.js');
        cy.get('[data-cy="skill-name-input-2"]').should('have.attr', 'value', 'Redux');
        cy.get('[data-cy="skill-name-input-3"]').should('have.attr', 'value', 'Redux-Sagas');
      });

      it('should display the skill\'s levels not expanded by defaul', () => {
        cy.get('[data-cy^="skill-level-container-"]').should('not.be.visible');
      });

      it('should display the edit icon by default and not the cancel and accept ones (not in editable mode)', () => {
        cy.get('[data-cy="icon-create"]').should('be.visible');
        cy.get('[data-cy="icon-cancel"]').should('not.be.visible');
        cy.get('[data-cy="icon-check_circle"]').should('not.be.visible');
      });

      it('should display the ecosystem form with all the levels for the skill pre-populated', () => {
        cy.get('[data-cy="skill-container-0"]').within(() => {
          cy.get('[data-cy^="skill-level-container-"]').should('have.length', 4);
          cy.get('[data-cy="skill-level-textarea-0"]').contains('I have a basic knowledge');
          cy.get('[data-cy="skill-level-textarea-1"]').contains('I can modify');
          cy.get('[data-cy="skill-level-textarea-2"]').contains('I can analyse');
          cy.get('[data-cy="skill-level-textarea-3"]').contains('I can define');
        });
      });
    });
  });
});
