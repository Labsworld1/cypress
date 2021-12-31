/// <reference types="cypress" />

it ('should be able to login', function () {
    cy.visit('http://automationpractice.com/index.php')

    cy.get('.login').should('contain.text', 'Sign in')

    cy.get('.login').click()

    cy.get('.page-heading').should('contain.text', 'Authentication')
})

