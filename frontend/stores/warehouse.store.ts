import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { 
    GetWarehouseDetails,
    GetWarehouseList,
    DeleteWarehouseItem,
    EditWarehouseItem,
    CreateWarehouseItem
} from '@/domain/apis/warehouse.api';
import { Warehouse } from '@/domain/models/Warehouse.model';
import { HTTPService } from '@/infrastructure/services/HTTPService';

const getWarehouseList = HTTPService.createRequest<GetWarehouseList.ResponseDTO, {}, {}>(GetWarehouseList.api);
const getWarehouseDetails = HTTPService.createRequest<GetWarehouseDetails.ResponseDTO, {}, {}>(GetWarehouseDetails.api);
const deleteWarehouseItem = HTTPService.createRequest<{}, {}, {}>(DeleteWarehouseItem.api);
const editWarehouseItem = HTTPService.createRequest<{}, EditWarehouseItem.RequestDTO, {}>(EditWarehouseItem.api);
const createWarehouseItem = HTTPService.createRequest<CreateWarehouseItem.ResponseDTO, CreateWarehouseItem.RequestDTO, {}>(CreateWarehouseItem.api);

interface WarehouseStore {
    warehouses: Array<Warehouse>;
    warehouseDetails?: Warehouse;
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
    fetchWarehouseDetails: async (warehouseId: string) => {
        const response = await getWarehouseDetails({
            body: {},
            queryParams: {},
            pathParams: { warehouseId }
        });

        set({
            warehouseDetails: response,
        });
    },
    deleteWarehouseItem: async (warehouseId: string, warehouseItemId: string) => {
        await deleteWarehouseItem({
            body: {},
            queryParams: {},
            pathParams: {
                warehouseId,
                warehouseItemId
            }
        });

        set((state) => {
            const warehouse = state.warehouses
                .find((warehouse) => warehouse.id === warehouseId);

            if (!warehouse) {
                return;
            }

            warehouse.products = warehouse.products.filter((product) => product.id !== warehouseItemId);
        });
    },
    editWarehouseItem: async (warehouseId: string, warehouseItemId: string, data: EditWarehouseItem.RequestDTO) => {
        await editWarehouseItem({
            body: data,
            queryParams: {},
            pathParams: {
                warehouseId,
                warehouseItemId
            }
        });

        set((state) => {
            const warehouse = state.warehouses
                .find((warehouse) => warehouse.id === warehouseId);

            if (!warehouse) {
                return;
            }

            const product = warehouse.products.find((product) => product.id === warehouseItemId);

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
    createWarehouseItem: async (warehouseId: string, data: CreateWarehouseItem.RequestDTO) => {
        const response = await createWarehouseItem({
            body: data,
            queryParams: {},
            pathParams: {
                warehouseId
            }
        });

        set((state) => {
            const warehouse = state.warehouses
                .find((warehouse) => warehouse.id === warehouseId);

            if (!warehouse) {
                return;
            }

            warehouse.products.push(response);
        });
    }
})));
