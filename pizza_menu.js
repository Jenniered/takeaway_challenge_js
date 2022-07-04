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

  chosenPizzas() { 
    return this.receipt.flat();
  }

  getTotalPrice() {
    let sum = 0
    this.receipt.flat().forEach((pizza) => { 
      (sum += pizza.getPrice()); })
    return sum
  }

    printReceipt () {
      return this.receipt.flat().forEach((pizza) => {
      (pizza.printListing());
      })
    }
  }
module.exports = PizzaMenu