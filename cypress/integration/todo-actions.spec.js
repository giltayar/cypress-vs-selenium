/// <reference types="cypress" />

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').type('Clean room{enter}')

    // cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=2000')
    // cy.get('.new-todo').type('Clean room{enter}')
  })

  it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', 'Clean room')
    cy.get('.toggle').should('not.be.checked')
  })

  it('should toggle test correctly', () => {
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
  })

  it('should clear completed', () => {
    cy.get('.toggle').click()

    cy.contains('Clear completed').click()

    cy.get('.todo-list').should('not.have.descendants', 'li')
  })
})
