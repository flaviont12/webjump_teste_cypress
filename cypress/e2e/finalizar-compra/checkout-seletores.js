const CART = '.minicart-wrapper'

const BTN_CHECKOUT = '#top-cart-btn-checkout'

const CUSTOMER = {
  email: '#customer-email',
  firstname: 'input[name="firstname"]',
  lastname: 'input[name="lastname"]'
}

const SHIPPING_ADRESS = {
  street: 'input[name="street[0]"]',
  country: 'select[name="country_id"]',
  state: 'select[name="region_id"]',
  city: 'input[name="city"]',
  postalCode: 'input[name="postcode"]',
  phoneNumber: 'input[name="telephone"]'
}

const BTN_NEXT = 'button[data-role="opc-continue"] > span'

const BTN_PLACE_ORDER = 'button.checkout'

module.exports = {
  CART,
  BTN_CHECKOUT,
  CUSTOMER,
  SHIPPING_ADRESS,
  BTN_NEXT,
  BTN_PLACE_ORDER,
}
