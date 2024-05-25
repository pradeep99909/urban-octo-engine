const services = require("../services");
const { response } = require("../utils");

const getUserCart = (req, res) => {
    try {
        const userId = req.userId;
        const data = services.cartServices.getUserCart(userId);
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: cart.controllers.js :: getUserCart :: error ::",error);
        return response.errorResponse(res, error)
    }
}

const addToUserCart = (req, res) => {
    try {
        const userId = req.userId;
        const cartData = req.body.cart;
        const data = services.cartServices.addToUserCart(userId, cartData);
        return response.resourceCreated(res, data);
    }
    catch (error) {
        console.error("file :: cart.controllers.js :: addToUserCart :: error ::",error);
        return response.errorResponse(res, error)
    }
}

const updateUserCart = (req, res) => {
    try {
        const userId = req.userId;
        const cartId = req.params.cartId;
        const cartData = req.body.cartData;
        const data = services.cartServices.updateUserCart(userId, cartId, cartData);
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: cart.controllers.js :: updateUserCart :: error ::",error);
        return response.errorResponse(res, error)
    }
}

const deleteUserCart = (req, res) => {
    try {
        const userId = req.userId;
        const data = services.cartServices.getUserCart(userId);
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: cart.controllers.js :: deleteUserCart :: error ::",error);
        return response.errorResponse(res, error)
    }
}

const deleteItemCart = (req, res) => {
    try {
        const userId = req.userId;
        const cartId = req.params.cartId;
        const data = services.cartServices.deleteItemCart(userId, cartId);
        return response.successResponse(res, data);
    }
    catch (error) {
        console.error("file :: cart.controllers.js :: deleteItemCart :: error ::",error);
        return response.errorResponse(res, error)
    }
}

module.exports = {
    getUserCart,
    addToUserCart,
    updateUserCart,
    deleteUserCart,
    deleteItemCart
}