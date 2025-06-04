import { WarehouseItem } from "./WarehouseItem.model";

export interface ShipmentItem {
    id: string;
    quantity: number;
    products: Array<WarehouseItem>
}