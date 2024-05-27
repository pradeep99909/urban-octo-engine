const CONSTANTS = require("../constants");
const services = require("./");

const getAllOrders = (userId) => {
  return global.orders[userId];
};

const getAllUserOrders = (userId) => {
  if (!global.orders[userId]) {
    const error = new Error();
    error.message = "User Do not Exists!";
    return error;
  }
  return global.orders[userId];
};

const getOrder = (userId, orderId) => {
  if (!global.orders[userId]) {
    const error = new Error();
    error.message = "User Do not Exists!";
    return error;
  }
  return global.orders[userId][orderId];
};

const addOrder = (userId) => {
  if (!global.carts[userId]) {
    const error = new Error();
    error.message = "Add some Items in Cart!";
    return error;
  }
  const order = {
    id: Date.now(),
  };
  order.orders = global.carts[userId];
  delete global.carts[userId];
  order.state = CONSTANTS.ENUM.ORDER_STATES.CONFIRMED;
  console.log("!global.orders[userId] ::", !global.orders[userId]);
  if (!global.orders[userId]) {
    console.log("!global.orders[userId] :: inside if");
    global.orders[userId] = {};
  }
  order.new_coupon_code = services.adminServices.generateCouponCode(
    CONSTANTS.MISC.COUPON_CODE_LENGTH
  );
  global.orders[userId][order.id] = order;
  return global.orders[userId][order.id];
};

const updateOrder = (userId, orderId, orders) => {
  if (!global.orders[userId]) {
    const error = new Error();
    error.message = "User Do not Exists!";
    return error;
  }
  if (!global.orders[userId][orderId]) {
    const error = new Error();
    error.message = "No Order Exists!";
    return error;
  }
  return (global.orders[userId][orderId]["orders"] = orders);
};

const cancelOrder = (userId, orderId) => {
  global.orders[userId][orderId]["state"] =
    CONSTANTS.ENUM.ORDER_STATES.CANCELLED;
  const deletedOrder = global.orders[userId][orderId];
  return deletedOrder;
};

module.exports = {
  getAllOrders,
  getAllUserOrders,
  getOrder,
  addOrder,
  updateOrder,
  cancelOrder,
};
