import _itemService from "../Services/ItemService.js"
import _store from "../store.js"

let _drawItem = function () {
  let template = '';
  _store.State.items.forEach(item => template += item.template)
  document.getElementById("itemDraw").innerHTML = template
}

let _drawQuarters = function() {
  document.getElementById('quarterCount').innerHTML = _store.State.quarter.toString();
}

export default class ItemController {
  constructor() {
    _drawItem()
  }

   buy(itemName) {
     _itemService.buy(itemName);
     _drawItem()
     _drawQuarters()
   }

  addQuarter() {
    _itemService.addQuarter();
    _drawQuarters()
  }

}