class MenuListing {
  constructor(pizza) {
    this.pizza = pizza;
}

printListing() {
  return `${this.pizza.name} ... £${this.pizza.price}` 
}
}

module.exports = MenuListing