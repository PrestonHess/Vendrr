import ValuesController from "./Controllers/ValuesController.js";
import ItemController from "./Controllers/ItemController.js";

class App {
  valuesController = new ValuesController();
  itemController = new ItemController();
}

window["app"] = new App();
