import answers from '../fixtures/answers.json';

/* eslint-disable no-undef */
describe('Home page', () => {
  beforeEach(() => {
    cy.initHome();
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
      cy.get('[data-cy^="answer-list-element-"]').should('have.length', answers.length);
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

  describe('For the user input filter on the search bar', () => {
    it('should update the input with every keystroke', () => {
      const userFilter = 'John';
      cy.get('[data-cy="user-input"]').type(userFilter);
      cy.get('[data-cy="user-input"]').should('have.value', userFilter);
    });
  });

  describe('For the skill filters on the search bar', () => {
    it('should show only one skill filter with the default values when visiting the page', () => {
      cy.get('[data-cy^="search-bar-skill"]').should('have.length', 1);
      cy.get('[data-cy="search-bar-skill-0"]').within(() => {
        cy.get('input').should('have.value', '');
        cy.get('select').should('have.value', 1);
      });
    });

    it('should reset the content of the skill filter when click in the delete icon if there is only one filter', () => {
      cy.get('[data-cy="search-bar-skill-0"]').within(() => {
        cy.get('input').type('React');
        cy.get('select').select('3');
        cy.get('div:first').click();
        cy.get('input').should('have.value', '');
        cy.get('select').should('have.value', 1);
      });
    });

    it('should add a second skill filter when clicking on the add icon', () => {
      cy.get('[data-cy="search-bar-skill-0"] > div:last').click();
      cy.get('[data-cy^="search-bar-skill"]').should('have.length', 2);
    });

    it('should hide the add icon on the previous skill filter after adding a new one', () => {
      cy.get('[data-cy="search-bar-skill-0"]').within(() => {
        cy.get('div:last').click().should('have.css', 'display', 'none');
      });
    });

    it('should delete a skill filter keeping the content of the other 2 unchanged', () => {
      cy.get('[data-cy="search-bar-skill-0"]').within(() => {
        cy.get('input').type('React');
        cy.get('select').select('3');
        cy.get('div:last').click();
      });
      cy.get('[data-cy="search-bar-skill-1"]').within(() => {
        cy.get('input').type('Next.js');
        cy.get('select').select('2');
        cy.get('div:last').click();
      });
      cy.get('[data-cy="search-bar-skill-2"]').within(() => {
        cy.get('input').type('Redux');
        cy.get('select').select('4');
      });
      cy.get('[data-cy="search-bar-skill-1"] > div:first').click();

      cy.get('[data-cy^="search-bar-skill"]').should('have.length', 2);
      cy.get('[data-cy="search-bar-skill-0"]').within(() => {
        cy.get('input').should('have.value', 'React');
        cy.get('select').should('have.value', '3');
      });
      cy.get('[data-cy="search-bar-skill-1"]').within(() => {
        cy.get('input').should('have.value', 'Redux');
        cy.get('select').should('have.value', '4');
      });
    });
  });

  describe('For the pagination', () => {
    const pageSize = 10;
    it('should render the correct number of pages according to the size of the payload and the page size', () => {
      cy.get('[data-cy="pagination"]').within(() => {
        const expectedElements = Math.ceil(answers.length / pageSize);
        cy.get('[aria-label^="page"]').should('have.length', expectedElements);
      });
    });
  });

  describe('For the filter request', () => {
    it('should send the request to get the answers with the correct filters', () => {
      cy.intercept('/ui/answers', []).as('getFilteredAnswers');
      const userFilter = 'John';
      const skillFilter = { skill: 'React', level: 3 };
      cy.get('[data-cy="search-bar-skill-0"]').within(() => {
        cy.get('input').type(skillFilter.skill);
        cy.get('select').select(`${skillFilter.level}`);
      });
      cy.get('[data-cy="user-input"]').type(userFilter);
      cy.wait('@getFilteredAnswers');
      cy.get('@getFilteredAnswers').should(({ request, response }) => {
        expect(request.method).to.equal('POST');
        expect(request.url).to.match(/\/ui\/answers/g);
        expect(request.body).to.eql({ name: userFilter, skills: [{ skill: 'React', level: 3 }] });
        expect(response.statusCode).to.equal(200);
      });
    });
  });
});
