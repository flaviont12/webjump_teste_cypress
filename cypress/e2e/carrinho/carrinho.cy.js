/// <reference types="cypress"/>

describe('Cenários de adição de produto no carrinho', () => {
  beforeEach(() => {
    // Método que realiza a entrada no endereço web. (Utilizando baseUrl, definida no "cypress.config.js")
    cy.visit('')
  })

  it('Deve adicionar produto ao carrinho pela página de Detalhe de Produto', () => {
    // Command para adicionar item ao carrinho
    cy.adicionarAoCarrinho()
  })
})
