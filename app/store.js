import Value from "./Models/Value.js";
import Item from "./Models/Item.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Item[]} */
  items: [
    new Item({
      name: "Fruit Snack Gummies",
      description: "Fruit salad done right.",
      price: 1.00,
      amount: 45
    }),
    new Item({
      name: "Plant Food",
      description: "Are you hungry? I could use a light snack.",
      price: 5.00,
      amount: 20
    }),
    new Item ({
      name: "Admiral-able Ack-Bar",
      description: "Snack like an Admiral.",
      price: .75,
      amount: 3
    }),
    new Item ({
      name: "Paranormal Snacktivity",
      description: "The perfect midnight snack.",        
    }),
    new Item({
      name: "The Void",
      description: "This snack eats you!",
      price: 3.25,
      amount: 1
    })
  ],
  /** @type {Item[]} */
  myItems: [],
  quarter: 0
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
