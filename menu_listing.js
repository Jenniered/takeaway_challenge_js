class MenuListing {
  constructor() {
    //this.pizza = pizza;
    this.listing = ""
}

printListing(pizza) {
  this.listing = `${pizza.name} ... £${pizza.price}` 
  return this.listing
}
}

module.exports = MenuListing