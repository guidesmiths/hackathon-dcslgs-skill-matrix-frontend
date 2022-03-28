/* eslint-disable no-undef */
import suggestions from '../fixtures/suggestions.json';
import ecosystems from '../fixtures/ecosystems.json';
import { user } from '../users';

describe('Admin page', () => {
  beforeEach(() => {
    cy.login(user, '/');
    cy.initAdmin();
  });

  describe('For the suggestions inbox', () => {
    it('should render the correct number of elements when entering the page', () => {
      cy.get('[data-cy^="suggestion-card-"]').should('have.length', 6);
    });

    it('should display the same elements when clicking on the back button if the displayed elements are the first in the suggestions list', () => {
      cy.get('[data-cy="suggestions-inbox"] > div:first').click();
      cy.get('[data-cy^="suggestion-card-0"] > p:first').contains(suggestions[0].userName);
      cy.get('[data-cy^="suggestion-card-1"] > p:first').contains(suggestions[1].userName);
      cy.get('[data-cy^="suggestion-card-2"] > p:first').contains(suggestions[2].userName);
    });

    it('should delete the suggestion card when clicking on the delete icon', () => {
      cy.get('[data-cy="suggestion-card-0"]').within(() => {
        cy.get('[data-cy="icon-delete"]').click();
        cy.get('[data-cy="suggestion-card-0"]').should('not.exist');
      });
    });

    describe('For the suggestion modal', () => {
      it('should not display the modal by default', () => {
        cy.get('[data-cy="modal"]').should('not.exist');
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
          cy.get('[data-cy="modal"]').should('not.exist');
        });
      });

      it('should close the modal when clicking on the overlay', () => {
        cy.get('[data-cy="suggestion-card-0"]').within(() => {
          cy.get('[data-cy="icon-visibility"]').click();
          cy.get('[data-cy="modal"]').should('be.visible');
          cy.get('[data-cy="modal-overlay"]').click({ force: true });
          cy.get('[data-cy="modal"]').should('not.exist');
        });
      });

      it('should delete the suggestion card and close the modal when clicking on the modal\'s delete button', () => {
        cy.get('[data-cy="suggestion-card-0"]').within(() => {
          cy.get('[data-cy="icon-visibility"]').click();
          cy.get('[data-cy="modal-button-delete"]').click();
          cy.get('[data-cy="modal-button-close"]').click();
          cy.get('[data-cy="suggestion-card-0"]').should('not.exist');
        });
        cy.get('[data-cy="modal"]').should('not.exist');
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
      cy.get('[data-cy="fallback-text"]').contains('Add all the ecosystem needed and complete them with the skill that the employee can have in them');
    });

    describe('When clicking on add a new ecosystem', () => {
      beforeEach(() => {
        cy.get('[data-cy="ecosystems-element-0"]').click();
        cy.get('[data-cy="edit-skill-button"]').click();
        cy.get('[data-cy="icon-add"]').click();
      });

      it('should display the ecosystem form with only one skill by default', () => {
        cy.get('[data-cy^="skill-container-tour"]').should('have.length', 1);
      });

      it('should display the ecosystem form with the levels for the skill expanded by default', () => {
        cy.get('[data-cy^="skill-level-container-"]').should('have.length', 4);
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
        cy.get('[data-cy="ecosystems-element-0"]').click({ force: true });
        cy.getEcosystemSkills({ id: 1, url: '/ecosystem/1' });
      });

      it('should display the ecosystem form with all its skills pre-populated', () => {
        cy.get('[data-cy^="skills-container"] > div').should('have.length', 8);
        cy.get('[data-cy="skill-container-0"]').contains('Gatsby');
        cy.get('[data-cy="skill-container-1"]').contains('i18Next');
        cy.get('[data-cy="skill-container-2"]').contains('Next.js');
        cy.get('[data-cy="skill-container-3"]').contains('React');
        cy.get('[data-cy="skill-container-4"]').contains('React Native Web');
        cy.get('[data-cy="skill-container-5"]').contains('ReactCssTransition');
        cy.get('[data-cy="skill-container-6"]').contains('Redux');
        cy.get('[data-cy="skill-container-7"]').contains('Redux-Sagas');
      });

      it('should display the skill\'s levels not expanded by default', () => {
        cy.get('[data-cy^="skill-level-container-"]').should('not.be.visible');
      });

      it('should display the ecosystem form with all the levels for the skill pre-populated', () => {
        cy.get('[data-cy="skill-container-3"]').within(() => {
          cy.get('[data-cy^="skill-level-container-"]').should('have.length', 4);
          cy.get('[data-cy="skill-level-textarea-0"]').contains('I have a basic knowledge of the framework. Understand the framework principles and can implement solutions defined at the documentation or tutorials');
          cy.get('[data-cy="skill-level-textarea-1"]').contains('I can modify effectively already working solutions to include new features');
          cy.get('[data-cy="skill-level-textarea-2"]').contains('I can analyse working solutions and propose refactors and generalization');
          cy.get('[data-cy="skill-level-textarea-3"]').contains('I can define complex architectures and I can provide optimised solutions');
        });
      });
    });
  });
});
