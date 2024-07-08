/// <reference types="cypress" />

describe('Realizar login', () => {
  beforeEach(() => {
    // Método que realiza a entrada no endereço web. (Utilizando baseUrl, definida no "cypress.config.js")
    cy.visit('')
  })
  it('Dever realizar login do usuário com sucesso', () => {
    cy.get('a').contains('Sign In').click()

    cy.get('#email').type('roni_cost@example.com')
    cy.get('#pass').type('roni_cost3@example.com')

    cy.get('button > span').contains('Sign In').click()
  })
})
