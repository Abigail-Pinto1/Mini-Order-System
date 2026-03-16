import type { order } from "../interface/order.js";
import type { Product } from "../interface/product.js";
export declare function calculateOrderTotal(order: order): number;
export declare function addProduct(order: order, product: Product): order;
export declare function completeOrder(order: order): order;
export declare function getExpensiveProducts(order: order, minPrice: number): Product[];
export declare function cancelOrder(order: order): order;
//# sourceMappingURL=orderProducts.d.ts.map