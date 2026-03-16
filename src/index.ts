import { addProduct, calculateOrderTotal, cancelOrder, completeOrder, getExpensiveProducts } from "./services/orderProducts.js";

// Initialize the order object
const order: any = {
  products: [],
  status: "pending"
};

addProduct(order, {
  id: 1,
  name: "Laptop",
  price: 2000,
  quantity: 1
});

addProduct(order, {
  id: 2,
  name: "Mouse",
  price: 50,
  quantity: 2
});

// Calculate total
const total = calculateOrderTotal(order);
console.log("Order Total:", total);

// Get expensive products
const expensiveProducts = getExpensiveProducts(order, 100);
console.log("Expensive Products:", expensiveProducts);

// Complete order
completeOrder(order);
console.log("Order completed:", order);

// Try cancelling (should fail)
try {
  cancelOrder(order);
} catch (error) {
  console.error("Error:", (error as Error).message);
}