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
};

module.exports = {
  serverStart,
  declareGlobal,
};
