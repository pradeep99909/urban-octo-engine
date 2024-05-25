const router = require("./routes/routes");

const serverStart = () => {
    const express = require("express");
    const app = express();
    app.use("/api/v1", router);
    app.listen(8080, ()=>{
        console.log("Server Started running on port 8080!")
    })
}

const declareGlobal = () => {
    global.carts = {};
    global.orders = {};
}

module.exports = {
    serverStart,
    declareGlobal
}