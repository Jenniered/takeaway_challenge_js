class PizzaMenu {
  constructor() {
    this.pizzaList = []
    this.receipt = []
  }
  addItem(pizza) {
    this.pizzaList.push(pizza);
  }
  getMenu() {
    return this.pizzaList;
  }

  selectPizza(name) {
    let filtered = this.pizzaList.filter((pizza) => pizza.name === name);
      if (name === "") {
        return "No pizza selected"
      }
      else {
        this.receipt.push(filtered);
      }
  }

  chosenPizzas () { 
    return this.receipt.flat();
  }
  }
module.exports = PizzaMenu