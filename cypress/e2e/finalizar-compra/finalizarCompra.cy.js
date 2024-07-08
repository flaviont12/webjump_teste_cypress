/// <reference types="cypress"/>

describe('Cenário de finalização de compra', () => {
  beforeEach(() => {
    // Método que realiza a entrada no endereço web. (Utilizando baseUrl, definida no "cypress.config.js")
    cy.visit('')
  })
  it('Deve finalizar compra com sucesso', () => {
    // Command para adicionar item ao carrinho
    cy.adicionarAoCarrinho()

    // Command para iniciar o processo de checkout
    cy.iniciarCheckout()

    // Commands para preencher os dados
    cy.preencherDadosComprador()
    cy.preencherEndereco()

    // Command para finalizar a compra.
    cy.finalizarCompra()

    // Validação de sucesso da compra.
    cy.contains('span', 'Thank you for your purchase!')
  })
})
