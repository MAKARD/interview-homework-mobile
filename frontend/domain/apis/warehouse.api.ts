import { Warehouse } from "../models/Warehouse.model";
import { WarehouseItem } from "../models/WarehouseItem.model";
import { API } from "./api";

export namespace GetWarehouseList {
    export const api: API = {
        method: 'GET',
        path: '/warehouses'
    }

    export interface ResponseDTO {
        warehouses: Array<Warehouse>;
    }
}

export namespace GetWarehouseDetails {
    export const api: API = {
        method: 'GET',
        path: '/warehouses/:warehouseId'
    }

    export type ResponseDTO = Warehouse;
}

export namespace DeleteWarehouseItem {
    export const api: API = {
        method: 'DELETE',
        path: '/warehouses/:warehouseId/:warehouseItemId'
    }
}

export namespace EditWarehouseItem {
    export const api: API = {
        method: 'PATCH',
        path: '/warehouses/:warehouseId/:warehouseItemId'
    }

    export type RequestDTO = Partial<Pick<WarehouseItem, "description" | "imageUrl" | "name" | "quantity" | "unitPrice">>
}

export namespace CreateWarehouseItem {
    export const api: API = {
        method: "POST",
        path: '/warehouses/:warehouseId'
    }

    export type RequestDTO = Pick<WarehouseItem, "description" | "imageUrl" | "name" | "quantity" | "unitPrice">;

    export type ResponseDTO = Warehouse;
}
