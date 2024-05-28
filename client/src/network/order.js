const { default: Api } = require("./api");

class Cart {
  constructor(userId) {
    this.api = new Api("http://localhost:8080/api/v1");
  }
  async getUserOrder() {
    return this.api.getData("/order");
  }
  async addNewOrder() {
    return this.api.postData("/order");
  }
  async getOrder(orderId) {
    return this.api.getData("/order/" + orderId);
  }
  async updateCart(orderId, body) {
    return this.api.updateDate("/order/" + orderId, body);
  }
  async cancelOrder(orderId) {
    return this.api.deletData("/order/" + orderId);
  }
}

export default Cart;
