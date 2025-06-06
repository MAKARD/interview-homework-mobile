import { Product } from "./Product.model";

export interface Shipment {
    id: string;
    warehouseId: string;
    destination: string;
    products: Array<Product>;
    createdAt: number;
    updatedAt: number;
    status: "pending" | "in_transit" | "delivered" | "cancelled";
    notes?: string;
}
