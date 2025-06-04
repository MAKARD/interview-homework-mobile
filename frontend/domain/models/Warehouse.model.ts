import { WarehouseItem } from "./WarehouseItem.model";

export interface Warehouse {
    id: string;
    name: string;
    products: Array<WarehouseItem>
}