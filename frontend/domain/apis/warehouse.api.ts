import { Warehouse } from "../models/Warehouse.model";
import { WarehouseItem } from "../models/WarehouseItem.model";
import { API } from "./api";

export namespace GetWarehouseList {
    export const api: API = {
        method: 'GET',
        path: '/warehouses'
    }

    export interface ResponseDTO {
        warehouses: Array<WarehouseItem>;
    }
}

export namespace GetWarehouseDetails {
    export const api: API = {
        method: 'GET',
        path: '/warehouses/:warehouseId'
    }

    export type ResponseDTO = Warehouse;
}
