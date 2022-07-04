const Pizza = require('./pizza')
const PizzaMenu = require('./pizza_menu')
const MenuListing = require('./menu_listing')

describe ('pizza menu integration', () => {
  it ('shows a list of one pizza and its price', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", "£7");
    menu.addItem(pizza_1)
    expect(menu.getMenu()).toEqual[pizza_1]
  })

  it ('shows a list of pizzas and their prices', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", "£7");
    const pizza_2 = new Pizza("Four cheese", "£8");
    const pizza_3 = new Pizza("Vesuvius", "£9");
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    expect(menu.getMenu()).toEqual[pizza_1, pizza_2, pizza_3]
  })

  it ('selects a pizza from the menu when a user makes an order', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", 7);
    const pizza_2 = new Pizza("Four cheese", 8);
    const pizza_3 = new Pizza("Vesuvius", 9);
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    expect(menu.selectPizza("Margarita")).toEqual[pizza_1]
  })

  it ('returns an error message if no pizza selected', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", 7);
    const pizza_2 = new Pizza("Four cheese", 8);
    const pizza_3 = new Pizza("Vesuvius", 9);
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    expect(menu.selectPizza("")).toEqual('No pizza selected')
  })

  it ('selects multiple items from the menu when a user makes an order', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", 7);
    const pizza_2 = new Pizza("Four cheese", 8);
    const pizza_3 = new Pizza("Vesuvius", 9);
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    menu.selectPizza("Margarita")
    menu.selectPizza("Four cheese")
    expect(menu.chosenPizzas()).toEqual[pizza_1, pizza_2]
  })

  it ('selects multiple items from the menu when a user makes an order', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", 7);
    const pizza_2 = new Pizza("Four cheese", 8);
    const pizza_3 = new Pizza("Vesuvius", 9);
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    menu.selectPizza("Margarita")
    const listing = new MenuListing()
    expect(listing.printListing(pizza_1)).toEqual('Margarita ... £7');
    // menu.selectPizza("Four cheese")
    //expect(menu.printReceipt()).toEqual('Margarita ... £7');
  })

  it ('returns sum total of pizzas chosen', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", 7);
    const pizza_2 = new Pizza("Four cheese", 8);
    const pizza_3 = new Pizza("Vesuvius", 9);
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    menu.selectPizza("Margarita")
    menu.selectPizza("Four cheese")
    expect(menu.getTotalPrice()).toEqual(15)
  })

  it ('returns sum total of pizzas chosen', () => {
    const menu = new PizzaMenu();
    const pizza_1 = new Pizza("Margarita", 7);
    const pizza_2 = new Pizza("Four cheese", 8);
    const pizza_3 = new Pizza("Vesuvius", 9);
    menu.addItem(pizza_1)
    menu.addItem(pizza_2)
    menu.addItem(pizza_3)
    menu.selectPizza("Margarita")
    menu.selectPizza("Margarita")
    menu.selectPizza("Four cheese")
    expect(menu.getTotalPrice()).toEqual(22)
  })
})