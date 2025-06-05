import { Product } from "../models/Product.model";
import { API } from "./api";

export namespace DeleteProduct {
    export const api: API = {
        method: 'DELETE',
        path: '/warehouse/:warehouseId/product/:productId'
    }
}

export namespace EditProduct {
    export const api: API = {
        method: 'PATCH',
        path: '/warehouse/:warehouseId/product/:productId'
    }

    export type RequestDTO = Partial<Pick<Product, "description" | "imageUrl" | "name" | "quantity" | "unitPrice">>
}

export namespace CreateProduct {
    export const api: API = {
        method: "POST",
        path: '/warehouse/:warehouseId/product'
    }

    export type RequestDTO = Pick<Product, "description" | "imageUrl" | "name" | "quantity" | "unitPrice">;

    export type ResponseDTO = Product;
}
