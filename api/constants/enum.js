const ORDER_STATES = {
    PENDING: 0, //The order has been created but not yet confirmed or processed.
    CONFIRMED: 1, // The order has been confirmed and is ready to be processed.
    PROCESSING: 2, //The order is currently being processed.
    SHIPPED: 3, //The order has been shipped but not yet delivered.
    DELIVERED: 4, //The order has been delivered to the customer.
    CANCELLED: 5, //The order has been cancelled.
    RETURNED: 6 //The order has been returned by the customer.
}

module.exports = {
    ORDER_STATES
}