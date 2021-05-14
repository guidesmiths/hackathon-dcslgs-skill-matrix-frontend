/* eslint-disable no-undef */
describe('Home page', () => {
  beforeEach(() => {
    cy.init();
  });

  it('should redirect to home page if route doesn\'t exist', () => {
    cy.visit('/no-exist');
    cy.url().should('match', new RegExp('/'));
  });

  it('should find React option when filling in skill input', () => {
    cy.visit('/');
    cy.get('input').last().type('re');
    cy.get('option').contains('React');
    cy.get('select').select('3');
  });

  describe('For the answer list', () => {
    it('should render the correct number of list element when visiting the page', () => {
      cy.visit('/');
      cy.get('[data-cy^="answer-list-element-"]').should('have.length', 2);
    });

    it('should render the correct number of skill for a given list element', () => {
      cy.visit('/');
      cy.get('[data-cy="answer-list-element-1"]').within(() => {
        cy.get('[data-cy="skill-list"] > div').should('have.length', 3);
      });
    });

    it('should not display the skill list of an element when first rendering the AnswerListElement\'s', () => {
      cy.visit('/');
      cy.get('[data-cy="answer-list-element-1"]').within(() => {
        cy.get('[data-cy="skill-list"]').should('have.css', 'display', 'none');
      });
    });

    it('should display the skill list of an element when clicking the button', () => {
      cy.visit('/');
      cy.get('[data-cy="answer-list-element-1"]').within(() => {
        cy.get('[data-cy="list-element-header"] > button').click();
        cy.get('[data-cy="skill-list"]').should('have.css', 'display', 'block');
      });
    });

    it('should hide the skill list of an element after clicking the button when it was displayed previously', () => {
      cy.visit('/');
      cy.get('[data-cy="answer-list-element-1"]').within(() => {
        cy.get('[data-cy="list-element-header"] > button').click().click();
        cy.get('[data-cy="skill-list"]').should('have.css', 'display', 'none');
      });
    });
  });
});
