/// <reference types="cypress" />

describe('todo actions', () => {
  before(() =>
    cy.eyesOpen({
      batchName: 'cypress vs selenium',
      appName: 'cypress vs selenium',
      testName: 'cypress vs selenium',
      browser: [
        {width: 1200, height: 1000},
        {width: 320, height: 1000},
        {width: 480, height: 1000},
        {width: 768, height: 1000},
        {width: 992, height: 1000},
        {width: 1200, height: 1000, name: 'firefox'},
        {width: 320, height: 1000, name: 'firefox'},
        {width: 480, height: 1000, name: 'firefox'},
        {width: 768, height: 1000, name: 'firefox'},
        {width: 992, height: 1000, name: 'firefox'},
      ],
    }),
  )

  after(() => cy.eyesClose())

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
    // cy.visit('http://todomvc-app-for-testing.surge.sh/?different-title-color')

    cy.get('.new-todo').type('Clean room{enter}')
  })

  it('should add a new todo to the list', () => {
    // cy.get('label').should('have.text', 'Clean room')
    // cy.get('.toggle').should('not.be.checked')
    cy.eyesCheckWindow('new todo')
  })

  describe('toggling todos', () => {
    it('should toggle test correctly', () => {
      cy.get('.toggle').click()
      // cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
      cy.eyesCheckWindow('toggle todo')
    })

    it('should clear completed', () => {
      cy.get('.toggle').click()
      cy.contains('Clear completed').click()

      // cy.get('.todo-list').should('not.have.descendants', 'li')
      cy.eyesCheckWindow('clear completed')
    })
  })
})
