const CONSTANTS = require("../constants");

const getAllOrders = () => {
    return global.orders;
}

const getOrder = (userId, orderId) => {
    if (!global.orders[userId]) {
        const error = new Error();
        error.message = "User Do not Exists!"
        return error;
    }
    return global.orders[userId][orderId];
}

const addOrder = (userId, order) => {
    const orderId = order.id
    order.state = CONSTANTS.ENUM.ORDER_STATES.CONFIRMED;
    console.log("!global.orders[userId] ::", !global.orders[userId])
    if (!global.orders[userId]) {
        console.log("!global.orders[userId] :: inside if",)
        global.orders[userId] = {};
    }
    global.orders[userId][orderId] = order;
    return global.orders[userId][orderId];
}

const updateOrder = (userId, orderId, orders) => {
    if (!global.orders[userId]) {
        const error = new Error();
        error.message = "User Do not Exists!"
        return error;
    }
    if (!global.orders[userId][orderId]) {
        const error = new Error();
        error.message = "No Order Exists!"
        return error;
    }
    return global.orders[userId][orderId]["orders"] = orders;
}

const cancelOrder = (userId, orderId) => {
    global.orders[userId][orderId]["state"] = CONSTANTS.ENUM.ORDER_STATES.CANCELLED
    const deletedOrder = global.orders[userId][orderId];
    return deletedOrder;
}

module.exports = {
    getAllOrders,
    getOrder,
    addOrder,
    updateOrder,
    cancelOrder
}