import Item from "../Models/Item.js"
import _Store from "../store.js"

class ItemService {
  constructor() {
  }
  buy(itemName) {
    let myItem = _Store.State.items.find(item => item.name == itemName)
    if (_Store.State.quarter >= myItem.price && myItem.amount > 0){
      _Store.State.quarter -= myItem.price;
      _Store.State.items.forEach(item => {
        if (item.name == itemName){
          item.amount--;
        }
      })
      _Store.State.myItems.push(myItem)
    }
  }
  
  addQuarter() {
    _Store.State.quarter += .25
  }
  
}

const ITEMSERVICE = new ItemService();

export default ITEMSERVICE;