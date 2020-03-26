import Item from "../Models/Item.js"
import _Store from "../store.js"

class ItemService {
  constructor() {
    console.log("Item service works")
  }
  
  addQuarter() {
    _Store.State.quarter += .25
    document.getElementById('quarterCount').innerHTML = _Store.State.quarter.toString();
  }
  
}

const ITEMSERVICE = new ItemService();

export default ITEMSERVICE;