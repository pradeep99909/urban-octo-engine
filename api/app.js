const serverStart = () => {
  const cors = require("cors");
  const express = require("express");
  const app = express();
  const router = require("./routes/routes");
  app.use(cors());
  app.use(express.json());
  app.use("/api/v1", router);
  app.listen(8080, () => {
    console.log("Server Started running on port 8080!");
  });
};

const declareGlobal = () => {
  global.carts = {};
  global.orders = {};
  const products = [
    {
      id: 121,
      price: 199.99,
      title: "iPhone 5s",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205s/1.png",
    },
    {
      id: 122,
      price: 299.99,
      title: "iPhone 6",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/1.png",
    },
    {
      id: 123,
      price: 1099.99,
      title: "iPhone 13 Pro",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/1.png",
    },
    {
      id: 124,
      price: 899.99,
      title: "iPhone X",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/1.png",
    },
    {
      id: 125,
      price: 249.99,
      title: "Oppo A57",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20A57/1.png",
    },
    {
      id: 126,
      price: 399.99,
      title: "Oppo F19 Pro+",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20F19%20Pro+/3.png",
    },
    {
      id: 127,
      price: 299.99,
      title: "Oppo K1",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Oppo%20K1/1.png",
    },
    {
      id: 128,
      price: 149.99,
      title: "Realme C35",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20C35/1.png",
    },
    {
      id: 129,
      price: 299.99,
      title: "Realme X",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20X/1.png",
    },
    {
      id: 130,
      price: 349.99,
      title: "Realme XT",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Realme%20XT/1.png",
    },
    {
      id: 131,
      price: 299.99,
      title: "Samsung Galaxy S7",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S7/1.png",
    },
    {
      id: 132,
      price: 499.99,
      title: "Samsung Galaxy S8",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S8/1.png",
    },
    {
      id: 133,
      price: 699.99,
      title: "Samsung Galaxy S10",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Samsung%20Galaxy%20S10/1.png",
    },
    {
      id: 134,
      price: 249.99,
      title: "Vivo S1",
      images:
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20S1/1.png",
    },
    {
      id: 135,
      price: 299.99,
      title: "Vivo V9",
      image:
        "https://cdn.dummyjson.com/products/images/smartphones/Vivo%20V9/1.png",
    },
  ];
  global.products = products;

  global.coupons = [];
};

module.exports = {
  serverStart,
  declareGlobal,
};
