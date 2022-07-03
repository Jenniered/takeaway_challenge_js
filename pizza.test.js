const Pizza = require('./pizza.js')

describe('Pizza', () => {
  it ('returns the name of the pizza', () => {
    const pizza = new Pizza('Margarita', '£7')
    expect(pizza.getName()).toEqual('Margarita')
  })

  it ('returns the price of the pizza', () => {
    const pizza = new Pizza('Margarita', '£7')
    expect(pizza.getPrice()).toEqual('£7')
  })
})