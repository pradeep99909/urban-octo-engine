const { default: Api } = require("./api");

class Products {
  constructor(userId) {
    this.api = new Api("http://localhost:8080/api/v1");
  }
  async getAllProducts() {
    return await this.api.getData("/product");
  }
}

export default Products;
