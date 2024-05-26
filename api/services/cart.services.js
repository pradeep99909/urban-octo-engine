const getUserCart = (userId) => {
  if (!global.carts[userId]) {
    const error = new Error();
    error.message = "User cart do not exists!";
    return error;
  }
  return global.carts[userId];
};

const addToUserCart = (userId, cartData) => {
  console.log("🚀 ~ addToUserCart ~ userId, cartData:", userId, cartData);
  cartData.id = Date.now();
  if (!global.carts[userId]) {
    global.carts[userId] = [];
  }
  global.carts[userId].push(cartData);
  return cartData;
};

const updateUserCart = (userId, cartId, cartData) => {
  if (!global.carts[userId]) {
    const error = new Error();
    error.message = "User cart do not exists!";
    return error;
  }
  const cartIndex = global.carts[userId].findIndex((cart) => cart.id == cartId);
  if (cartIndex < 0) {
    const error = new Error();
    error.message = "Cart item do not exists!";
    return error;
  }
  global.carts[userId][cartIndex].quantity = cartData.quantity;
  return cartData;
};

const deleteUserCart = (userId) => {
  if (!global.carts[userId]) {
    const error = new Error();
    error.message = "User cart do not exists!";
    return error;
  }
  const deletedCart = global.carts[userId];
  delete global.carts[userId];
  return deletedCart;
};

const deleteItemCart = (userId, cartId) => {
  console.log("🚀 ~ deleteItemCart ~ userId, cartId:", userId, cartId);
  const cartIndex = global.carts[userId].findIndex((cart) => cart.id == cartId);
  if (cartIndex < 0) {
    const error = new Error();
    error.message = "Cart item do not exists!";
    return error;
  }
  const removedCart = global.carts[userId][cartIndex];
  global.carts[userId].splice(cartIndex, 1);
  return removedCart;
};

module.exports = {
  getUserCart,
  addToUserCart,
  updateUserCart,
  deleteUserCart,
  deleteItemCart,
};
