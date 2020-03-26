import Item from "../Models/Item.js"
import _Store from "../store.js"

class ItemService {
  buy(itemName) {
    let myItem = _Store.State.items.find(item => item.name == itemName)
    if (_Store.State.quarter >= myItem.price){
      _Store.State.quarter -= myItem.price;
    }
    _Store.State.items.forEach(item => {
      if (item.name == itemName){
        item.amount--;
      }
    })
  }
  constructor() {
    console.log("Item service works")
  }
  
  addQuarter() {
    _Store.State.quarter += .25
  }
  
}

const ITEMSERVICE = new ItemService();

export default ITEMSERVICE;