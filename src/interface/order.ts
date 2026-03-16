import type { Product } from "./product.js";

export interface order{
    id: number;
    customerName: string;
    products: Product[];
    isPremuimClient: boolean;
    status: "pending"| "completed"| "cancelled";
}