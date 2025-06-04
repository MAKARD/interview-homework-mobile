import { ShipmentItem } from "./ShipmentItem.model";

export interface Shipment {
    id: string;
    warehouseId: string;
    destination: string;
    items: Array<ShipmentItem>
    createdAt: number;
    updatedAt: number;
    status: "pending" | "in_transit" | "delivered" | "cancelled";
    notes?: string;
}
