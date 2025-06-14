import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { GetShipmentsList } from '@/domain/apis/shipment.api';
import { Shipment } from '@/domain/models/Shipment.model';
import { HTTPService } from '@/infrastructure/services/HTTPService';

const getShipmentsList = HTTPService.createRequest<GetShipmentsList.ResponseDTO, {}, {}>(GetShipmentsList.api);

interface ShipmentStore {
    shipments: Array<Shipment>;

    fetchShipmentsInWarehouse(warehouseId: string): Promise<void>;
    clearShipments(): void;
}

export const useShipment = create<ShipmentStore>()(immer((set) => ({
    shipments: [],
    fetchShipmentsInWarehouse: async (warehouseId) => {
        const response = await getShipmentsList({
            pathParams: {
                warehouseId
            }
        });

        set({
            shipments: response.shipments,
        });
    },
    clearShipments: () => {
        set({
            shipments: []
        })
    }
})));

