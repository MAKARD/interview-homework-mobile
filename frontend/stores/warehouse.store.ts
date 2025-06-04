import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { Warehouse } from '@/domain/models/Warehouse.model';
import { WarehouseItem } from '@/domain/models/WarehouseItem.model';

import { HTTPService } from '@/infrastructure/services/HTTPService';

import { GetWarehouseDetails, GetWarehouseList } from '@/domain/apis/warehouse.api';
import { CreateProduct, DeleteProduct, EditProduct } from '@/domain/apis/product.api';

const getWarehouseList = HTTPService.createRequest<GetWarehouseList.ResponseDTO, {}, {}>(GetWarehouseList.api);
const getWarehouseDetails = HTTPService.createRequest<GetWarehouseDetails.ResponseDTO, {}, {}>(GetWarehouseDetails.api);
const deleteProduct = HTTPService.createRequest<{}, {}, {}>(DeleteProduct.api);
const editProduct = HTTPService.createRequest<{}, EditProduct.RequestDTO, {}>(EditProduct.api);
const createProduct = HTTPService.createRequest<CreateProduct.ResponseDTO, CreateProduct.RequestDTO, {}>(CreateProduct.api);

interface WarehouseStore {
    warehouses: Array<WarehouseItem>;
    warehouseDetails?: Warehouse;

    clearWarehouseDetails(): void;
    fetchWarehouses(): Promise<void>;
    fetchWarehouseDetails(warehouseId: string): Promise<void>;

    deleteProduct(warehouseId: string, productId: string): Promise<void>;
    editProduct(warehouseId: string, productId: string, data: EditProduct.RequestDTO): Promise<void>;
    createProduct(warehouseId: string, data: CreateProduct.RequestDTO): Promise<void>;
}

export const useWarehouse = create<WarehouseStore>()(immer((set) => ({
    warehouses: [],
    clearWarehouseDetails: () => {
        set({
            warehouseDetails: undefined
        });
    },
    fetchWarehouses: async () => {
        const response = await getWarehouseList({
            body: {},
            queryParams: {},
            pathParams: {}
        });

        set({
            warehouses: response.warehouses
        });
    },
    fetchWarehouseDetails: async (warehouseId) => {
        const response = await getWarehouseDetails({
            body: {},
            queryParams: {},
            pathParams: { warehouseId }
        });

        set({
            warehouseDetails: response,
        });
    },
    deleteProduct: async (warehouseId, warehouseItemId) => {
        await deleteProduct({
            body: {},
            queryParams: {},
            pathParams: {
                warehouseId,
                warehouseItemId
            }
        });

        set((state) => {
            if (!state.warehouseDetails) {
                return;
            }

            state.warehouseDetails.products = state.warehouseDetails.products.filter((product) => product.id !== warehouseItemId);
        });
    },
    editProduct: async (warehouseId, productId, data) => {
        await editProduct({
            body: data,
            queryParams: {},
            pathParams: {
                warehouseId,
                productId
            }
        });

        set((state) => {
            if (!state.warehouseDetails) {
                return;
            }

            const product = state.warehouseDetails.products.find((product) => product.id === productId);

            if (!product) {
                return;
            }

            product.description = data.description || product.description;
            product.imageUrl = data.imageUrl || product.imageUrl;
            product.name = data.name || product.name;
            product.quantity = data.quantity || product.quantity;
            product.unitPrice = data.unitPrice || product.unitPrice;
        });
    },
    createProduct: async (warehouseId, data) => {
        const response = await createProduct({
            body: data,
            queryParams: {},
            pathParams: {
                warehouseId
            }
        });

        set((state) => {
            if (!state.warehouseDetails) {
                return;
            }

            state.warehouseDetails.products.push(response);
        });
    }
})));
