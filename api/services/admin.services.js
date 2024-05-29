const crypto = require("crypto");

function generateCouponCode(length) {
  return crypto
    .randomBytes(length)
    .toString("base64")
    .slice(0, length)
    .replace(/\+/g, "0")
    .replace(/\//g, "1");
}

// Lists count of items purchased, total purchase amount, list of discount codes and total discount amount.
const data = () => {
  let totalPurchaseAmount = 0;
  let listpurchased = [];
  let listdisCountCoupon = [];
  let totalDiscountAmount = 0;

  console.log("global.orders ::");

  const ordersArray = Object.values(global.orders);
  console.log("🚀 ~ data ~ ordersArray:", ordersArray);

  for (let i = 0; i < ordersArray.length; i++) {
    const orderSet = ordersArray[i];

    for (const orderId in orderSet) {
      const order = orderSet[orderId];
      console.log("🚀 ~ data ~ orderId:", orderId);
      console.log("🚀 ~ data ~ order:", order);

      totalPurchaseAmount += order.totalPrice;

      for (let j = 0; j < order.orders.length; j++) {
        console.log("🚀 ~ data ~ order.orders[j]:", order.orders[j]);
        listpurchased.push(order.orders[j]);
      }

      if (order.new_coupon_code) {
        listdisCountCoupon.push(order.new_coupon_code);
      }

      if (order.coupon_code_used) {
        const discount = order.new_coupon_code.discount / 100;
        totalDiscountAmount += order.totalPrice * discount;
      }
    }
  }

  return {
    totalPurchaseAmount,
    listpurchased,
    listdisCountCoupon,
    totalDiscountAmount,
  };
};

module.exports = {
  generateCouponCode,
  data,
};
