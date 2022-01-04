/// <reference types='cypress' />

import { LoginPage } from "../../page-objects/internetHeroKaup/login-page"

describe('Authentication', function() {
    const loginPage = new LoginPage ()

    beforeEach( function() {
        loginPage.navigate()

        // assert login page
        cy.get('h2').should('contain.text', 'Login Page')
        })
    it('should be able to login', function () {
        loginPage.addUsername('tomsmith')
        loginPage.addPassword('SuperSecretPassword!')
        loginPage.loginButton()
        //assert login was successful
        cy.get('#flash').should('contain.text', 'You logged into a secure area!')
        loginPage.logOutButton()
        //assert user logged out successfully
        cy.get('#flash').should('contain.text', 'You logged out of the secure area!')
    })
        
    // unsuccessful login
    it('should not be able to login', function () {
        loginPage.addUsername('tome')
        loginPage.addPassword('SuperSecretPassword!')
        loginPage.loginButton()
        //assert login error message
        cy.get('#flash').should('contain.text', 'Your username is invalid!')
    })
})