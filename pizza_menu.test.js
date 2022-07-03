const PizzaMenu = require('./pizza_menu')

describe ('PizzaMenu', () => {
  it ('creates an empty pizza menu', () => {
    const menu = new PizzaMenu();
    expect(menu.getMenu()).toEqual([]);
  })
})