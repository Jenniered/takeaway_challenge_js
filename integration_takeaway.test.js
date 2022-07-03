const Pizza = require('./pizza')
const PizzaMenu = require('./pizza_menu')

describe ('pizza menu integration', () => {
  it ('shows a list of one pizza and its price', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", "£7.50");
    menu.addItem(pizza_1)
    expect(menu.getMenu()).toEqual[pizza_1]
  })

  it ('shows a list of pizzas and their prices', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", "£7.50");
    const pizza_2 = new Pizza("Four cheese", "£8.00");
    const pizza_3 = new Pizza("Vesuvius", "£9.00");
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    expect(menu.getMenu()).toEqual[pizza_1, pizza_2, pizza_3]
  })

  xit ('selects a pizza from the menu when a user makes an order', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", "£7.50");
    const pizza_2 = new Pizza("Four cheese", "£8.00");
    const pizza_3 = new Pizza("Vesuvius", "£9.00");
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    menu.selectPizza("Margarita")
    expect(menu.selected).toEqual[pizza_1]
  })

})