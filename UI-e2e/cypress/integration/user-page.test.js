/* eslint-disable no-undef */
describe('User page', () => {
  beforeEach(() => {
    cy.initUser();
  });

  it('should save all changes', () => {
    cy.intercept('/ui/users/:id/answers', {}).as('getUpdatedUser');
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.get('[data-cy^="userSkill-select"]').select('4');
    cy.contains('I\'m a level 4').should('exist');
    cy.get('[data-cy^="saveInfo"]').click();
    cy.wait('@getUpdatedUser');
    cy.get('@getUpdatedUser').should(({ request, response }) => {
      expect(request.method).to.equal('POST');
      expect(request.url).to.match(/\/ui\/users\/:id\/answers/g);
      expect(request.body).to.eql({
        id: 'asldkan21ansdkasnd',
        ecosystemID: 2,
        skills: [
          {
            id: 6,
            name: 'Express',
            level: 4,
            interested: true,
            comments: '',
          },
        ],
      });
      expect(response.statusCode).to.equal(200);
    });
  });

  it('should redirect to home page if profile route is wrong', () => {
    cy.url().should('match', new RegExp('/'));
  });

  it('should find Express skill when selecting NodeJs Ecosystem', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userRow"]').contains('React').should('not.exist');
  });

  it('should find React skill when selecting React Ecosystem', () => {
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userRow"]').contains('Express').should('not.exist');
  });

  it('should find user level corresponding to React', () => {
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="userRow"]').contains('React');
    cy.get('[data-cy^="userSkill-React"]').should('exist');
    cy.get('[data-cy^="userSkill-React"] > button').last().click();
    cy.contains(
      'I can define complex architectures and I can provide optimised solutions',
    ).should('exist');
  });

  it('should update level property when selected', () => {
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userRow"]').contains('Express');
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.get('[data-cy^="userSkill-select"]').select('4');
    cy.get('[data-cy^="ecosystems"] > button').first().click();
    cy.get('[data-cy^="ecosystems"] > button').last().click();
    cy.get('[data-cy^="userSkill-Express"]').should('exist');
    cy.get('[data-cy^="userSkill-Express"] > button').last().click();
    cy.contains('I\'m a level 4').should('exist');
  });
});
