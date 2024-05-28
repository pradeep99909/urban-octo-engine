const { default: Api } = require("./api");

class Order {
  constructor(userId) {
    this.api = new Api("http://localhost:8080/api/v1/order");
  }
  async getUserOrder() {
    return this.api.getData("/");
  }
  async addNewOrder(body) {
    return this.api.postData("/", body);
  }
  async getOrder(orderId) {
    return this.api.getData("/" + orderId);
  }
  async updateCart(orderId, body) {
    return this.api.updateDate("/" + orderId, body);
  }
  async cancelOrder(orderId) {
    return this.api.deletData("/" + orderId);
  }
  async verifyCoupon(body) {
    return this.api.postData("/verify", body);
  }
}

export default Order;
