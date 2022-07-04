const { checkServerIdentity } = require('tls')
const MenuListing = require('./menu_listing')
const Pizza = require('./pizza')

describe('MenuListing', () => {
 it ('returns the name and price of the pizza in print format', () => {
  const pizza = new Pizza('Margarita', 7)
  const listing = new MenuListing()
  expect(listing.printListing(pizza)).toEqual('Margarita ... £7')
 })

 //doubles test
})