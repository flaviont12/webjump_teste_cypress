// Importação dos elementos/seletores salvos como variáveis.

const {
  SIGN_UP,
  BTN_CREATE_ACCOUNT,
  MESSAGE_SUCCESS
} = require('../e2e/cadastro/cadastro-seletores')
const {
  SHIPPING_ADRESS,
  CUSTOMER,
  CART,
  BTN_CHECKOUT,
  BTN_NEXT,
  BTN_PLACE_ORDER
} = require('../e2e/finalizar-compra/checkout-seletores')

Cypress.Commands.add('realizarCadastro', () => {
  cy.contains('a', 'Create an Account').click()

  cy.get(SIGN_UP.firstname).type('Flávio')
  cy.get(SIGN_UP.lastname).type('Neto')

  cy.get(SIGN_UP.email).type('flavio@test12.com')
  cy.get(SIGN_UP.password).type('@Teste123')
  cy.get(SIGN_UP.confirmPassword).type('@Teste123')

  cy.get(BTN_CREATE_ACCOUNT).click()

  // Verifica se a url atual é 'customer/account'
  cy.url().should('be.equal', `${Cypress.config('baseUrl')}customer/account/`)

  // Verifica mensagem de cadastro realizado com sucesso.
  cy.get(MESSAGE_SUCCESS).should(
    'contain.text',
    'Thank you for registering with Main Website Store.'
  )
})

Cypress.Commands.add('login', () => {
  cy.get('a').contains('Sign In').click()

  cy.get('#email').type('roni_cost@example.com')
  cy.get('#pass').type('roni_cost3@example.com')

  cy.get('button > span').contains('Sign In').click()
})

Cypress.Commands.add('adicionarAoCarrinho', () => {
  cy.get('.product-item-details').contains(' Argus All-Weather Tank ').click()

  cy.get('div[data-option-label="M"]').click()
  cy.get('div[data-option-label="Gray"]').click()
  cy.get('#product-addtocart-button').click()

  cy.get('.message-success').should(
    'contain.text',
    'You added Argus All-Weather Tank to your shopping cart.'
  )
})

Cypress.Commands.add('preencherDadosComprador', () => {
  cy.get(CUSTOMER.email).type('customer@email.com', { timeout: 3000 })
  cy.get(CUSTOMER.firstname).type('Comprador')
  cy.get(CUSTOMER.lastname).type('Teste')
})

Cypress.Commands.add('preencherEndereco', () => {
  cy.get(SHIPPING_ADRESS.street).type('Rua Alexandre Dumas, 1711')
  cy.get(SHIPPING_ADRESS.country).select('Brazil')
  cy.get(SHIPPING_ADRESS.state).select('São Paulo')

  cy.get(SHIPPING_ADRESS.city).type('São Paulo')
  cy.get(SHIPPING_ADRESS.postalCode).type('04717-004')
  cy.get(SHIPPING_ADRESS.phoneNumber).type('1198783186')
})

Cypress.Commands.add('iniciarCheckout', () => {
  cy.get(CART).click()
  cy.wait(3000)
  cy.get(BTN_CHECKOUT).click()
})

Cypress.Commands.add('finalizarCompra', () => {
  cy.wait(2000)

  cy.get(BTN_NEXT).click()

  cy.get(BTN_PLACE_ORDER).click()
})
