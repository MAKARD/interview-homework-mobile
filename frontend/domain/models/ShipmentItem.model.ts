import { Product } from "./Product.model";

export interface ShipmentItem {
    id: string;
    quantity: number;
    products: Array<Product>
}