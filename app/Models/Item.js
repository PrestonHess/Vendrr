
// NOTE This is the model for the items available for purchase
export default class Item {
  constructor(data) {
    this.name = data.name
    this.description = data.description
    this.price = data.price
    this.amount = data.amount
  }

  get purchasedTemplate(){
    return /*html*/ `
    <div class="col-4 border border-success rounded shadow">
    <h3>${this.name}</h3>
    <h5>Description :</h5>
    <dl>
      ${this.description}
    </dl>
  </div>
    `
  }

  get template() {
    return  /*html*/`
    <div class="col-4 border border-warning rounded shadow">
      <h3>${this.name}</h3>
      <h5>Description :</h5>
      <dl>
        ${this.description}
      </dl>
      <h5>Price :</h5>
      <dl>
        ${this.price}
      </dl>
      <h5>Amount :</h5>
      <dl>
        ${this.amount}
      </dl>
      <button class="btn btn-danger" onclick="app.itemController.buy('${this.name}')">BUY ${this.name}</button>
    </div>
    `
  } 

}

  

