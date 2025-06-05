import { Warehouse } from "../models/Warehouse.model";
import { WarehouseItem } from "../models/WarehouseItem.model";
import { API } from "./api";

export namespace GetWarehouseList {
    export const api: API = {
        method: 'GET',
        path: '/warehouse'
    }

    export interface ResponseDTO {
        warehouses: Array<WarehouseItem>;
    }
}

export namespace GetWarehouseDetails {
    export const api: API = {
        method: 'GET',
        path: '/warehouse/:warehouseId'
    }

    export type ResponseDTO = Warehouse;
}
