export class LoginPage {
    navigate() {
        cy.visit('http://the-internet.herokuapp.com/login')
    }
    
    //input username
    addUsername(userNameText) {
        cy.get('#username').type(userNameText)
    }
    //input password
    addPassword(passwordText) {
        cy.get('#password').type(passwordText)
    }

    //click login button
    loginButton() {
        cy.get('.radius').click()
    }
    
    //Log out of the application
    logOutButton() {
        cy.get('.button').click()
    }
    

}