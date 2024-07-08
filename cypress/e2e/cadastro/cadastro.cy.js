/// <reference types="cypress" />

const { BTN_CREATE_ACCOUNT, SIGN_UP } = require("./cadastro-seletores")

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    // Método que realiza a entrada no endereço web. (Utilizando baseUrl, definida no "cypress.config.js")
    cy.visit('')
  })
  it('Deve realizar cadastro de usuário com sucesso', () => {
    // Command para realizar o cadastro de usuário
    cy.realizarCadastro()
  })
})
