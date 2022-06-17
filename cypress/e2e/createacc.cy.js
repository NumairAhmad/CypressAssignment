import {Locators} from './locators';

describe('Login Functionality', () => {

  var userdata
  before(function () {
    cy.fixture('userinfo').then(function (puserdata) {
      userdata = puserdata  
    })
  })

  it('Register', () => {
    cy.visit('https://www.etsy.com')
       
    cy.contains(Locators.signInButtonText).click()
    cy.focused()

    cy.get(Locators.popUpTitle).should('contain.text', 'Sign in')
    cy.get('button:contains("'+ Locators.registerButtonText +'")').click()
 
    cy.wait(3000)
    cy.get(Locators.emailFielId).type(userdata.email)
      .should('have.value', userdata.email) 

    cy.get(Locators.firstNameField).type(userdata.firstName)
      .should('have.value', userdata.firstName)

    cy.get(Locators.passwordField).type(userdata.Password)
      .should('have.value', userdata.Password) 

    cy.get('button:contains("'+ Locators.registerButtonText+'")').click()
    
  })
})