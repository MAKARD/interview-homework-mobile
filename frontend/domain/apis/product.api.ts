import { Product } from "../models/Product.model";
import { API } from "./api";

export namespace DeleteProduct {
    export const api: API = {
        method: 'DELETE',
        path: '/warehouses/:warehouseId/:productId'
    }
}

export namespace EditProduct {
    export const api: API = {
        method: 'PATCH',
        path: '/warehouses/:warehouseId/:productId'
    }

    export type RequestDTO = Partial<Pick<Product, "description" | "imageUrl" | "name" | "quantity" | "unitPrice">>
}

export namespace CreateProduct {
    export const api: API = {
        method: "POST",
        path: '/warehouses/:warehouseId'
    }

    export type RequestDTO = Pick<Product, "description" | "imageUrl" | "name" | "quantity" | "unitPrice">;

    export type ResponseDTO = Product;
}
