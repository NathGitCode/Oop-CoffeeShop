let menu = {
  coffee: 2.5,
  tea: 2.2,
  latte: 2.8,
  water: 1.2,
};

let wallet = 8;

class coffeeShop {
  constructor(drinkOrdered) {
    this.total = 0;
    this.order = drinkOrdered;
  }
  receiptTotal() {
    for (let i = 0; i < this.order.length; i++) {
      console.log(this.order[i], menu[this.order[i]]);
      this.total += menu[this.order[i]];
    }
    console.log(`Your total is £${this.total.toFixed(2)}`);
    return this;
  }
}

// const order1 = new coffeeShop(["tea", "latte", "latte"]);
// order1.receiptTotal();

class customer extends coffeeShop {
  constructor(drinkOrdered, name) {
    super(drinkOrdered, name);
    this.name = name;
  }
  customerName() {
    if (wallet > this.total) {
      console.log(`Thanks for shopping ${this.name}`);
    } else console.log(`${this.name} you have insufficent funds`);
    return this;
  }
}

const order2 = new customer(["tea", "water", "tea", "coffee"], "Nath");
order2.receiptTotal().customerName();
