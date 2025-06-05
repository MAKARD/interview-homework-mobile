import { Product } from "./Product.model";

export interface Warehouse {
    id: string;
    name: string;
    products: Array<Product>
}
