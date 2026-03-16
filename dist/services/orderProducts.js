export function calculateOrderTotal(order) {
    if (order.status === "cancelled") {
        return 0;
    }
    const subtotal = order.products.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0);
    let finalTotal = subtotal;
    if (order.isPremuimClient) {
        /* apply 10% discount.
        100% -10% = 90%
        90/100 = 0.9 */
        finalTotal *= 0.9;
    }
    if (subtotal > 3000) {
        /*apply additional 5% discount for products greater than 3000
        100% -5% = 95%
        95/100 = 0.95 */
        finalTotal *= 0.95;
    }
    return finalTotal;
}
export function addProduct(order, product) {
    if (order.status === "completed" || order.status === "cancelled") {
        throw new Error("cannot add products to a cpmpleted or cancelled order");
    }
    const existingProduct = order.products.find(p => p.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += product.quantity;
    }
    else {
        order.products.push(product);
    }
    return order;
}
export function completeOrder(order) {
    if (order.status !== "pending") {
        throw new Error("only pending orders can be completed");
    }
    if (order.products.length === 0) {
        throw new Error("Order must contain at least one product");
    }
    order.status = "completed";
    return order;
}
export function getExpensiveProducts(order, minPrice) {
    return order.products.filter(product => product.price > minPrice);
}
export function cancelOrder(order) {
    if (order.status === "completed") {
        throw new Error("completed orders cannot be cancelled");
    }
    if (order.status !== "pending") {
        throw new Error("only pending orders can be cancelled");
    }
    order.status = "cancelled";
    return order;
}
//# sourceMappingURL=orderProducts.js.map