import _itemService from "../Services/ItemService.js"
import _store from "../store.js"

let _drawItem = function () {
  let template = '';
  _store.State.items.forEach(item => template += item.template)
  document.getElementById("itemDraw").innerHTML = template
}

export default class ItemController {
  constructor() {
    _drawItem()
  }

  addQuarter() {
    _itemService.addQuarter();
  }

}