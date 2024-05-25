const { response } = require("../utils");
const services = require("../services");
const getAllOrders = (req, res) => {
    try {  
        const data = services.orderServices.getAllOrders();
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: order.controllers.js :: getAllOrders :: error", error);
        return response.errorResponse(res, error);
    }
}

const getOrder = (req, res) => {
    try {
        const userId = req.userId;
        const orderId = req.params.orderId;
        const data = services.orderServices.getOrder(userId, orderId);
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: order.controllers.js :: getOrder :: error", error);
        return response.errorResponse(res, error);
    }
}

const addOrder = (req, res) => {
    try {
        const userId = req.userId;
        const orders = req.body.orders;
        const data = services.orderServices.addOrder(userId, orders);
        return response.resourceCreated(res, data);
    }
    catch (error) {
        console.error("file :: order.controllers.js :: addOrder :: error", error);
        return response.errorResponse(res, error);
    }
}

const updateOrder = (req, res) => {
    try {
        const userId = req.userId;
        const orderId = req.params.orderId;
        const orders = req.params.orders;
        const data = services.orderServices.updateOrder(userId, orderId, orders)
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: order.controllers.js :: updateOrder :: error", error);
        return response.errorResponse(res, error);
    }
}

const cancelOrder = (req, res) => {
    try {
        const userId = req.userId;
        const orderId = req.params.orderId;
        const data = services.orderServices.deleteOrder(userId, orderId);
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: order.controllers.js :: cancelOrder :: error", error);
        return response.errorResponse(res, error);
    }
}

module.exports = {
    getAllOrders,
    getOrder,
    addOrder,
    updateOrder,
    cancelOrder
}