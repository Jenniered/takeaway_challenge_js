class PizzaMenu {
  constructor() {
    this.pizzaList = []
  }
  addItem(pizza) {
    this.pizzaList.push(pizza);
  }
  getMenu() {
    return this.pizzaList;
  }
  
  selectPizza(name) {
    return this.pizzaList.filter(pizza => pizza.getName == this.name);

  }

  }
module.exports = PizzaMenu