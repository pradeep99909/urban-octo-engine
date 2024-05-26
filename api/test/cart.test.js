const services = require("../services");
let date = null;

const testAddUserCart = () => {
    global.carts = {};
    const cart = {
        productId: 1,
        quantity: 2
    }
    const addCart = services.cartServices.addToUserCart("pradeep", cart);
    console.log("addCart ::", addCart);
    date = addCart.id;
}
const testAddUserCart1 = () => {
    const cart = {
        productId: 3,
        quantity: 4
    }
    const addCart = services.cartServices.addToUserCart("pradeep", cart);
    console.log("addCart :: 1 ::", addCart);
}

const testGetUSerCart = () => {
    const cart = services.cartServices.getUserCart("pradeep");
    console.log("cart ::", cart)
}

const testUpdateUserCart = () => {
    const cart = {
        productId: 1,
        quantity: 4
    }
    const u_orders = services.cartServices.updateUserCart("pradeep", date, cart);
    console.log("testUpdateOrder :: u_orders ::", u_orders);
}

const testDeleteUserCart = () => {
    const deleteCart = services.cartServices.deleteUserCart("pradeep");
    console.log("deleteCart ::",deleteCart);
}

const testRemoveItemFromCart = () => {
    const deletedItemCart = services.cartServices.deleteItemCart("pradeep", date);
    console.log("testRemoveItemFromCart :: deletedItemCart ::",deletedItemCart);
}

testAddUserCart();
testAddUserCart1();
testGetUSerCart();
testUpdateUserCart();
testGetUSerCart();
testRemoveItemFromCart();
testGetUSerCart();
testDeleteUserCart();
testGetUSerCart();