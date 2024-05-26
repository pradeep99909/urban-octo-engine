const { default: Api } = require("./api");

class Cart {
  constructor(userId) {
    this.api = new Api("localhost:8080/api/v1");
  }
  async getUserCart() {
    return this.api.getData("/cart");
  }
  async addNewCart(body) {
    return this.api.postData("/cart", body);
  }
  async updateCart(cartId, body) {
    return this.api.updateDate("/cart/" + cartId, body);
  }
  async removeItemFromCart(cartId) {
    return this.api.deletData("/cart/" + cartId);
  }
  async deleteCart() {
    return this.api.getData("/cart");
  }
}

export default Cart;
