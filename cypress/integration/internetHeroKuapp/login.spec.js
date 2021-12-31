/// <reference types='cypress' />

it('should be able to login', function () {
    cy.visit('http://the-internet.herokuapp.com/login')

    // assert login page
    cy.get('h2').should('contain.text', 'Login Page')
    
    //input username
    cy.get('#username').type('tomsmith')
    //input password
    cy.get('#password').type('SuperSecretPassword!')

    //click login button
    cy.get('.radius').click()

    //assert login was successful
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')

    //Log out of the application
    cy.get('.button').click()

    //assert user logged out successfully
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!')

} )