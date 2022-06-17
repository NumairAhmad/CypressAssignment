import {Locators} from './locators';

describe('Login Functionality', () => {

  var userdata
  before(function () {
    cy.fixture('userinfo').then(function (puserdata) {
      userdata = puserdata  
    })
  })

  it('Register With Google', () => {
    cy.visit('https://www.etsy.com')
       
    cy.contains(Locators.signInButtonText).click()
    cy.focused()

    cy.get(Locators.popUpTitle).should('contain.text', 'Sign in')
    cy.wait(1000).get('button:contains("'+ Locators.googleButtonText +'")').click()

    cy.window().its('open').should('be.called')
    cy.window().should('have.text', 'Sign in with Google')
    cy.get(Locators.firstNameField).type(userdata.gmailId)
      .should('have.value', userdata.gmailId)
    
  })
})