/* eslint-disable no-undef */
const services = require("../services");
const { declareGlobal } = require("../app");

let couponCode = "";

describe("Cart and Order Functionality", () => {
  let item1, item2, updatedCart;
  console.log = function () {};
  console.error = function () {};
  declareGlobal();

  it("should add item 1 to cart", () => {
    item1 = { id: 1, name: "Item 1", price: 100, quantity: 1 };
    updatedCart = services.cartServices.addToUserCart("pradeep", item1);
    expect(updatedCart).toBe(item1);
  });

  it("should add item 2 to cart", () => {
    item2 = { id: 2, name: "Item 2", price: 200, quantity: 1 };
    updatedCart = services.cartServices.addToUserCart("pradeep", item2);

    expect(updatedCart).toBe(item2);
  });

  it("should add items to order", () => {
    const orderAdded = services.orderServices.addOrder("pradeep");
    couponCode = orderAdded.new_coupon_code.code;

    expect(orderAdded.orders).toEqual(expect.arrayContaining([item1, item2]));
    expect(orderAdded).toHaveProperty("new_coupon_code");
    expect(orderAdded).toHaveProperty("new_coupon_code.code");
    expect(orderAdded).toHaveProperty("new_coupon_code.discount");
    expect(orderAdded).toHaveProperty("new_coupon_code.expireAt");
    expect(orderAdded).toHaveProperty("new_coupon_code.isUsed");
  });
  // using coupon code
  it("should add item 1 to cart", () => {
    item1 = { id: 1, name: "Item 1", price: 100, quantity: 1 };
    updatedCart = services.cartServices.addToUserCart("pradeep", item1);
    expect(updatedCart).toBe(item1);
  });

  it("should add item 2 to cart", () => {
    item2 = { id: 2, name: "Item 2", price: 200, quantity: 1 };
    updatedCart = services.cartServices.addToUserCart("pradeep", item2);

    expect(updatedCart).toBe(item2);
  });

  it("should add items to order with coupon code", () => {
    const orderAdded = services.orderServices.addOrder("pradeep", couponCode);

    expect(orderAdded.orders).toEqual(expect.arrayContaining([item1, item2]));
    expect(orderAdded).toHaveProperty("coupon_code_used");
  });

  it("should fail when verifying wrong coupon code", () => {
    const verifyCouponCode =
      services.orderServices.verifyCouponCode("425hghgf");
    expect(verifyCouponCode).toHaveProperty("code");
  });

  it("should fail when verifying duplicate coupon code", () => {
    const verifyCouponCode =
      services.orderServices.verifyCouponCode(couponCode);
    expect(verifyCouponCode).toHaveProperty("code");
  });
});
