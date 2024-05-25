const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
    
    res.status(200).send(orders);
});

app.post("/", (req, res) => {
    const orders = [{orderId: "1"}, {orderId: "2"}];
    res.status(200).send(orders);
});

app.patch("/:id", (req, res) => {
    const orders = [{orderId: "1"}, {orderId: "2"}];
    res.status(200).send(orders);
});

app.delete("/:id", (req, res) => {
    const orders = [{orderId: "1"}, {orderId: "2"}];
    res.status(200).send(orders);
});


module.exports = app;