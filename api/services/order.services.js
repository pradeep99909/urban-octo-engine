const CONSTANTS = require("../constants");
const adminServices = require("./admin.services");

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

const addOrder = (userId, couponCode) => {
  if (!global.carts[userId]) {
    const error = new Error();
    error.message = "Add some Items in Cart!";
    return error;
  }
  const productId = Date.now();
  const order = {
    id: productId,
  };
  if (couponCode) {
    const couponIndex = global.coupons.findIndex(
      (coupon) => coupon.code == couponCode
    );
    global.coupons[couponIndex].isUsed = true;
    order["coupon_code_used"] = global.coupons[couponIndex];
  }
  order.orders = global.carts[userId];
  delete global.carts[userId];
  order.state = CONSTANTS.ENUM.ORDER_STATES.CONFIRMED;
  order.totalPrice = order.orders.reduce((acc, val) => acc + val.price, 0);
  console.log("!global.orders[userId] ::", !global.orders[userId]);
  if (!global.orders[userId]) {
    console.log("!global.orders[userId] :: inside if");
    global.orders[userId] = {};
  }
  order["new_coupon_code"] = {
    code: adminServices.generateCouponCode(CONSTANTS.MISC.COUPON_CODE_LENGTH),
    expireAt: Date.now() + CONSTANTS.MISC.COUPON_EXPIRE_TIME,
    discount: CONSTANTS.MISC.COUPON_DISCOUNT,
    isUsed: false,
  };
  global.coupons.push(order.new_coupon_code);
  global.orders[userId][productId] = order;
  return global.orders[userId][productId];
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

const verifyCouponCode = (couponCode) => {
  const couponIndex = global.coupons.findIndex(
    (coupon) => coupon.code == couponCode
  );
  if (couponIndex < 0) {
    const error = new Error();
    error.message = "Wrong Coupon Code";
    throw error;
  }
  if (global.coupons[couponIndex].expireAt < Date.now()) {
    const error = new Error();
    error.message = "Coupon COde Expired!";
    throw error;
  }
  if (global.coupons[couponIndex].isUsed) {
    const error = new Error();
    error.message = "Coupon Already Used!";
    throw error;
  }
  return global.coupons[couponIndex];
};

module.exports = {
  getAllOrders,
  getAllUserOrders,
  getOrder,
  addOrder,
  updateOrder,
  cancelOrder,
  verifyCouponCode,
};
