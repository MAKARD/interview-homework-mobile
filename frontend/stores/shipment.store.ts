import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

import { GetShipmentsList } from '@/domain/apis/shipment.api';
import { Shipment } from '@/domain/models/Shipment.model';
import { HTTPService } from '@/infrastructure/services/HTTPService';

const getShipmentsList = HTTPService.createRequest<GetShipmentsList.ResponseDTO, {}, {}>(GetShipmentsList.api);

interface ShipmentStore {
    shipments: Array<Shipment>;
}

export const useShipment = create<ShipmentStore>()(immer((set) => ({
    shipments: [],
    fetchShipmentsInWarehouse: async (warehouseId: string) => {
        const response = await getShipmentsList({
            body: {},
            queryParams: {},
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

